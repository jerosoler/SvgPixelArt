(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{231:function(t,e,c){var content=c(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(38).default)("3877d349",content,!0,{sourceMap:!1})},237:function(t,e,c){"use strict";c.r(e);c(23),c(81);var o={props:["doc"],computed:{width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frame:function(){return this.$store.state.frames[this.doc][0].colors}},methods:{transformToSvg:function(data){var t=this,e="";return data.forEach((function(c){var o=c.x,r=c.y,n=t.pixelWH,d="M".concat((o-1)*n,",").concat((r-1)*n," ").concat(o*n,",").concat((r-1)*n," ").concat(o*n,",").concat(r*n," ").concat((o-1)*n,",").concat(r*n," ");e+=d})),e},selectFrame:function(t){this.$store.commit("selectFrame",t)},duplicate:function(){this.$store.commit("duplicateFrame",this.doc)},del:function(){this.$store.commit("delFrame",this.doc)}}},r=(c(242),c(18)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"box"},[c("div",{staticClass:"frame"},[c("div",{staticClass:"number"},[t._v(t._s(t.doc+1))]),t._v(" "),c("div",{staticClass:"duplicate",on:{click:t.duplicate}}),t._v(" "),this.$store.state.frames.length>1?c("div",{staticClass:"del",on:{click:t.del}}):t._e(),t._v(" "),c("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 "+t.width*t.pixelWH+" "+t.height*t.pixelWH},on:{click:function(e){return t.selectFrame(t.doc+1)}}},t._l(t.frame,(function(e,o){return c("path",{key:o,style:"fill:#"+o,attrs:{d:t.transformToSvg(e.pixels)}})})),0)])])}),[],!1,null,"5b3592c8",null);e.default=component.exports},242:function(t,e,c){"use strict";c(231)},243:function(t,e,c){var o=c(37)(!1);o.push([t.i,".box[data-v-5b3592c8]{display:block;position:relative}.frame[data-v-5b3592c8]{width:100%;height:auto;min-height:50px;width:auto;display:flex;justify-content:center;align-items:center}svg[data-v-5b3592c8]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.number[data-v-5b3592c8]{position:absolute;top:0;left:0;background:var(--color);color:var(--bg);min-width:24px;height:24px;border-radius:0 0 4px 0;display:flex;justify-content:center;align-items:center}.duplicate[data-v-5b3592c8]{bottom:0;border-radius:4px 0 0 0}.del[data-v-5b3592c8],.duplicate[data-v-5b3592c8]{position:absolute;right:0;background:var(--color);color:var(--bg);width:24px;height:24px;display:flex;justify-content:center;align-items:center}.del[data-v-5b3592c8]{top:0;border-radius:0 0 0 4px}.del[data-v-5b3592c8],.duplicate[data-v-5b3592c8],.number[data-v-5b3592c8]{opacity:0;background-repeat:no-repeat;background-size:20px 20px;background-position:50%}.del[data-v-5b3592c8]{background-image:url(/icons/Delete.svg)}.duplicate[data-v-5b3592c8]{background-image:url(/icons/Duplicate.svg)}.frame:hover .del[data-v-5b3592c8],.frame:hover .duplicate[data-v-5b3592c8],.frame:hover .number[data-v-5b3592c8]{opacity:1}",""]),t.exports=o}}]);