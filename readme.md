1. yarn install
2. yarn netlify dev
3. go to `http://localhost:8888/.netlify/functions/hello-world`
4. reload page multiple times : everything works
5. make some code change, for example update log message at https://github.com/jon301/netlify-dev-typeorm/blob/master/src/functions/hello-world/hello-world.js#L10
6. save file, then reload the page
7. netlify dev hot-reload crashes with the following error

```
◈ src/functions/hello-world/hello-world.js modified, reloading...
Request from ::1: GET /.netlify/functions/hello-world
Update this log message !
Response with status 200 in 472 ms.
{ DriverPackageNotInstalledError: SQLite package has not been found installed. Try to install it: npm install sqlite3 --save
    at new DriverPackageNotInstalledError (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/error/DriverPackageNotInstalledError.js:10:28)
    at SqliteDriver.loadDependencies (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/driver/sqlite/SqliteDriver.js:120:19)
    at new SqliteDriver (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/driver/sqlite/SqliteDriver.js:26:15)
    at DriverFactory.create (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/driver/DriverFactory.js:38:24)
    at new Connection (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/connection/Connection.js:53:59)
    at ConnectionManager.create (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/connection/ConnectionManager.js:56:26)
    at Object.<anonymous> (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/typeorm/index.js:202:66)
    at step (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/tslib/tslib.js:136:27)
    at Object.next (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/tslib/tslib.js:117:57)
    at /Users/jonjon/tmp/netlify-dev-typeorm/node_modules/tslib/tslib.js:110:75
  name: 'DriverPackageNotInstalledError',
  message:
   'SQLite package has not been found installed. Try to install it: npm install sqlite3 --save' }

/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/netlify-redirector/lib/redirects.js:116
      throw ex;
      ^
abort({"name":"DriverPackageNotInstalledError","message":"SQLite package has not been found installed. Try to install it: npm install sqlite3 --save"}) at Error
    at jsStackTrace (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/netlify-redirector/lib/redirects.js:1070:13)
    at stackTrace (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/netlify-redirector/lib/redirects.js:1087:12)
    at process.abort (/Users/jonjon/tmp/netlify-dev-typeorm/node_modules/netlify-redirector/lib/redirects.js:8415:44)
    at process.emit (events.js:198:13)
    at emitPromiseRejectionWarnings (internal/process/promises.js:140:18)
    at process._tickCallback (internal/process/next_tick.js:69:34)
error Command failed with exit code 7.

```
