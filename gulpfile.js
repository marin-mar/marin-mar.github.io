const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const pugIncludeGlob = require('pug-include-glob');
const gcmq = require('gulp-group-css-media-queries');
const babel = require('gulp-babel');
const del = require('del');
const uglify = require('gulp-uglify');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');
const ttf2woff = require('gulp-ttf2woff');

const app = 'app/',
  dist = 'dist/';

const config = {
  app: {
    html: app + 'pug/index*.pug',
    style: app + 'scss/main.scss',
    js: app + 'js/main.js',
    fonts: app + 'fonts/**/*.*',
    img: app + 'img/**/*.*'
  },
  dist: {
    html: dist,
    style: dist + 'css/',
    js: dist + 'js/',
    fonts: dist + 'fonts/',
    img: dist + 'img/'
  },
  watch: {
    html: app + 'pug/**/*.pug',
    style: app + 'scss/**/*.scss',
    js: app + 'js/**/*.*',
    fonts: app + 'fonts/**/*.*',
    img: app + 'img/**/*.*'
  }
};

const webServer = () => {
  browserSync.init({
    server: {
      baseDir: dist
    },
    port: 9000,
    host: 'localhost',
    notify: false
  })
};

const pugTask = () => {
  return gulp.src(config.app.html)
    .pipe(plumber())
    .pipe(pug({
      pretty: false,
      plugins: [pugIncludeGlob()]
    }))
    .pipe(gulp.dest(config.dist.html))
    .pipe(browserSync.reload({ stream: true }))
};

const scssTask = () => {
  return gulp.src(config.app.style)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concat('main.min.css'))
    .pipe(gcmq())
    .pipe(cssnano())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dist.style))
    .pipe(browserSync.reload({ stream: true }))
};

const jsTask = () => {
  return gulp.src(config.app.js, { sourcemaps: true })
    .pipe(plumber())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dist.js))
    .pipe(browserSync.reload({ stream: true }))
};

const imgTask = () => {
  return gulp.src(config.app.img)
    .pipe(plumber())
    .pipe(changed(config.app.img))
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.8, 0.9] }),
      imagemin.svgo(),
    ]))
    .pipe(gulp.dest(config.dist.img))
    .pipe(browserSync.reload({ stream: true }))
};

const imgToWebpTask = () => (
  gulp.src(config.app.img)
  .pipe(plumber())
  .pipe(changed(config.app.img, { extension: '.webp' }))
  .pipe(imagemin([
    imageminWebp({ quality: 80 }),
  ]))
  .pipe(rename({
    extname: '.webp',
  }))
  .pipe(gulp.dest(config.dist.img))
  .pipe(browserSync.reload({ stream: true }))
);

const fontsTask = () => {
  return gulp.src(config.app.fonts)
    .pipe(plumber())
    .pipe(ttf2woff())
    .pipe(gulp.dest(config.dist.fonts))
    .pipe(browserSync.reload({ stream: true }))

};

const cleanTask = () => del(['dist']);

const watchFiles = () => {
  gulp.watch([config.watch.html], gulp.series(pugTask));
  gulp.watch([config.watch.style], gulp.series(scssTask));
  gulp.watch([config.watch.js], gulp.series(jsTask));
  gulp.watch([config.watch.img], gulp.series(imgTask, imgToWebpTask));
  gulp.watch([config.watch.fonts], gulp.series(fontsTask));
};

const start = gulp.series(
  pugTask,
  scssTask,
  jsTask,
  imgTask,
  imgToWebpTask,
  fontsTask
);

exports.default = gulp.parallel(
  start,
  watchFiles,
  webServer
);

exports.build = gulp.series(
  cleanTask,
  start
);