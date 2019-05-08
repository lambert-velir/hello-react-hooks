## Quench v5.0.0

- Adding `.babelrc` file instead of hardcoding the babel config inside of `createJsTask`.
- Upgrading babel to version 7.
- Renaming `createCssTask` to `createSassTask` to disambiguate between other css tasks.
- Removing `createJsConcatTask` in favor of configuring `createJsSimpleTask`.
- Fixing bug in `createBrowserSync` task so local.js `proxy` is respected
- Removing fileExists in favor of fs.existsSync
- Upgrading to Gulp 4
- Transpiling node_modules for IE compatibility
