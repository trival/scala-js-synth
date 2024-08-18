import scala.scalajs.js.annotation.*
import scala.scalajs.js
import audio.*

@JSExportTopLevel("test")
def audioChannels() = js.Array(cycle(440), 441.cycle)
