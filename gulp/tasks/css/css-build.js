const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync')
const cssnano = require('cssnano')
const gulp = require('gulp')
const gulpIf = require('gulp-if')
const postcss = require('gulp-postcss')
const postcssImport = require('postcss-import')
const uncss = require('gulp-uncss')

module.exports = function(config) {
    const server = browserSync.get(config.staticServer.name)

    return function() {
        return gulp
            .src(config.src.css)
            .pipe(
                postcss([
                    postcssImport,
                    autoprefixer({
                        browsers: ['last 2 versions']
                    })
                ])
            )
            .pipe(gulpIf(config.isProduction, uncss({ html: [config.src.html] })))
            .pipe(
                postcss([
                    cssnano({
                        discardComments: {
                            removeAll: true
                        }
                    })
                ])
            )
            .pipe(gulp.dest(config.dest.css))
            .pipe(server.stream())
    }
}
