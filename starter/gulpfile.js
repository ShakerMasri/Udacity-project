import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("build", shell.task("parcel build index.html"));
gulp.task("parcel server", shell.task("parcel index.html"));
//gulp.task("unit test", shell.task("mocha"));
gulp.task("test", shell.task(["mocha test/shuffle.js"]));
gulp.task("End to End test", shell.task("npx cypress run"));
gulp.task("test", gulp.series("unit test", "End to End test"));
gulp.task("default", gulp.series("build", "parcel server"));
