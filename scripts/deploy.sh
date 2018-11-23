echo 'Linting project...'
npm run lint --silent
if [[ $? == 2 ]]; then exit 1; fi

npm run build --silent

cd lib
name=$(cat package.json | jq .name)
version=$(cat package.json | jq .version)

echo Publishing "$name"@"$version" | tr -d '"'
npm publish --access=public

cd ..
