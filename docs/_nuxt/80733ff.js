(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{266:function(e,t,r){var content=r(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(38).default)("44b1dc6a",content,!0,{sourceMap:!1})},290:function(e,t,r){"use strict";r(266)},291:function(e,t,r){var o=r(37)(!1);o.push([e.i,"ul[data-v-415abec0]{list-style-type:none;margin:0;padding:0;display:flex;flex-direction:column-reverse}li[data-v-415abec0]{margin-top:3px;margin-bottom:3px;height:28px;cursor:url(/icons/Pointer.svg) 4 0,pointer;border:2px solid var(--color)}.selected[data-v-415abec0]{border:2px dashed var(--color)}.add[data-v-415abec0]{margin-top:5px;font-size:24px;text-align:center;cursor:url(/icons/Pointer.svg) 4 0,pointer;border:none}input[data-v-415abec0],input[data-v-415abec0]:focus{background:transparent;border:0;margin:0;padding:0 0 0 3px;height:24px;line-height:24px;width:100%;outline:none;color:var(--color)}.del[data-v-415abec0],.duplicate[data-v-415abec0]{background:var(--color);color:var(--bg);width:24px;height:24px;background-repeat:no-repeat;background-size:20px 20px;background-position:50%}.del[data-v-415abec0]{background-image:url(/icons/Delete.svg)}.duplicate[data-v-415abec0]{background-image:url(/icons/Duplicate.svg)}.layer[data-v-415abec0]{position:relative}.options[data-v-415abec0]{opacity:0;position:absolute;display:flex;justify-content:flex-end;align-items:center;top:0;right:0}.layer:hover .options[data-v-415abec0]{opacity:1}",""]),e.exports=o},298:function(e,t,r){"use strict";r.r(t);var o={computed:{frame:function(){return this.$store.state.frameSelected},frames:function(){return this.$store.state.frames},layer:function(){return this.$store.state.layerSelected}},methods:{updateName:function(e,t){var r=t.target.value;console.log(r),this.$store.commit("renameLayer",{layer:e,value:r})},add:function(){this.$store.commit("addLayer")},selectLayer:function(e){this.$store.commit("selectLayer",e)},duplicate:function(e){this.$store.commit("duplicateLayer",e)},del:function(e){this.$store.commit("delLayer",e)}}},n=(r(290),r(18)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ul",e._l(e.frames[e.frame-1],(function(t,o){return r("li",{key:o,staticClass:"layer",class:e.layer==o+1?"selected":"",on:{click:function(t){return e.selectLayer(o+1)}}},[r("input",{attrs:{type:"name"},domProps:{value:t.name},on:{input:function(t){return e.updateName(o,t)}}}),e._v(" "),r("div",{staticClass:"options"},[r("div",{staticClass:"duplicate",on:{click:function(t){return e.duplicate(o)}}}),e._v(" "),e.frames[e.frame-1].length>1?r("div",{staticClass:"del",on:{click:function(t){return e.del(o)}}}):e._e()])])})),0),e._v(" "),r("ul",[r("li",{staticClass:"add",on:{click:function(t){return e.add()}}},[e._v("+")])])])}),[],!1,null,"415abec0",null);t.default=component.exports}}]);