preview:
	bundle exec jekyll clean
	bundle exec jekyll serve --trace

build:
	bundle exec jekyll clean
	bundle exec jekyll build --trace

# https://github.com/linaro-its/jekyll-link-checker/wiki/Using-the-link-checker
checklinks: build
	docker run --rm -it -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -u "$(id -u)":"$(id -g)" -v `pwd`:/srv linaroits/linkcheck --skip-path `/_includes`

# --ignore-urls skips the register, which is not part of this repository;
# html-proofer 5 matches a plain string against the whole URL, hence the regex.
# It also skips eLife and UNESCO IIEP, which answer automated requests with 406
# or not at all, but work in a browser.
# --swap-urls drops the fragment of Wikidata query and matrix.to links: it is
# read by JavaScript, not an anchor in the page. html-proofer 5 checks it as
# one anyway; for the Wikidata link (a whole SPARQL query) it crashes with
# "Nokogiri::XML::XPath::SyntaxError: Invalid predicate". Workaround suggested
# upstream in https://github.com/gjtorikian/html-proofer/issues/810
proof: build
	bundle exec htmlproofer ./_site --no-enforce-https --ignore-status-codes 999,403,429 --ignore-urls 'localhost:4000,/^(https://codecheck\.org\.uk)?\/register(\/|$$)/,/^https://(elifesciences\.org|www\.iiep\.unesco\.org)\//' \
		--swap-urls 'query-scholarly\.wikidata\.org/#.*:query-scholarly.wikidata.org/,matrix\.to/#.*:matrix.to/'

# report pages that scroll sideways at phone width, i.e. content cut off with
# no way to reach it; PATHS and WIDTH override the defaults
overflow: build
	./test/overflow.py $(if $(WIDTH),--width $(WIDTH)) $(PATHS)

# the email template pages: mailto: links against the text, and
# assets/email-templates.js in headless Chrome, without network access
test-email: build
	./test/email_templates.py

# all tests, also run by .github/workflows/test.yml
test: test-email overflow

# ask the Wayback Machine to capture every page in the published sitemap (not
# the register); IA_ACCESS_KEY/IA_SECRET_KEY allow more captures, DELAY sets the
# seconds between them, ARGS=--dry-run only lists the pages
archive:
	./tools/archive.py $(if $(DELAY),--delay $(DELAY)) $(ARGS)

# headless-Chrome screenshots of the built site at phone/tablet/desktop widths,
# see test/screenshot.sh for options (paths, viewports, output directory)
screenshots:
	./test/screenshot.sh -b $(PATHS)
.PHONY: preview build checklinks proof overflow test-email test screenshots archive
