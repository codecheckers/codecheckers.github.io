preview:
	bundle exec jekyll clean
	bundle exec jekyll serve

build:
	bundle exec jekyll clean
	bundle exec jekyll build --trace

preview_container:
	docker run --rm -it -p 80:4000 -v $(shell pwd):/srv/jekyll jekyll/jekyll:stable jekyll serve
.PHONY: preview_container
