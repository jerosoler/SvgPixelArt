(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{240:function(o,t,c){var content=c(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,c(38).default)("13d0912a",content,!0,{sourceMap:!1})},253:function(o,t,c){"use strict";c(240)},254:function(o,t,c){var r=c(37)(!1);r.push([o.i,".inputcolor[data-v-7418125e]{width:100%;height:40px;border:0;margin:5px 0 0;padding:0;background:transparent;box-shadow:none;outline:none;cursor:url(/icons/Pointer.svg) 4 0,pointer}.colors[data-v-7418125e]{display:block;font-size:0}.color[data-v-7418125e]{display:inline-block;width:25%;height:40px;cursor:url(/icons/Pointer.svg) 4 0,pointer}.color.transparent[data-v-7418125e]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.selected[data-v-7418125e]{border:3px dashed var(--color)}",""]),o.exports=r},270:function(o,t,c){"use strict";c.r(t);var r={computed:{color:function(){return this.$store.state.colorSelected}},watch:{color:function(){this.inputcolor=this.color}},data:function(){return{inputcolor:"FF1486",colors:["transparent","ffffff","b8b5b9","868188","646365","45444f","313038","000000","fffba6","f9ec00","b9af00","958d00","ffb775","ff8c24","e86f00","bf5b00","ff9c8a","ff5c40","f02400","b91c00","ff95e4","ff4ad2","ec00b1","a6007c","e19bff","d166ff","af00fb","7b00b0","c6bfff","8b82ff","4435ff","1100df","6cdeff","1acbff","009ecc","006b8a","9dffd6","0dff98","00c672","008a50","d29f93","c78676","b96753","a35643","a67340","845b33","654627","513920"]}},methods:{colorinput:function(o){var t=o.target.value.substring(1);this.inputcolor=t,this.$store.commit("selectColor",t)},selectColor:function(o){this.inputcolor=o,this.$store.commit("selectColor",o)}}},e=(c(253),c(18)),component=Object(e.a)(r,(function(){var o=this,t=o.$createElement,c=o._self._c||t;return c("div",{staticClass:"colors"},[o._l(o.colors,(function(t){return c("div",{key:t,staticClass:"color",class:o.color===t?"selected "+t:""+t,style:"background: #"+t+";",on:{click:function(c){return o.selectColor(t)}}})})),o._v(" "),c("input",{staticClass:"inputcolor",attrs:{type:"color"},domProps:{value:"#"+o.inputcolor},on:{click:o.colorinput,change:o.colorinput}})],2)}),[],!1,null,"7418125e",null);t.default=component.exports}}]);