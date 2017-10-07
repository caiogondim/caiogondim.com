deploy:
	rsync -avz --stats -e ssh _site/ caiogondim@caiogondim.com:~/caiogondim.com/

build:
	bundler exec jekyll build

dev:
	bundler exec jekyll build --watch
