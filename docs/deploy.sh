#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'mathewcosta.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://mathewcst.github.io
#git push -f git@github.com:mathewcst/mathewcst.github.io.git master

# if you are deploying to https://mathewcst.github.io/<REPO>
git push -f git@github.com:mathewcst/site.git master:gh-pages

cd -