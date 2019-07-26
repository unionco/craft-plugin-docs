#!/usr/bin/env bash

set -e

yarn run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "deploy"

git push -f https://github.com/unionco/craft-plugin-docs.git master:gh-pages

cd -
