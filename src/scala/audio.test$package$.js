'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_test$package$() {
}
export { $c_Laudio_test$package$ as $c_Laudio_test$package$ };
$p = $c_Laudio_test$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_test$package$;
/** @constructor */
function $h_Laudio_test$package$() {
}
export { $h_Laudio_test$package$ as $h_Laudio_test$package$ };
$h_Laudio_test$package$.prototype = $p;
$p.u = (function() {
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$1 = ({});
    this$1.value = 0;
    this$1.value = 440;
    return this$1;
  })());
  var $x_1 = $i_$0040elemaudio$002fcore.el.cycle(node$proxy1);
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$2 = ({});
    this$2.value = 0.0;
    this$2.value = 441.2;
    return this$2;
  })());
  return [$x_1, $i_$0040elemaudio$002fcore.el.cycle(node$proxy2)];
});
var $d_Laudio_test$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_test$package$, "audio.test$package$", ({
  i: 1
}));
export { $d_Laudio_test$package$ as $d_Laudio_test$package$ };
var $n_Laudio_test$package$;
function $m_Laudio_test$package$() {
  if ((!$n_Laudio_test$package$)) {
    $n_Laudio_test$package$ = new $c_Laudio_test$package$();
  }
  return $n_Laudio_test$package$;
}
export { $m_Laudio_test$package$ as $m_Laudio_test$package$ };
