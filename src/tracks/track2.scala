package audio.track2

import scala.scalajs.js.annotation.*
import scala.scalajs.js
import audio.libs.elementary.{*, given}

def myPhasor(hz: AudioNode) =
  (hz / sr).accum((hz * 1.0).train)

val playback = myPhasor(0.25).table("sample1")

@JSExportTopLevel("track2")
def audioChannels() = js.Array(playback, playback)
