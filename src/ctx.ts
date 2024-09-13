import WebRenderer from '@elemaudio/web-renderer'
import sample1 from './assets/dr_n_bass.mp3'

export const ctx = new AudioContext()
const core = new WebRenderer()

let node: AudioNode
let isInitialized = false

const init = async () => {
  node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  })
  node.connect(ctx.destination)

  let res = await fetch(sample1)
  let sampleBuffer = await ctx.decodeAudioData(await res.arrayBuffer())
  core.updateVirtualFileSystem({
    sample1: sampleBuffer.getChannelData(0),
  })
  isInitialized = true
}

init()

export const getCore = () =>
  new Promise<typeof core>((resolve) => {
    function check() {
      if (isInitialized) {
        resolve(core)
      } else {
        requestAnimationFrame(check)
      }
    }
    check()
  })

const btn = document.getElementById('play-sound')
if (btn) {
  btn.addEventListener('click', () => ctx.resume())
}
