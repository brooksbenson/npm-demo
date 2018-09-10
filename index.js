const _ = require('underscore');
const drip = require('fall-splash-drip');

const result = _.contains([1, 2, 3], 2);
console.log(result);
console.log(drip.drip());
console.log(drip.drop());

/*
  Reference

  npm: a command line tool for managing
  3rd party node modules.

  npm init: creates a package.json file.

  package.json: A JSON file that describes
  meta data about an app or module.
  
  npm i (install): used to locally install a 
  node module as an application dependency.

  npm i --save-dev: used to locally install a 
  node module as a development dependency.

  npm i -g: used to globally install a node
  module, usually to be used as a cli.

  npm list: used to list an apps dependency
  graph.

  npm view: used to view info about a particular
  dependency.

  npm outdated: used to list outdated packages
  according to semver.

  npm-update: used to update packages according
  to semver.

  npm-check-updates: a 3rd party, globally installed
  node module for managing modules updates. Capable
  of unconstrained updates.

  npm un (uninstall): used to uninstall a module from
  a project.

  npm version: used to update custom package versions
  according to semver.

  npm publish: used to publish a package to the npm
  registry.
*/
