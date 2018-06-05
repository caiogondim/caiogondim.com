deploy: build
	now _site/

build:
	bundler exec jekyll build

dev:
	bundler exec jekyll server --host 0.0.0.0
