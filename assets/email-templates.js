// Placeholder form, register issue lookup and copy buttons for
// _includes/email-templates.html. Requires jQuery.
//
// The original texts are read once from the rendered .email-subject and
// .email-body elements, which the include builds from _data/emails/*.yml -
// the single source for both the visible text and the mailto: links.

// Reading a register issue: pure functions on the JSON of the GitHub REST
// API (issue and comments), so they can be tested without a browser.
var CodecheckIssue = (function () {
    var CERT_ID = /^\d{4}-\d{3}$/;

    // "https://github.com/codecheckers/register/issues/238", "codecheckers/register#238", "#238", "238"
    function issueNumber(text) {
        var m = $.trim(text || '').match(/^(?:https?:\/\/github\.com\/codecheckers\/register\/issues\/|codecheckers\/register#|#)?(\d+)\/?(?:[#?].*)?$/);
        return m ? m[1] : null;
    }

    // What the lookup was given: {issue: "238"} or {certificate: "2026-033"}, or null
    function parseInput(text) {
        var t = $.trim(text || '');
        if (CERT_ID.test(t)) return { certificate: t };
        var n = issueNumber(t);
        return n ? { issue: n } : null;
    }

    // register.csv from https://github.com/codecheckers/register: the issue
    // number of a certificate, or null (`NA`, or not in the register yet).
    function issueForCertificate(csv, id) {
        var rows = parseCsv(csv), header = rows.shift() || [];
        var cert = $.inArray('Certificate', header), issue = $.inArray('Issue', header);
        for (var i = 0; i < rows.length; i++) {
            if ($.trim(rows[i][cert] || '') === id && /^\d+$/.test($.trim(rows[i][issue] || ''))) return $.trim(rows[i][issue]);
        }
        return null;
    }

    // The last signed record the register bot (chekhovbot) wrote, e.g.
    // <!-- chekhov:record {"v":1,"roles":{"assigned_codechecker":"…","certificate":"2026-033",…}} -->
    function chekhovRecord(texts) {
        var record = null;
        $.each(texts, function (_, text) {
            var re = /<!--\s*chekhov:record\s+(\{[\s\S]*?\})\s*-->/g, m;
            while ((m = re.exec(text || '')) !== null) {
                try { record = JSON.parse(m[1]); } catch (e) { /* not a record */ }
            }
        });
        return record && record.roles ? record.roles : null;
    }

    // The JSON block the CODECHECK OJS plugin writes into the issue body
    // (https://github.com/codecheckers/ojs-codecheck), after the comment
    // "<!-- CODECHECK metadata: … -->" or in the older "JSON encoded CODECHECK metadata" details.
    function ojsMetadata(body) {
        if (!/CODECHECK metadata/.test(body || '')) return null;
        var m = body.match(/```json\s*\n([\s\S]*?)\n```/);
        if (!m) return null;
        try { return JSON.parse(m[1]); } catch (e) { return null; }
    }

    function stripPeriod(s) {
        return $.trim(s).replace(/[.\s]+$/, '');
    }

    function findTitle(body) {
        var m;
        body = (body || '').replace(/<!--[\s\S]*?-->/g, '');
        // OJS plugin and hand-written issues: "## Paper title"
        if ((m = body.match(/^##\s+(.+)$/m))) return { value: stripPeriod(m[1]), source: 'heading in the issue' };
        // a quoted title, e.g. 'For paper "…"' or '**Workflow**: … the manuscript "…"'
        if ((m = body.match(/["“]([^"“”\n]{15,}?)["”]/))) return { value: stripPeriod(m[1]), source: 'quoted title in the issue' };
        // a citation: "Author, A. (2026). Title. *Journal*"
        if ((m = body.match(/\(\d{4}[a-z]?\)\.\s+([^*\n]+?)\.\s+\*/))) return { value: stripPeriod(m[1]), source: 'citation in the issue' };
        return null;
    }

    function zenodoDoi(id) {
        return '10.5281/zenodo.' + id;
    }

    // "https://doi.org/10.5281/zenodo.1" -> "10.5281/zenodo.1"
    function bareDoi(doi) {
        return $.trim(doi).replace(/^https?:\/\/(dx\.)?doi\.org\//, '');
    }

    var DOI = /(?:https?:\/\/(?:dx\.)?doi\.org\/)?(10\.5281\/zenodo\.\d+|10\.53962\/[A-Za-z0-9.\-]+[A-Za-z0-9])/g;

    function lastDoi(text) {
        var found = null, m;
        DOI.lastIndex = 0;
        while ((m = DOI.exec(text || '')) !== null) found = m[1];
        var z = (text || '').match(/zenodo::(\d+)/g);
        if (!found && z) found = zenodoDoi(z[z.length - 1].split('::')[1]);
        return found;
    }

    // The certificate's DOI: the repository in the bot record, then the latest
    // Zenodo/ResearchEquals DOI in a comment by the codechecker, an editor or a
    // bot, then a `zenodo::` repository in the body. DOIs elsewhere in the body
    // or in the authors' comments usually belong to the authors' code or data.
    function findDoi(roles, body, comments, trusted) {
        if (roles && roles.repository && /^zenodo::\d+$/.test(roles.repository)) {
            return { value: zenodoDoi(roles.repository.split('::')[1]), source: 'bot record' };
        }
        for (var i = comments.length - 1; i >= 0; i--) {
            var user = comments[i].user;
            if (!user || !trusted(user)) continue;
            var d = lastDoi(comments[i].body);
            if (d) return { value: d, source: 'comment by @' + user.login };
        }
        var z = (body || '').match(/zenodo::(\d+)/);
        if (z) return { value: zenodoDoi(z[1]), source: 'repository in the issue' };
        return null;
    }

    function isEditor(login, editors) {
        return $.inArray(login.toLowerCase(), editors) >= 0;
    }

    function sameLogin(a, b) {
        return !!a && !!b && a.toLowerCase() === b.toLowerCase();
    }

    function joinNames(people) {
        var names = $.map(people || [], function (c) { return c.name || null; });
        return names.length ? names.join(' and ') : null;
    }

    function findCodechecker(roles, ojs, issue, editors) {
        var m, body = issue.body;
        if (roles && roles.assigned_codechecker) return { login: roles.assigned_codechecker, source: 'bot record' };
        var names = ojs && joinNames(ojs.codecheckers);
        if (names) return { value: names, source: 'OJS metadata' };
        if ((m = (body || '').match(/\*\*Codechecker(?:\(s\)|s)?:?\*\*:?\s*(.+)/i))) {
            var handle = m[1].match(/@([A-Za-z0-9-]+)/);
            if (handle) return { login: handle[1], source: 'issue text' };
            // "Jane Doe (Institution)" -> "Jane Doe"
            if (!/^\.\.\./.test($.trim(m[1]))) return { value: stripPeriod(m[1].replace(/<!--.*$/, '').replace(/\s*\(.*$/, '')), source: 'issue text' };
        }
        // an assignee who is not an editor
        var others = $.grep(issue.assignees || [], function (a) { return !isEditor(a.login, editors); });
        if (others.length) return { login: others[0].login, source: 'issue assignee' };
        return null;
    }

    // The handling editor: the bot record, else an editor among the assignees,
    // else the editor who commented last - never the codechecker.
    function findEditor(roles, issue, comments, ccLogin, editors) {
        if (roles && roles.handling_editor) return { login: roles.handling_editor, source: 'bot record' };
        function candidate(login) { return login && !sameLogin(login, ccLogin) && isEditor(login, editors); }
        var assigned = $.grep(issue.assignees || [], function (a) { return candidate(a.login); });
        if (assigned.length) return { login: assigned[0].login, source: 'issue assignee' };
        for (var i = comments.length - 1; i >= 0; i--) {
            var login = comments[i].user && comments[i].user.login;
            if (candidate(login)) return { login: login, source: 'comment by @' + login };
        }
        return null;
    }

    // codecheckers.csv from https://github.com/codecheckers/codecheckers:
    // the row of a GitHub handle as {name, orcid, email}, or null.
    function personFromCsv(csv, login) {
        var rows = parseCsv(csv), header = rows.shift() || [];
        var col = {};
        $.each(header, function (i, h) { col[$.trim(h)] = i; });
        var wanted = '@' + login.toLowerCase();
        for (var i = 0; i < rows.length; i++) {
            var r = rows[i];
            if ($.trim(r[col.handle] || '').toLowerCase() === wanted) {
                var email = (r[col.contact] || '').match(/[^\s<>()&,;]+@[^\s<>()&,;]+\.[A-Za-z]{2,}/);
                return { name: $.trim(r[col.name] || ''), orcid: $.trim(r[col.ORCID] || ''), email: email ? email[0] : null };
            }
        }
        return null;
    }

    // minimal RFC 4180 parser: quoted fields with commas, "" and newlines
    function parseCsv(text) {
        var rows = [], row = [], field = '', quoted = false;
        for (var i = 0; i < text.length; i++) {
            var c = text[i];
            if (quoted) {
                if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
                else if (c === '"') quoted = false;
                else field += c;
            } else if (c === '"') quoted = true;
            else if (c === ',') { row.push(field); field = ''; }
            else if (c === '\n' || c === '\r') {
                if (c === '\r' && text[i + 1] === '\n') i++;
                row.push(field); rows.push(row); row = []; field = '';
            } else field += c;
        }
        if (field || row.length) { row.push(field); rows.push(row); }
        return rows;
    }

    // "Author 1, Author 2 | 2026-033"
    var CERT_IN_TITLE = /\|\s*(\d{4}-\d{3})\b/;

    function findCertificate(roles, ojs, title) {
        var m;
        if (roles && CERT_ID.test(roles.certificate || '')) return { value: roles.certificate, source: 'bot record' };
        if (ojs && CERT_ID.test(ojs.identifier || '')) return { value: ojs.identifier, source: 'OJS metadata' };
        if ((m = (title || '').match(CERT_IN_TITLE))) return { value: m[1], source: 'issue title' };
        return null;
    }

    // issue: GitHub API issue JSON; comments: array of comment JSON;
    // editors: GitHub handles of the CODECHECK editors.
    // Returns {title, certificate, doi, codechecker, editor}, each {value|login, source} or null.
    function parse(issue, comments, editors) {
        comments = comments || [];
        editors = $.map(editors || [], function (e) { return e.toLowerCase(); });
        var texts = [issue.body].concat($.map(comments, function (c) { return c.body; }));
        var roles = chekhovRecord(texts);
        var ojs = ojsMetadata(issue.body);
        var codechecker = findCodechecker(roles, ojs, issue, editors);
        var ccLogin = codechecker && codechecker.login;
        // whose comments may carry the certificate DOI
        function trusted(user) {
            return user.type === 'Bot' || /bot$|\[bot\]$/i.test(user.login) ||
                isEditor(user.login, editors) || sameLogin(user.login, ccLogin);
        }
        return {
            title: findTitle(issue.body),
            certificate: findCertificate(roles, ojs, issue.title),
            doi: findDoi(roles, issue.body, comments, trusted),
            codechecker: codechecker,
            editor: findEditor(roles, issue, comments, ccLogin, editors)
        };
    }

    // a published certificate's register entry (register/certs/<id>/index.json):
    // {title, doi, codechecker} like parse(), each {value, source} or missing
    function fromRegisterEntry(entry) {
        var found = {}, names;
        if (!entry) return found;
        if (entry.paper && entry.paper.title) found.title = { value: stripPeriod(entry.paper.title), source: 'register' };
        if (entry.codecheck && entry.codecheck.report) found.doi = { value: bareDoi(entry.codecheck.report), source: 'register' };
        if (entry.codecheck && (names = joinNames(entry.codecheck.codecheckers))) found.codechecker = { value: names, source: 'register' };
        return found;
    }

    return { parseInput: parseInput, issueForCertificate: issueForCertificate, CERT_IN_TITLE: CERT_IN_TITLE,
        parse: parse, fromRegisterEntry: fromRegisterEntry, personFromCsv: personFromCsv };
})();

$(function () {
    var $fields = $('.email-fields');
    if (!$fields.length) return;
    var API = 'https://api.github.com/repos/codecheckers/register/issues/';
    var $inputs = $fields.find('input');

    // the elements and original texts of each template, read once
    var templates = $('.email-template').map(function () {
        var $t = $(this);
        var t = { $subject: $t.find('.email-subject'), $body: $t.find('.email-body'),
            $cc: $t.find('.email-cc'), $open: $t.find('.email-open') };
        t.subject = t.$subject.text();
        t.body = t.$body.text();
        t.cc = t.$cc.text();
        return t;
    }).get();

    function update() {
        var pairs = $inputs.map(function () {
            var value = $.trim(this.value);
            return value ? [[$(this).attr('data-placeholder'), value]] : null;
        }).get();
        function fill(text) {
            $.each(pairs, function (_, p) { text = text.split(p[0]).join(p[1]); });
            return text;
        }
        $.each(templates, function (_, t) {
            var subject = fill(t.subject), body = fill(t.body), cc = fill(t.cc);
            t.$subject.text(subject);
            t.$body.text(body);
            t.$cc.text(cc);
            // CC only once the placeholder holds an email address
            var ccParam = /^[^\s\[\]]+@[^\s\[\]]+$/.test(cc) ? 'cc=' + encodeURIComponent(cc) + '&' : '';
            t.$open.attr('href', 'mailto:?' + ccParam + 'subject=' + encodeURIComponent(subject) +
                '&body=' + encodeURIComponent(body));
        });
        save();
    }

    // the fields are saved in this browser after every change, one entry per
    // page (data-set), and restored on the next visit; storage can be
    // unavailable (private windows, blocked site data), so every access is guarded
    var STORE = 'codecheck-email-fields:' + ($fields.attr('data-set') || location.pathname);
    function save() {
        var values = {};
        $inputs.each(function () {
            var $i = $(this);
            if (this.value) values[$i.attr('data-placeholder')] = { value: this.value, auto: !!$i.data('auto') };
        });
        try {
            if ($.isEmptyObject(values)) window.localStorage.removeItem(STORE);
            else window.localStorage.setItem(STORE, JSON.stringify({ saved: new Date().toISOString(), fields: values }));
        } catch (e) { /* not saved, the page works without */ }
    }
    // returns when the restored values were saved, or null when nothing was restored
    function restore() {
        var stored = null;
        try { stored = JSON.parse(window.localStorage.getItem(STORE) || 'null'); } catch (e) { stored = null; }
        if (!stored || !stored.fields) return null;
        var any = false;
        $inputs.each(function () {
            var v = stored.fields[$(this).attr('data-placeholder')];
            if (v && typeof v.value === 'string') { $(this).val(v.value).data('auto', !!v.auto); any = true; }
        });
        return any ? (new Date(stored.saved || NaN)) : null;
    }

    // typing into a field makes it the user's: a later lookup leaves it alone
    $fields.removeAttr('hidden').on('input', 'input', function () {
        $(this).data('auto', false);
        update();
    });

    // say that the values come from an earlier visit, so nobody mistakes
    // them for the current check
    var $restored = $fields.find('.email-restored');
    var saved = restore();
    if (saved) {
        update();
        $restored.text('Restored from this browser' + (isNaN(saved) ? '' : ', saved ' +
            saved.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })) +
            ' - check them or use "Reset all fields"').removeAttr('hidden');
    }

    // register issue lookup: the issue field takes a URL, an issue number, or
    // a certificate ID; the certificate ID field starts a lookup, too
    var $issue = $fields.find('input[data-lookup="issue"]');
    var $certificate = $fields.find('input[data-from="certificate"]');
    var $status = $fields.find('.email-lookup-status');

    // a field the user typed into keeps its value; auto marks the lookup's
    function setField($input, value, auto) {
        value = $.trim(String(value || ''));
        if (!$input.length || !value) return false;
        if ($.trim($input.val()) && !$input.data('auto')) return false;
        $input.val(value).data('auto', auto);
        return true;
    }

    // empty a field that an earlier lookup filled, so no value of another
    // check is left in the emails
    function clearAuto($input) {
        if ($input.data('auto')) $input.val('').data('auto', false);
    }

    // people by GitHub handle: codecheckers.csv first (name, contact, ORCID),
    // then the ORCID record's public email, then the GitHub profile
    var CSV = 'https://raw.githubusercontent.com/codecheckers/codecheckers/master/codecheckers.csv';
    // a failed request counts as "nothing found"
    function always(promise) {
        return promise.then(function (v) { return v; }, function () { return null; });
    }
    // each file and profile is requested once per page view
    var cache = {};
    function once(url, request) {
        return cache[url] || (cache[url] = always(request ? request() : $.get(url)));
    }
    function person(login) {
        return once(CSV).then(function (csv) {
            return csv ? CodecheckIssue.personFromCsv(csv, login) : null;
        });
    }
    function githubUser(login) {
        var url = 'https://api.github.com/users/' + login;
        return once(url, function () { return $.getJSON(url); });
    }
    // the first of the sources that has an email address: [label, function returning a promise of it]
    function firstEmail(sources) {
        if (!sources.length) return $.when(null);
        return sources[0][1]().then(function (email) {
            return email ? { email: email, label: sources[0][0] } : firstEmail(sources.slice(1));
        });
    }
    function resolveName(found) {
        if (!found || !found.login) return null;
        return person(found.login).then(function (p) {
            if (p && p.name) { found.value = p.name; return; }
            return githubUser(found.login).then(function (u) { found.value = (u && u.name) || found.login; });
        });
    }
    function resolveEmail(found) {
        if (!found || !found.login) return null;
        var who = '@' + found.login;
        return person(found.login).then(function (p) {
            var orcid = p && /^\d{4}-\d{4}-\d{4}-\d{3}[\dX]$/.test(p.orcid) ? p.orcid : null;
            return firstEmail([
                ['in the codecheckers list', function () { return $.when(p && p.email); }],
                ['on ORCID', function () {
                    if (!orcid) return $.when(null);
                    var url = 'https://pub.orcid.org/v3.0/' + orcid + '/email';
                    return once(url, function () {
                        return $.ajax({ url: url, dataType: 'json', headers: { Accept: 'application/json' } });
                    }).then(function (r) { return r && r.email && r.email.length ? r.email[0].email : null; });
                }],
                ['on GitHub', function () { return githubUser(found.login).then(function (u) { return u && u.email; }); }]
            ]);
        }).then(function (r) {
            if (r) { found.value = r.email; found.source += ', ' + who + ' ' + r.label; }
            else found.missing = who + ' has no public email address';
        });
    }

    // a certificate's issue: the register's register.csv, else a search for
    // an issue title ending in "| YYYY-NNN" (checks still in progress)
    var REGISTER_CSV = 'https://raw.githubusercontent.com/codecheckers/register/master/register.csv';
    function issueOfCertificate(id) {
        return once(REGISTER_CSV).then(function (csv) {
            var number = csv ? CodecheckIssue.issueForCertificate(csv, id) : null;
            if (number) return { number: number, source: 'register' };
            var q = 'repo:codecheckers/register in:title "' + id + '"';
            return always($.getJSON('https://api.github.com/search/issues?q=' + encodeURIComponent(q))).then(function (r) {
                var hits = $.grep((r && r.items) || [], function (i) {
                    var m = i.title.match(CodecheckIssue.CERT_IN_TITLE);
                    return m && m[1] === id && !i.pull_request;
                });
                return hits.length ? { number: String(hits[0].number), source: 'issue search' } : null;
            });
        });
    }

    // a published certificate's register entry: the authoritative title and
    // (version) DOI, and the codecheckers' names
    function registerEntry(id) {
        if (!id) return $.when(null);
        return always($.getJSON('https://codecheck.org.uk/register/certs/' + id + '/index.json'));
    }

    // the issue and its newest comments (up to 200, oldest first): the
    // latest bot record and DOI are at the end of long issues. The first page
    // is requested together with the issue; most issues have no second one.
    function comments(number, page) {
        return $.getJSON(API + number + '/comments?per_page=100&page=' + page).then(function (d) { return d; });
    }
    function readIssue(number) {
        var editors = ($fields.attr('data-editors') || '').split(/\s+/);
        var issueRequest = $.getJSON(API + number).then(function (d) { return d; });
        return $.when(issueRequest, comments(number, 1)).then(function (issue, first) {
            var last = Math.ceil((issue.comments || 0) / 100);
            var newest = last <= 1 ? $.when(first, [])
                : last === 2 ? $.when(first, comments(number, 2))
                : $.when(comments(number, last - 1), comments(number, last));
            return newest.then(function (a, b) { return CodecheckIssue.parse(issue, a.concat(b), editors); });
        });
    }

    // the lookup under way: the change event of a field and the click on the
    // button that follows it start the same lookup only once, and only the
    // newest lookup fills in the fields
    var running = null;
    function lookup(text) {
        var input = CodecheckIssue.parseInput(text);
        var key = input ? (input.issue ? '#' + input.issue : input.certificate) : null;
        if (key && running && running.key === key) return;
        var me = running = { key: key };
        function current() {
            if (running !== me) return false;
            running = null;
            return true;
        }
        if (!input) {
            $status.text('Enter the URL or number of an issue in the CODECHECK register (e.g., https://github.com/codecheckers/register/issues/238, #238, or 238), or a certificate ID (e.g., 2026-033).');
            return;
        }
        var label = input.issue ? 'issue #' + input.issue : 'certificate ' + input.certificate;
        // a certificate ID typed into the issue field belongs in the certificate field
        if (input.certificate && $.trim($issue.val()) === input.certificate) {
            $issue.val('');
            setField($certificate, input.certificate, false);
            update();
        }
        $status.text('Looking up ' + label + ' …');
        var notes = [];

        var issue = input.issue ? $.when({ number: input.issue }) : issueOfCertificate(input.certificate);
        issue.then(function (i) {
            var parsed = i ? readIssue(i.number) : $.when({});
            return parsed.then(function (found) {
                if (i) {
                    $issue.val('https://github.com/codecheckers/register/issues/' + i.number).data('auto', !!i.source);
                    if (i.source) notes.push('issue #' + i.number + ' found via the ' + i.source);
                } else notes.push('no register issue found for certificate ' + input.certificate);
                if (input.certificate) found.certificate = { value: input.certificate, source: 'your input' };
                var id = found.certificate && found.certificate.value;
                return registerEntry(id).then(function (entry) {
                    // the register is authoritative for title and DOI; the
                    // issue's codechecker (a GitHub handle) is more precise
                    var reg = CodecheckIssue.fromRegisterEntry(entry);
                    if (reg.title) found.title = reg.title;
                    if (reg.doi) found.doi = reg.doi;
                    if (reg.codechecker && !found.codechecker) found.codechecker = reg.codechecker;
                    if (!i && !entry) return $.Deferred().reject({ notFound: true });
                    return $.when(resolveName(found.codechecker), resolveEmail(found.editor))
                        .then(function () { return found; });
                });
            });
        }).then(function (found) {
            if (!current()) return;
            // every field with a `from` key in the YAML, labelled by its placeholder
            var filled = [], missing = [];
            $inputs.filter('[data-from]').each(function () {
                var $input = $(this), f = found[$input.attr('data-from')];
                var l = $input.attr('data-placeholder').replace(/^\[|\]$/g, '');
                if (f && f.value && setField($input, f.value, true)) filled.push(l + ' (' + f.source + ')');
                else if (!(f && f.value)) {
                    clearAuto($input);
                    missing.push(l + (f && f.missing ? ' (' + f.missing + ')' : ''));
                }
            });
            update();
            $status.text((notes.length ? notes.join('; ') + '. ' : '') +
                (filled.length ? 'Filled in ' + filled.join(', ') + '. ' : 'Nothing new to fill in. ') +
                (missing.length ? 'Not found: ' + missing.join(', ') + '. ' : '') +
                'Please check the fields before you send.');
        }, function (xhr) {
            if (!current()) return;
            var reason = xhr && xhr.notFound ? 'it is neither in the register nor in an issue title'
                : xhr && xhr.status === 404 ? 'the issue does not exist'
                : xhr && (xhr.status === 403 || xhr.status === 429) ? 'GitHub limits anonymous requests to 60 per hour, try again later'
                : 'GitHub could not be reached';
            $status.text('Could not look up ' + label + ': ' + reason + '. You can still fill in the fields by hand.');
        });
    }

    // the button looks up the field typed into last, so a new certificate ID
    // wins over an issue URL restored from an earlier visit
    var $lastTyped = null;
    $issue.add($certificate).on('input', function () { $lastTyped = $(this); });
    $issue.on('change', function () { lookup($issue.val()); });
    $certificate.on('change', function () {
        var input = CodecheckIssue.parseInput(this.value);
        if (input && input.certificate) lookup(input.certificate);
    });
    var statusText = $status.text();
    $fields.find('.email-reset').on('click', function () {
        $inputs.val('').data('auto', false);
        running = null; // drop lookups still under way
        $lastTyped = null;
        $status.text(statusText);
        $restored.attr('hidden', '').text('');
        update();
    });

    $fields.find('.email-lookup-button').on('click', function () {
        var $from = $lastTyped && $.trim($lastTyped.val()) ? $lastTyped
            : $.trim($issue.val()) ? $issue : $certificate;
        lookup($from.val());
    });

    if (navigator.clipboard) {
        $('.email-copy').removeAttr('hidden').on('click', function () {
            var $button = $(this);
            navigator.clipboard.writeText($button.closest('.email-template').find('.email-body').text())
                .then(function () { $button.text('Copied'); },
                      function () { $button.text('Copy failed'); });
        });
    }
});
