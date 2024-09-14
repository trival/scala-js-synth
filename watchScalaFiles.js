import chokidar from 'chokidar'
import { exec } from 'node:child_process'
// One-liner for current directory

console.log('Watching scala files for changes...')

chokidar.watch('.').on('all', (event, path) => {
  if (/.*\.scala$/.test(path) && event === 'change') {
    console.log('scala file changed, recompiling:', path)
    exec('npm run build:scala', (err, stdout, stderr) => {
      if (err) {
        console.error(err)
        return
      } else if (stderr) {
        console.error(stderr)
        return
      }
      console.log(stdout)
    })
  }
})
