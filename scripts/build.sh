if [[ `basename $PWD` == 'lib' || `basename $PWD` != 'common' ]]; then
  echo 'Only run build in root directory'
  exit 1
fi


echo 'Linting project...'
npm run lint --silent
if [[ $? == 2 ]]; then exit 1; fi

echo 'Building project...'
rm -rf lib
tsc
cp package.json lib
