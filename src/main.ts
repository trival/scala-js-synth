import './style.css'
import { test2, test } from './scala/main.js'
import { getCore } from './ctx.js'

console.log(test2(5, 3))

// sounds

const val = test()
getCore().then((core) => {
  core.render(...val)
})

if (import.meta.hot) {
  import.meta.hot.accept()
}
