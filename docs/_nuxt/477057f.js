(window.webpackJsonp=window.webpackJsonp||[]).push([[11,18],{231:function(t,e,o){var content=o(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("3bbf6212",content,!0,{sourceMap:!1})},237:function(t,e,o){"use strict";o.r(e);o(23),o(81);var r={props:["doc"],computed:{width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frame:function(){return this.$store.state.frames[this.doc][0].colors}},methods:{transformToSvg:function(data){var t=this,e="";return data.forEach((function(o){var r=o.x,n=o.y,c=t.pixelWH,l="M".concat((r-1)*c,",").concat((n-1)*c," ").concat(r*c,",").concat((n-1)*c," ").concat(r*c,",").concat(n*c," ").concat((r-1)*c,",").concat(n*c," ");e+=l})),e},selectFrame:function(t){this.$store.commit("selectFrame",t)},duplicate:function(){this.$store.commit("duplicateFrame",this.doc)},del:function(){this.$store.commit("delFrame",this.doc)}}},n=(o(242),o(18)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("div",{staticClass:"frame"},[o("div",{staticClass:"number"},[t._v(t._s(t.doc+1))]),t._v(" "),o("div",{staticClass:"duplicate",on:{click:t.duplicate}}),t._v(" "),this.$store.state.frames.length>1?o("div",{staticClass:"del",on:{click:t.del}}):t._e(),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 "+t.width*t.pixelWH+" "+t.height*t.pixelWH},on:{click:function(e){return t.selectFrame(t.doc+1)}}},t._l(t.frame,(function(e,r){return o("path",{key:r,style:"fill:#"+r,attrs:{d:t.transformToSvg(e.pixels)}})})),0)])])}),[],!1,null,"954675f0",null);e.default=component.exports},242:function(t,e,o){"use strict";o(231)},243:function(t,e,o){var r=o(37)(!1);r.push([t.i,".box[data-v-954675f0]{display:block;position:relative}.frame[data-v-954675f0]{width:100%;height:auto;min-height:50px;width:auto;display:flex;justify-content:center;align-items:center}svg[data-v-954675f0]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.number[data-v-954675f0]{position:absolute;top:0;left:0;background:var(--color);color:var(--bg);min-width:24px;height:24px;border-radius:0 0 4px 0;display:flex;justify-content:center;align-items:center}.duplicate[data-v-954675f0]{bottom:0;border-radius:4px 0 0 0}.del[data-v-954675f0],.duplicate[data-v-954675f0]{position:absolute;right:0;background:var(--color);color:var(--bg);width:24px;height:24px;display:flex;justify-content:center;align-items:center}.del[data-v-954675f0]{top:0;border-radius:0 0 0 4px}.del[data-v-954675f0],.duplicate[data-v-954675f0],.number[data-v-954675f0]{opacity:0;background-repeat:no-repeat;background-size:20px 20px;background-position:50%}.del[data-v-954675f0]{background-image:url(/SvgPixelArt/icons/Delete.svg)}.duplicate[data-v-954675f0]{background-image:url(/SvgPixelArt/icons/Duplicate.svg)}.frame:hover .del[data-v-954675f0],.frame:hover .duplicate[data-v-954675f0],.frame:hover .number[data-v-954675f0]{opacity:1}",""]),t.exports=r},244:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("59aca2fc",content,!0,{sourceMap:!1})},257:function(t,e,o){"use strict";o(244)},258:function(t,e,o){var r=o(37)(!1);r.push([t.i,"ul[data-v-536543d2]{margin:0;padding:0;display:flex;flex-direction:column;align-items:center;list-style-type:none;overflow-y:auto;overflow-x:hidden;max-height:100%}.frame[data-v-536543d2]{border:2px solid var(--color);cursor:url(/SvgPixelArt/icons/Pointer.svg) 4 0,pointer;margin-bottom:10px}.selected[data-v-536543d2]{border:2px dashed var(--color)}.add[data-v-536543d2]{display:block;width:50px;height:50px;cursor:url(/SvgPixelArt/icons/Pointer.svg) 4 0,pointer;border:none;line-height:50px;font-size:24px;text-align:center;margin-bottom:0}",""]),t.exports=r},273:function(t,e,o){"use strict";o.r(e);var r={components:{svgview:o(237).default},computed:{frame:function(){return this.$store.state.frameSelected},frames:function(){return this.$store.state.frames}},methods:{add:function(){this.$store.commit("addFrame")}}},n=(o(257),o(18)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[t._l(t.frames,(function(e,r){return o("li",{key:r,staticClass:"frame",class:t.frame===r+1?"selected":""},[o("EditorSvgview",{attrs:{doc:r}})],1)})),t._v(" "),o("li",{staticClass:"frame add",on:{click:function(e){return t.add()}}},[t._v("+")])],2)}),[],!1,null,"536543d2",null);e.default=component.exports;installComponents(component,{EditorSvgview:o(237).default})}}]);