import './style.css'
import { track2 } from './build/main.js'
import { getCore } from './ctx.js'

// sounds

getCore().then((core) => {
  const val = track2()
  core.render(...val)
})

if (import.meta.hot) {
  import.meta.hot.accept()
}
