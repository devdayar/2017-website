const browserSync = require('browser-sync')
const gulp = require('gulp')
const path = require('path')

const configPath = path.join(__dirname, 'gulp', 'configuration')
const config = require(configPath)

function getTask(taskName) {
    const taskPath = path.join(__dirname, 'gulp/tasks', taskName)
    return require(taskPath)(config)
}

browserSync.create(config.staticServer.name)

gulp.task('build', ['assets-build', 'compile'])

gulp.task('assets-build', ['assets-clean', 'assets-copy'])
gulp.task('assets-clean', getTask('assets/clean'))
gulp.task('assets-copy', ['assets-clean'], getTask('assets/copy'))

gulp.task('compile', ['html-build'], getTask('manifest/clean'))

gulp.task('css-build', ['css-clean', 'css-lint'], getTask('css/build'))
gulp.task('css-clean', getTask('css/clean'))
gulp.task('css-lint', getTask('css/lint'))

gulp.task('html-build', ['html-clean', 'css-build', 'js-build'], getTask('html/build'))
gulp.task('html-clean', getTask('html/clean'))

gulp.task('js-build', ['js-clean', 'js-lint'], getTask('js/build'))
gulp.task('js-clean', getTask('js/clean'))
gulp.task('js-lint', getTask('js/lint'))

gulp.task('manifest-clean', getTask('manifest/clean'))

gulp.task('browser-sync', getTask('general/browser-sync'))

gulp.task('watch', getTask('general/watch'))

gulp.task('default', ['build', 'watch'], getTask('general/browser-sync'))
