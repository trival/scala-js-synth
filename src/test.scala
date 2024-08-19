package audio

import scala.scalajs.js.annotation.*
import scala.scalajs.js
import audio.libs.*
import audio.libs.given

@JSExportTopLevel("test")
def audioChannels() = js.Array(cycle(440), 441.2.cycle)
