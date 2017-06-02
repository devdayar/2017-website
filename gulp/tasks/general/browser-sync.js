const browserSync = require('browser-sync')

module.exports = function (config) {
    const server = browserSync.get(config.staticServer.name)

    return function () {
        server.init({
            open: false,
            port: 2345,
            reloadOnRestart: true,
            server: config.staticServer.dir,
            ui: false
        })
    }
}
