(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{240:function(o,c,t){var content=t(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(38).default)("100f6221",content,!0,{sourceMap:!1})},253:function(o,c,t){"use strict";t(240)},254:function(o,c,t){var e=t(37)(!1);e.push([o.i,".inputcolor[data-v-cee1a5fc]{width:100%;height:40px;border:0;margin:5px 0 0;padding:0;background:transparent;box-shadow:none;outline:none;cursor:url(/SvgPixelArt/icons/Pointer.svg) 4 0,pointer}.colors[data-v-cee1a5fc]{display:block;font-size:0}.color[data-v-cee1a5fc]{display:inline-block;width:25%;height:40px;cursor:url(/SvgPixelArt/icons/Pointer.svg) 4 0,pointer}.color.transparent[data-v-cee1a5fc]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.selected[data-v-cee1a5fc]{border:3px dashed var(--color)}",""]),o.exports=e},270:function(o,c,t){"use strict";t.r(c);var e={computed:{color:function(){return this.$store.state.colorSelected}},watch:{color:function(){this.inputcolor=this.color}},data:function(){return{inputcolor:"FF1486",colors:["transparent","ffffff","b8b5b9","868188","646365","45444f","313038","000000","fffba6","f9ec00","b9af00","958d00","ffb775","ff8c24","e86f00","bf5b00","ff9c8a","ff5c40","f02400","b91c00","ff95e4","ff4ad2","ec00b1","a6007c","e19bff","d166ff","af00fb","7b00b0","c6bfff","8b82ff","4435ff","1100df","6cdeff","1acbff","009ecc","006b8a","9dffd6","0dff98","00c672","008a50","d29f93","c78676","b96753","a35643","a67340","845b33","654627","513920"]}},methods:{colorinput:function(o){var c=o.target.value.substring(1);this.inputcolor=c,this.$store.commit("selectColor",c)},selectColor:function(o){this.inputcolor=o,this.$store.commit("selectColor",o)}}},r=(t(253),t(18)),component=Object(r.a)(e,(function(){var o=this,c=o.$createElement,t=o._self._c||c;return t("div",{staticClass:"colors"},[o._l(o.colors,(function(c){return t("div",{key:c,staticClass:"color",class:o.color===c?"selected "+c:""+c,style:"background: #"+c+";",on:{click:function(t){return o.selectColor(c)}}})})),o._v(" "),t("input",{staticClass:"inputcolor",attrs:{type:"color"},domProps:{value:"#"+o.inputcolor},on:{click:o.colorinput,change:o.colorinput}})],2)}),[],!1,null,"cee1a5fc",null);c.default=component.exports}}]);