#!/usr/bin/env bash
set -o errexit -o nounset
set -e

DEPLOY_REPO="https://${PAT}@github.com/codecheckers/codecheckers.github.io.git"

function main {
	clean
	get_current_site
	build_site
	deploy
}

function clean { 
	echo "cleaning _site folder"
	if [ -d "_site" ]; then rm -Rf _site; fi 
}

function get_current_site { 
	echo "getting latest site into the _site directory"
	
    # Initialize gh-pages checkout
    mkdir -p _site
    cd _site
    git init
    git config --global user.name "Travis CI"
    git config --global user.email daniel.nuest@uni-muenster.de
    git remote add upstream "$DEPLOY_REPO"
    git fetch upstream
    git reset upstream/gh-pages
    cd ..

}

function build_site { 
	echo "building site"
	bundle exec jekyll build --trace
}

function deploy {
	echo "deploying changes from the _site directory"

    # https://stackoverflow.com/a/13864829
	if [ -z "${TRAVIS_PULL_REQUEST}" ]; then
	    echo "except don't publish site for pull requests"
	    exit 0
	fi  

	if [ "${TRAVIS_BRANCH}" != "master" ]; then
	    echo "except we should only publish the master branch. stopping here"
	    exit 0
	fi

    cd _site
	
    touch .
	git add -A .
    git status
    git commit -m "Lastest site built on successful Travis build $TRAVIS_BUILD_NUMBER auto-pushed to github"
	
    # deploy directly to gh-pages branch
    git push -q upstream HEAD:gh-pages
}

main
