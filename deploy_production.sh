#!/bin/sh

# causes the shell to exit if any subcommand or pipeline returns a non-zero status.
set -e

BRANCH="Production"

git checkout master
git pull

git checkout production
git pull

git merge master --ff
git push

git tag --annotate --message="Deployed $BRANCH" $BRANCH-`date "+%Y%m%d%H%M%S"`
git push --tags

git checkout master
