var gulp = require('gulp');
var path = require('path');
var runSequence = require('run-sequence');

var assetsDev = 'frontend/assets/';
var assetsProd = 'frontend/src/';

var appDev = 'frontend/dev/';
var appProd = 'frontend/app/';

/* Mixed */
var ext_replace = require('gulp-ext-replace');

/* CSS */
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

/* JS & TS */
var jsuglify = require('gulp-uglify');
var typescript = require('gulp-typescript');

/* Images */
var imagemin = require('gulp-imagemin');

var jsNPMDependencies = [
    'es6-shim/es6-shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'angular2/es6/dev/src/testing/shims_for_IE.js',
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js'
];

gulp.task('map-node-dependencies', function () {
    var mappedPaths = jsNPMDependencies.map(function(file) {
        return path.resolve('node_modules', file)
    });

    return gulp.src(mappedPaths, {base: 'node_modules'})
        .pipe(gulp.dest('frontend/libs'));
});

gulp.task('build-css', function () {
    return gulp.src(assetsDev + 'scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([precss, autoprefixer, cssnano]))
        .pipe(sourcemaps.write())
        .pipe(ext_replace('.css'))
        .pipe(gulp.dest(assetsProd + 'css/'));
});

gulp.task('build-ts-client', function() {
    var tsProject = typescript.createProject('frontend/tsconfig.json');
    return gulp.src(appDev + '**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest(appProd));
});
gulp.task('build-ts-server', function() {
    var tsProject = typescript.createProject('server/tsconfig.json');
    return gulp.src('server/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest('server-src/'));
});
gulp.task('build-ts', function() {
    var tsProject = typescript.createProject('server/tsconfig.json');
    return gulp.src('*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest('./'));
});

gulp.task('build', function (callback) {
    runSequence('build-ts-server', 'map-node-dependencies', 'build-ts-client', 'build-ts', callback);
});

gulp.task('build-img', function () {
    return gulp.src(assetsDev + 'img/**/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(assetsProd + 'img/'));
});

gulp.task('build-html', function () {
    return gulp.src(appDev + '**/*.html')
        .pipe(gulp.dest(appProd));
});

gulp.task('watch', function () {
    gulp.watch('*.ts', ['build-ts']);
    gulp.watch('server/**/*.ts', ['build-ts-server']);
    gulp.watch(appDev + '**/*.ts', ['build-ts-client']);
    gulp.watch(assetsDev + 'scss/**/*.scss', ['build-css']);
    gulp.watch(assetsDev + 'img/*', ['build-img']);
});

gulp.task('default', ['watch', 'build-html', 'build-css', 'build']);