//> using scala 3.4.2
//> using jsVersion 1.16.0
//> using jsMode full
//> using jsModuleKind es
//> using jsEsVersionStr es2021
//> using dep org.scala-js:scalajs-library_2.13:1.16.0

import scala.scalajs.js.annotation.*
import scala.scalajs.js
import scala.scalajs.given
import scala.scalajs.js.given

@JSExportTopLevel("testObj1")
val testObj1 = js.Dynamic.literal(a = 1, b = "bar")

@JSExportTopLevel("testObj2")
val testObj2 = new js.Object:
  val a = 1
  val b = "foo"
