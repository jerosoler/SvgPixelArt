(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{263:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("276180a1",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n(263)},282:function(t,e,n){var o=n(37)(!1);o.push([t.i,".canvas[data-v-c207f7f4]{max-width:100%;min-height:644px;max-height:644px;overflow:auto;display:flex;align-items:center;align-content:center}.boxBlock[data-v-c207f7f4]{margin:auto}.fileBlock[data-v-c207f7f4]{display:flex}.pixelBlock[data-v-c207f7f4]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;border:.3px solid var(--bg);background:repeating-conic-gradient(#4c4c4c 0,#4c4c4c 25%,#555 0,#555 50%) 50%/20px 20px;background:repeating-conic-gradient(#4c4c4c 0 25%,#555 0 50%) 50%/20px 20px}",""]),t.exports=o},296:function(t,e,n){"use strict";n.r(e);n(23),n(26),n(81);var o={computed:{clickElement:function(){return this.$store.state.clickValue},color:function(){return this.$store.state.colorSelected},width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frames:function(){return this.$store.state.frames},frameSelected:function(){return this.$store.state.frameSelected}},watch:{width:function(){var t=this;this.$nextTick((function(){t.clearData(),t.start(),t.loadDefaultData()}))},height:function(){var t=this;this.$nextTick((function(){t.clearData(),t.start(),t.loadDefaultData()}))},frameSelected:function(){this.clearData(),this.start(),this.loadDefaultData()},frames:function(){this.clearData(),this.start(),this.loadDefaultData()}},data:function(){return{elements:null,scale:1}},mounted:function(){var t=this;this.start(),this.loadDefaultData(),this.$refs.canvas.addEventListener("wheel",(function(e){e.preventDefault(),e.deltaY<0?t.zoomIn():t.zoomOut()}),!1)},methods:{zoomIn:function(){this.scale<2&&(this.scale+=.05)},zoomOut:function(){this.scale>.4&&(this.scale-=.05)},clearData:function(){for(var i=0;i<this.elements.length;i++)this.elements[i].style.background=null},start:function(){this.elements=document.getElementsByClassName("pixelBlock")},paintMouseEnter:function(t){this.clickElement&&this.paint(t.target)},paintMouseDown:function(t){this.paint(t.target)},paint:function(element){var t=parseInt(element.getAttribute("data-pos-x")),e=parseInt(element.getAttribute("data-pos-y")),n=this.color,o=this.frameSelected-1;this.saveColor(t,e,n,o)},saveColor:function(t,e,n,o){this.$store.commit("addPixel",{x:t,y:e,color:n,frame:o}),this.loadDefaultData()},loadDefaultData:function(){var t=this;this.clearData();var e=this.frames[this.frameSelected-1][0];Object.keys(e).forEach((function(e,n){t.frames[t.frameSelected-1][0][e].pixels.forEach((function(t){var n=t.x,o=t.y;document.querySelector("[data-pos-x='".concat(n,"'][data-pos-y='").concat(o,"']")).style.background="#".concat(e)}))}))}}},c=(n(281),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"canvas"},[n("div",{ref:"canvas",staticClass:"boxBlock",style:"transform: scale("+t.scale+"); min-width:"+20*t.width*t.scale+"px; height:"+20*t.height*t.scale+"px; transform-origin: "+(t.scale<1?20*t.width*t.scale:0)+"px 0px; max-height: 644px;"},t._l(t.height,(function(e){return n("div",{key:"x-"+e,staticClass:"fileBlock"},t._l(t.width,(function(o){return n("div",{key:"y-"+o,staticClass:"pixelBlock",style:"width:"+20*t.pixelWH+"px; height:"+20*t.pixelWH+"px;",attrs:{"data-pos-x":o,"data-pos-y":e},on:{mouseenter:t.paintMouseEnter,mousedown:t.paintMouseDown}})})),0)})),0)])])}),[],!1,null,"c207f7f4",null);e.default=component.exports}}]);