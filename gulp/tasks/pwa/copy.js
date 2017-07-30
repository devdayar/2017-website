const gulp = require('gulp')

module.exports = function(config) {
    return function() {
        return gulp.src(config.src.pwaManifest).pipe(gulp.dest(config.dest.pwaManifest))
    }
}
