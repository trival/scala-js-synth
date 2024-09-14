'use strict';
import * as $i_$0040elemaudio$002fcore from "@elemaudio/core";
import * as $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6 from "./internal-3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.js";
var $p;
/** @constructor */
function $c_Laudio_track2_track2$package$() {
  this.l = null;
  $n_Laudio_track2_track2$package$ = this;
  var node$proxy3 = $m_Laudio_track2_track2$package$().A($i_$0040elemaudio$002fcore.el.const((() => {
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = 0.25;
    return this$1;
  })()));
  this.l = $i_$0040elemaudio$002fcore.el.table((() => {
    var this$2 = ({});
    this$2.path = null;
    this$2.path = "sample1";
    return this$2;
  })(), node$proxy3);
}
export { $c_Laudio_track2_track2$package$ as $c_Laudio_track2_track2$package$ };
$p = $c_Laudio_track2_track2$package$.prototype = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$h_O();
$p.constructor = $c_Laudio_track2_track2$package$;
/** @constructor */
function $h_Laudio_track2_track2$package$() {
}
export { $h_Laudio_track2_track2$package$ as $h_Laudio_track2_track2$package$ };
$h_Laudio_track2_track2$package$.prototype = $p;
$p.A = (function(hz) {
  var other$proxy1 = $i_$0040elemaudio$002fcore.el.sr();
  var node$proxy2 = $i_$0040elemaudio$002fcore.el.div(hz, other$proxy1);
  var other$proxy2 = $i_$0040elemaudio$002fcore.el.const((() => {
    var this$1 = ({});
    this$1.value = 0.0;
    this$1.value = 1.0;
    return this$1;
  })());
  var node$proxy1 = $i_$0040elemaudio$002fcore.el.mul(hz, other$proxy2);
  var reset$proxy1 = $i_$0040elemaudio$002fcore.el.train(node$proxy1);
  return $i_$0040elemaudio$002fcore.el.accum(node$proxy2, reset$proxy1);
});
$p.n = (function() {
  return [$m_Laudio_track2_track2$package$().l, $m_Laudio_track2_track2$package$().l];
});
var $d_Laudio_track2_track2$package$ = new $j_internal$002d3ebfae0cba70adf981029a0da5b1e4b5ab5d02c6.$TypeData().i($c_Laudio_track2_track2$package$, "audio.track2.track2$package$", ({
  j: 1
}));
export { $d_Laudio_track2_track2$package$ as $d_Laudio_track2_track2$package$ };
var $n_Laudio_track2_track2$package$;
function $m_Laudio_track2_track2$package$() {
  if ((!$n_Laudio_track2_track2$package$)) {
    $n_Laudio_track2_track2$package$ = new $c_Laudio_track2_track2$package$();
  }
  return $n_Laudio_track2_track2$package$;
}
export { $m_Laudio_track2_track2$package$ as $m_Laudio_track2_track2$package$ };
