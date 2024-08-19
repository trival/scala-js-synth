package audio.libs

import scala.scalajs.js
import scala.scalajs.js.annotation.*

class AudioNode extends js.Object

@js.native
@JSImport("@elemaudio/core", "el")
object El extends js.Object:
  def const(props: js.Object): AudioNode = js.native
  def cycle(n: AudioNode): AudioNode = js.native

extension (node: AudioNode) inline def cycle: AudioNode = El.cycle(node)

given Conversion[Double, AudioNode] with
  inline def apply(x: Double): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )

given Conversion[Int, AudioNode] with
  inline def apply(x: Int): AudioNode =
    El.const(
      new js.Object:
        val value = x
    )
