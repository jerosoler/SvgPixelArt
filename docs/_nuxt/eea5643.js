(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{241:function(e,t,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(38).default)("d1a7f9a2",content,!0,{sourceMap:!1})},255:function(e,t,o){"use strict";o(241)},256:function(e,t,o){var c=o(37)(!1);c.push([e.i,".colors[data-v-282edc6a]{display:block;font-size:0}.color[data-v-282edc6a]{display:inline-block;width:25%;height:40px;cursor:url(/SvgPixelArt/icons/Pointer.svg) 4 0,pointer}.color.transparent[data-v-282edc6a]{background:repeating-conic-gradient(#4c4c4c 0,#4c4c4c 25%,#555 0,#555 50%) 50%/20px 20px;background:repeating-conic-gradient(#4c4c4c 0 25%,#555 0 50%) 50%/20px 20px}.selected[data-v-282edc6a]{border:3px dashed var(--color)}",""]),e.exports=c},271:function(e,t,o){"use strict";o.r(t);var c=o(233),r=(o(23),o(26),o(15),o(214),o(27),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(35),{computed:{color:function(){return this.$store.state.colorSelected},frame:function(){return this.$store.state.frameSelected-1},colors:function(){var e=[];return Object.keys(this.$store.state.frames[this.frame][0].colors).forEach((function(t){e.push(t)})),e=Object(c.a)(new Set(e)),e}},methods:{selectColor:function(e){this.$store.commit("selectColor",e)}}}),n=(o(255),o(18)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"colors"},[e._v("\n  "+e._s(e.colors)+"\n  "),e._l(e.colors,(function(t){return o("div",{key:t,staticClass:"color",class:e.color===t?"selected "+t:""+t,style:"background: #"+t+";",on:{click:function(o){return e.selectColor(t)}}})}))],2)}),[],!1,null,"282edc6a",null);t.default=component.exports}}]);