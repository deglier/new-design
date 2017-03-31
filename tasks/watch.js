import {watch, series} from 'gulp'
import config from '../config'
import {devSass} from './styles'
import {copyRequirejs, devJs} from './javascript'
import {server} from './server'
import {compileViews} from './html'
import {copyFonts} from './fonts'
import {spriteSvg, compressImages} from './images'
import {tsCompiler} from './typescript'


export const devWatch = () => {
  watch(config.ts.watch, series(tsCompiler))
  watch(config.scripts.watch, series(devJs))
  watch(config.sass.watch, series(devSass))
  watch(config.pug.watch, series(compileViews))
  watch(config.svg.watch, series(spriteSvg))
  watch(config.images.watch, series(compressImages))
  // watch(`${paths.in}/**/*.html`, series(copyHtml))
}
