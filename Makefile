preview:
	bundle exec jekyll clean
	bundle exec jekyll serve --trace

build:
	bundle exec jekyll clean
	bundle exec jekyll build --trace

# https://github.com/linaro-its/jekyll-link-checker/wiki/Using-the-link-checker
checklinks: build
	docker run --rm -it -v /etc/passwd:/etc/passwd:ro -v /etc/group:/etc/group:ro -u "$(id -u)":"$(id -g)" -v `pwd`:/srv linaroits/linkcheck --skip-path `/_includes`

proof: build
	bundle exec htmlproofer ./_site --enforce_https=false --ignore-status-codes 999,403,429 --ignore-urls localhost:4000,/register