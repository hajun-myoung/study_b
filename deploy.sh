#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# CUSTOM SETTINGS : WROTE BY HAJUN

# copy and paste passive generated sitemap.xml from /study_b/ to /dist/
# -maxdepth 1 : for exclude childe folders
# find . -maxdepth 1 -name "sitemap.xml" -exec cp {} ./target/forder/ \;

# CUSTOM SETTINGS END

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:HaJunMyoung/study_b.git master:gh-pages

cd -