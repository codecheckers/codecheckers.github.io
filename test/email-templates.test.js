// Tests for assets/email-templates.js, injected by test/email_templates.py
// at the end of a built template page. No network: jQuery.ajax is replaced
// by a stub that answers from FIXTURES and records every requested URL; a
// fixture of null answers 404, and a URL without a fixture fails the tests.
// The result goes into document.title as "TESTS:<json>".
(function () {
    var set = $('.email-fields').attr('data-set');
    var restoring = /[?&]restore\b/.test(location.search);
    var STORE = 'codecheck-email-fields:' + set;

    // a saved value from an "earlier visit", read by the page's ready handler,
    // which runs after this script
    try {
        localStorage.removeItem(STORE);
        if (restoring) {
            localStorage.setItem(STORE, JSON.stringify({ saved: '2026-01-02T03:04:00Z',
                fields: { '[Title]': { value: 'Saved title', auto: false } } }));
        }
    } catch (e) { /* the restore test reports the failure */ }

    var ISSUES = 'api.github.com/repos/codecheckers/register/issues/';
    var REGISTER_CSV = 'raw.githubusercontent.com/codecheckers/register/master/register.csv';
    var PEOPLE_CSV = 'raw.githubusercontent.com/codecheckers/codecheckers/master/codecheckers.csv';
    var FIXTURES = {};
    // an issue and its first page of comments; null for both answers 404
    function issueFixture(number, issue, comments) {
        FIXTURES[ISSUES + number] = issue;
        FIXTURES[ISSUES + number + '/comments?per_page=100&page=1'] = issue ? comments : null;
    }

    var record = { v: 1, roles: { handling_editor: 'nuest', assigned_codechecker: 'checker1',
        certificate: '2026-033', repository: 'zenodo::555' } };
    var ISSUE_238 = { number: 238, title: 'Doe, Roe | 2026-033', comments: 2, assignees: [{ login: 'nuest' }],
        body: '## A paper title.\n\n<!-- chekhov:record ' + JSON.stringify(record) + ' -->' };
    var COMMENTS_238 = [
        { body: 'starting', user: { login: 'checker1', type: 'User' } },
        { body: 'our data: https://doi.org/10.5281/zenodo.999', user: { login: 'author1', type: 'User' } }
    ];
    issueFixture(238, ISSUE_238, COMMENTS_238);
    issueFixture(240, { number: 240, title: 'Smith | in progress', comments: 0, assignees: [], body: 'no metadata yet' }, []);
    issueFixture(14, { number: 14, title: 'Old | 2020-010', comments: 0, assignees: [], body: 'old' }, []);
    issueFixture(9999, null);
    FIXTURES['codecheck.org.uk/register/certs/2026-033/index.json'] = {
        paper: { title: 'The registered title.\n' },
        codecheck: { report: 'https://doi.org/10.5281/zenodo.556', codecheckers: [{ name: 'Check Er' }] }
    };
    FIXTURES['codecheck.org.uk/register/certs/2020-010/index.json'] = {
        paper: { title: 'An old check' },
        codecheck: { report: 'https://doi.org/10.5281/zenodo.100', codecheckers: [{ name: 'A' }, { name: 'B' }] }
    };
    FIXTURES[REGISTER_CSV] = 'Certificate,Repository,Type,Issue\n2020-010,github::x/y,journal,14\n2020-011,github::x/z,journal,NA\n';
    FIXTURES[PEOPLE_CSV] = 'name,handle,ORCID,contact,fields\n' +
        '"Checker, One",@checker1,0000-0001-0000-0001,"mail: one@example.org",x\n' +
        'Daniel Editor,@nuest,0000-0002-0024-5046,,x\n';
    FIXTURES['pub.orcid.org/v3.0/0000-0002-0024-5046/email'] = { email: [{ email: 'editor@example.org' }] };

    var requests = [], unexpected = [], pending = 0;
    $.ajax = function (url, options) {
        options = typeof url === 'object' ? url : $.extend({ url: url }, options);
        var key = options.url.replace(/^https?:\/\//, '');
        requests.push(key);
        if (!(key in FIXTURES)) unexpected.push(key);
        var d = $.Deferred();
        pending++;
        setTimeout(function () {
            pending--;
            if (FIXTURES[key] != null) d.resolve(FIXTURES[key], 'success', {});
            else d.reject({ status: 404 }, 'error', 'Not Found');
        }, 10);
        return d.promise();
    };
    function requested(re) {
        return $.grep(requests, function (u) { return re.test(u); }).length;
    }

    var results = [];
    function check(name, ok, detail) {
        results.push({ name: name, ok: !!ok, detail: ok ? undefined : detail });
    }
    function equal(name, actual, expected) {
        var a = JSON.stringify(actual), e = JSON.stringify(expected);
        check(name, a === e, 'got ' + a + ', expected ' + e);
    }
    function field(placeholder) {
        return $('.email-fields input[data-placeholder="[' + placeholder + ']"]');
    }
    function type(placeholder, value) {
        field(placeholder).val(value).trigger('input').trigger('change');
    }
    function href(id) {
        return decodeURIComponent($('#' + id + ' .email-open').attr('href'));
    }
    function finish() {
        equal('no request without a fixture', unexpected, []);
        document.title = 'TESTS:' + JSON.stringify(results);
    }
    // resolves once no stubbed request has been pending for a while (a lookup
    // starts its next request when the previous one is answered)
    function settled() {
        var d = $.Deferred(), quiet = 0;
        (function poll() {
            quiet = pending ? 0 : quiet + 1;
            if (quiet >= 5) d.resolve(); else setTimeout(poll, 20);
        })();
        return d.promise();
    }
    // runs the steps one after the other, each once the lookups of the one before have settled
    function steps(list) {
        return list.reduce(function (p, step) { return p.then(settled).then(step); }, $.when());
    }

    // before any input: each link carries exactly the subject and text shown
    function linkTests() {
        $('.email-template').each(function () {
            var a = $(this).find('.email-open')[0];
            var params = new URL(a.href.replace(/^mailto:/, 'mailto://x/')).searchParams;
            check('link matches text: ' + this.id,
                params.get('subject') === $(this).find('.email-subject').text() &&
                params.get('body') === $(this).find('.email-body').text() &&
                a.getAttribute('href').indexOf('+') < 0);
        });
        check('templates found', $('.email-template').length > 0);
    }

    function unitTests() {
        var C = CodecheckIssue;
        equal('parseInput URL', C.parseInput('https://github.com/codecheckers/register/issues/238'), { issue: '238' });
        equal('parseInput #number', C.parseInput(' #238 '), { issue: '238' });
        equal('parseInput number', C.parseInput('238'), { issue: '238' });
        equal('parseInput repo#number', C.parseInput('codecheckers/register#238'), { issue: '238' });
        equal('parseInput certificate', C.parseInput('2026-033'), { certificate: '2026-033' });
        equal('parseInput other text', C.parseInput('foo'), null);
        equal('parseInput other repository', C.parseInput('https://github.com/other/repo/issues/1'), null);

        equal('issueForCertificate', C.issueForCertificate(FIXTURES[REGISTER_CSV], '2020-010'), '14');
        equal('issueForCertificate NA', C.issueForCertificate(FIXTURES[REGISTER_CSV], '2020-011'), null);

        equal('personFromCsv quoted name and email', C.personFromCsv(FIXTURES[PEOPLE_CSV], 'Checker1'),
            { name: 'Checker, One', orcid: '0000-0001-0000-0001', email: 'one@example.org' });
        equal('personFromCsv unknown', C.personFromCsv(FIXTURES[PEOPLE_CSV], 'nobody'), null);

        var p = C.parse(ISSUE_238, COMMENTS_238, ['nuest']);
        equal('parse bot record certificate', p.certificate, { value: '2026-033', source: 'bot record' });
        equal('parse bot record codechecker', p.codechecker, { login: 'checker1', source: 'bot record' });
        equal('parse bot record editor', p.editor, { login: 'nuest', source: 'bot record' });
        equal('parse bot record DOI', p.doi, { value: '10.5281/zenodo.555', source: 'bot record' });
        equal('parse title heading', p.title, { value: 'A paper title', source: 'heading in the issue' });

        // without a bot record: title, assignees and comments
        var plain = { title: 'Doe | 2026-040', assignees: [{ login: 'nuest' }, { login: 'checker2' }], body: 'For paper "A quoted paper title here"' };
        var q = C.parse(plain, [
            { body: 'certificate: https://doi.org/10.5281/zenodo.700', user: { login: 'checker2', type: 'User' } },
            { body: 'our data https://doi.org/10.5281/zenodo.701', user: { login: 'author', type: 'User' } }
        ], ['NUEST']);
        equal('parse certificate from title', q.certificate, { value: '2026-040', source: 'issue title' });
        equal('parse codechecker: non-editor assignee', q.codechecker, { login: 'checker2', source: 'issue assignee' });
        equal('parse editor: editor assignee', q.editor, { login: 'nuest', source: 'issue assignee' });
        equal('parse DOI: codechecker comment, not the authors\'', q.doi, { value: '10.5281/zenodo.700', source: 'comment by @checker2' });
        equal('parse quoted title', q.title, { value: 'A quoted paper title here', source: 'quoted title in the issue' });

        var ojsBody = '<!-- CODECHECK metadata: do not edit -->\n```json\n' +
            JSON.stringify({ identifier: '2026-050', codecheckers: [{ name: 'Ann' }, { name: 'Bob' }] }) + '\n```';
        var o = C.parse({ title: 'x', assignees: [], body: ojsBody }, [], []);
        equal('parse OJS certificate', o.certificate, { value: '2026-050', source: 'OJS metadata' });
        equal('parse OJS codecheckers', o.codechecker, { value: 'Ann and Bob', source: 'OJS metadata' });

        var r = C.fromRegisterEntry(FIXTURES['codecheck.org.uk/register/certs/2026-033/index.json']);
        equal('register title trimmed', r.title, { value: 'The registered title', source: 'register' });
        equal('register DOI without prefix', r.doi, { value: '10.5281/zenodo.556', source: 'register' });
        equal('register entry missing', C.fromRegisterEntry(null), {});
    }

    function uiTests() {
        return steps([
            function () {
                check('form shown with JavaScript', !$('.email-fields').is('[hidden]'));
                check('copy buttons shown', !navigator.clipboard || $('.email-copy:not([hidden])').length === $('.email-template').length);

                // typing fills the placeholder in subject, body and link
                type('Your name', 'Typed Name');
                check('typed value in body', $('#first-contact .email-body').text().indexOf('Typed Name') >= 0);
                check('typed value in link', href('first-contact').indexOf('Typed Name') >= 0);
                check('no CC without an email', href('first-contact').indexOf('cc=') < 0);
                var saved = null;
                try { saved = JSON.parse(localStorage.getItem(STORE)); } catch (e) { /* reported below */ }
                equal('saved in the browser', saved && saved.fields['[Your name]'], { value: 'Typed Name', auto: false });

                // change event and button click start one lookup
                requests = [];
                type('Register issue URL', '#238');
                $('.email-lookup-button').click();
            },
            function () {
                equal('one issue request', requested(/issues\/238$/), 1);
                equal('lookup certificate', field('Certificate ID').val(), '2026-033');
                equal('lookup title from register', field('Title').val(), 'The registered title');
                equal('lookup DOI from register', field('Certificate DOI').val(), '10.5281/zenodo.556');
                equal('typed name kept', field('Your name').val(), 'Typed Name');
                equal('editor email via ORCID', field('Editor email').val(), 'editor@example.org');
                check('editor in CC', href('first-contact').indexOf('mailto:?cc=editor@example.org&subject=') === 0, href('first-contact').slice(0, 80));
                equal('issue URL normalised', field('Register issue URL').val(), 'https://github.com/codecheckers/register/issues/238');

                // an issue without metadata empties what the last lookup filled
                type('Register issue URL', '240');
            },
            function () {
                equal('old certificate removed', field('Certificate ID').val(), '');
                equal('old DOI removed', field('Certificate DOI').val(), '');
                equal('old editor removed', field('Editor email').val(), '');
                check('placeholder back in subject', $('#first-contact .email-subject').text().indexOf('[Certificate ID]') >= 0);
                equal('typed name still kept', field('Your name').val(), 'Typed Name');

                // a certificate ID typed last wins over the issue in the other field
                requests = [];
                field('Certificate ID').val('2020-010').trigger('input');
                $('.email-lookup-button').click();
            },
            function () {
                equal('issue found via register.csv', field('Register issue URL').val(), 'https://github.com/codecheckers/register/issues/14');
                equal('title of the old check', field('Title').val(), 'An old check');
                equal('codecheckers.csv not downloaded again', requested(/codecheckers\.csv$/), 0);

                // unknown issue: a message
                type('Register issue URL', '9999');
            },
            function () {
                check('error message', /does not exist/.test($('.email-lookup-status').text()), $('.email-lookup-status').text());

                $('.email-reset').click();
                equal('reset empties fields', $('.email-fields input').filter(function () { return this.value; }).length, 0);
                var left = 'unavailable';
                try { left = localStorage.getItem(STORE); } catch (e) { /* reported */ }
                equal('reset deletes saved values', left, null);
                check('placeholders back after reset', $('#first-contact .email-body').text().indexOf('[Title]') >= 0);
            }
        ]);
    }

    function restoreTests() {
        equal('restored value', field('Title').val(), 'Saved title');
        check('restored note shown', !$('.email-restored').is('[hidden]') &&
            /^Restored from this browser, saved /.test($('.email-restored').text()), $('.email-restored').text());
        check('restored value in body', $('#first-contact .email-body').text().indexOf('Saved title') >= 0);
    }

    // a page whose data file lists no `fields`: no form, but copy buttons
    function noFormTests() {
        check('no placeholder form', !$('.email-fields').length);
        check('copy buttons shown', !navigator.clipboard || $('.email-copy:not([hidden])').length === $('.email-template').length);
        check('greeting before every letter', $('.email-body').filter(function () {
            return $(this).text().indexOf('Dear Editor,\n\nThank you for considering') !== 0;
        }).length === 0);
    }

    $(function () {
        if (restoring) return restoreTests(), finish();
        linkTests();
        if (!set) return noFormTests(), finish();
        try { unitTests(); } catch (e) { check('unit tests ran', false, String(e)); }
        uiTests().then(finish);
    });
})();
