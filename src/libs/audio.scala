package audio

import scala.scalajs.js
import scala.scalajs.js.annotation.*

class AudioNode extends js.Object

@js.native
@JSImport("@elemaudio/core", "el")
object El extends js.Object {
  def cycle(fq: Double): AudioNode = js.native
}

extension (num: Double) inline def cycle: AudioNode = El.cycle(num)
