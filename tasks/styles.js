import {src, dest} from 'gulp'
import config from '../config'

import compileSass from 'gulp-sass'
import concatCss from 'gulp-concat'
import minifyCss from 'gulp-cssmin'
import browserPefixer from 'gulp-autoprefixer'
import sourcemaps from 'gulp-sourcemaps'
import browserSync from 'browser-sync'
import rename from 'gulp-rename'
import plumber from 'gulp-plumber'

export const devSass = () => src(config.sass.readPaths)
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(compileSass({style: 'compress',includePaths: ['scss'],onError: browserSync.notify}))
  // .pipe(concatCss("main.css"))
  .pipe(browserPefixer({browsers: config.sass.prefixs,cascade: false}))
  .pipe(minifyCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(dest(`${config.out}/${config.sass.out}/`))
  .pipe(browserSync.reload({stream:true}))