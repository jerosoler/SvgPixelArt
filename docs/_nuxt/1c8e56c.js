(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3,4,8,9,10,11,15,16,17,18,19],{231:function(t,e,o){var content=o(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("3877d349",content,!0,{sourceMap:!1})},232:function(t,e,o){var content=o(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("cda14ed4",content,!0,{sourceMap:!1})},234:function(t,e,o){var n=o(2),r=o(235),c=o(84);n({target:"Array",proto:!0},{fill:r}),c("fill")},235:function(t,e,o){"use strict";var n=o(19),r=o(83),c=o(11);t.exports=function(t){for(var e=n(this),o=c(e.length),l=arguments.length,d=r(l>1?arguments[1]:void 0,o),f=l>2?arguments[2]:void 0,h=void 0===f?o:r(f,o);h>d;)e[d++]=t;return e}},237:function(t,e,o){"use strict";o.r(e);o(23),o(81);var n={props:["doc"],computed:{width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frame:function(){return this.$store.state.frames[this.doc][0].colors}},methods:{transformToSvg:function(data){var t=this,e="";return data.forEach((function(o){var n=o.x,r=o.y,c=t.pixelWH,l="M".concat((n-1)*c,",").concat((r-1)*c," ").concat(n*c,",").concat((r-1)*c," ").concat(n*c,",").concat(r*c," ").concat((n-1)*c,",").concat(r*c," ");e+=l})),e},selectFrame:function(t){this.$store.commit("selectFrame",t)},duplicate:function(){this.$store.commit("duplicateFrame",this.doc)},del:function(){this.$store.commit("delFrame",this.doc)}}},r=(o(242),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"box"},[o("div",{staticClass:"frame"},[o("div",{staticClass:"number"},[t._v(t._s(t.doc+1))]),t._v(" "),o("div",{staticClass:"duplicate",on:{click:t.duplicate}}),t._v(" "),this.$store.state.frames.length>1?o("div",{staticClass:"del",on:{click:t.del}}):t._e(),t._v(" "),o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 "+t.width*t.pixelWH+" "+t.height*t.pixelWH},on:{click:function(e){return t.selectFrame(t.doc+1)}}},t._l(t.frame,(function(e,n){return o("path",{key:n,style:"fill:#"+n,attrs:{d:t.transformToSvg(e.pixels)}})})),0)])])}),[],!1,null,"5b3592c8",null);e.default=component.exports},238:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("40dace52",content,!0,{sourceMap:!1})},239:function(t,e,o){var content=o(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("41e97d3c",content,!0,{sourceMap:!1})},240:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("13d0912a",content,!0,{sourceMap:!1})},241:function(t,e,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("64dfcc8e",content,!0,{sourceMap:!1})},242:function(t,e,o){"use strict";o(231)},243:function(t,e,o){var n=o(37)(!1);n.push([t.i,".box[data-v-5b3592c8]{display:block;position:relative}.frame[data-v-5b3592c8]{width:100%;height:auto;min-height:50px;width:auto;display:flex;justify-content:center;align-items:center}svg[data-v-5b3592c8]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.number[data-v-5b3592c8]{position:absolute;top:0;left:0;background:var(--color);color:var(--bg);min-width:24px;height:24px;border-radius:0 0 4px 0;display:flex;justify-content:center;align-items:center}.duplicate[data-v-5b3592c8]{bottom:0;border-radius:4px 0 0 0}.del[data-v-5b3592c8],.duplicate[data-v-5b3592c8]{position:absolute;right:0;background:var(--color);color:var(--bg);width:24px;height:24px;display:flex;justify-content:center;align-items:center}.del[data-v-5b3592c8]{top:0;border-radius:0 0 0 4px}.del[data-v-5b3592c8],.duplicate[data-v-5b3592c8],.number[data-v-5b3592c8]{opacity:0;background-repeat:no-repeat;background-size:20px 20px;background-position:50%}.del[data-v-5b3592c8]{background-image:url(/icons/Delete.svg)}.duplicate[data-v-5b3592c8]{background-image:url(/icons/Duplicate.svg)}.frame:hover .del[data-v-5b3592c8],.frame:hover .duplicate[data-v-5b3592c8],.frame:hover .number[data-v-5b3592c8]{opacity:1}",""]),t.exports=n},244:function(t,e,o){var content=o(258);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("10d37186",content,!0,{sourceMap:!1})},245:function(t,e,o){var content=o(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("7d14335d",content,!0,{sourceMap:!1})},246:function(t,e,o){"use strict";o(232)},247:function(t,e,o){var n=o(37)(!1);n.push([t.i,".box[data-v-7fd555f8]{display:flex;width:100%;border:2px solid var(--color);background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}",""]),t.exports=n},248:function(t,e,o){"use strict";o.r(e);var n=o(233),r=(o(23),o(26),o(15),o(214),o(27),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(35),o(81),{computed:{width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},seconds:function(){return this.$store.state.seconds},frames:function(){return this.$store.state.frames},colors:function(){var t=[];return this.$store.state.frames.forEach((function(e){Object.keys(e[0].colors).forEach((function(e){t.push(e)}))})),t=Object(n.a)(new Set(t)),t}},data:function(){return{play:!0}},methods:{playAnimation:function(){this.play=!0,this.$refs.svgpreview.unpauseAnimations()},pauseAnimation:function(){this.play=!1,this.$refs.svgpreview.pauseAnimations()},transformToSvgColor:function(t){var e=this,o="";return this.frames.forEach((function(n,r){void 0!==e.frames[r][0].colors[t]?(e.frames[r][0].colors[t].pixels.forEach((function(t){var n=t.x,r=t.y,c=e.pixelWH,l="M".concat((n-1)*c,",").concat((r-1)*c," ").concat(n*c,",").concat((r-1)*c," ").concat(n*c,",").concat(r*c," ").concat((n-1)*c,",").concat(r*c);o+=l})),o+=";"):o+="M;"})),o}}}),c=(o(246),o(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"box"},[o("svg",{ref:"svgpreview",attrs:{id:"svgpreview",width:"100%",height:"100%",viewBox:"0 0 "+t.width*t.pixelWH+" "+t.height*t.pixelWH,xmlns:"http://www.w3.org/2000/svg"}},t._l(t.colors,(function(e){return o("path",{key:e,style:"fill:#"+e+";",attrs:{d:" "}},[o("animate",{attrs:{attributeName:"d",dur:t.seconds+"s",repeatCount:"indefinite",calcMode:"discrete",values:t.transformToSvgColor(e)}})])})),0)]),t._v(" "),t.play?o("button",{on:{click:t.pauseAnimation}},[t._v("Pause")]):o("button",{on:{click:t.playAnimation}},[t._v("Play")])])}),[],!1,null,"7fd555f8",null);e.default=component.exports},249:function(t,e,o){"use strict";o(238)},250:function(t,e,o){var n=o(37)(!1);n.push([t.i,".div[data-v-4cdc5580]{box-sizing:border-box;display:block;width:100%;padding:3px 3px 3px 0;margin-bottom:20px;color:var(--color);background-image:paint(pixelbox);--pixelbox-border:3px;--pixelbox-border-radius:1px;--pixelbox-border-color:var(--color);--pixelbox-background-color:var(--bg);--pixelbox-background-shadow-border:3px;--pixelbox-background-shadow-color:var(--color);--pixelbox-background-shadow-position:bottom-right}h4[data-v-4cdc5580]{padding:10px 15px;border-bottom:3px solid var(--color)}.slot[data-v-4cdc5580]{position:relative;display:block;box-sizing:border-box;padding:10px;height:100%}",""]),t.exports=n},251:function(t,e,o){"use strict";o(239)},252:function(t,e,o){var n=o(37)(!1);n.push([t.i,".beforecanvas[data-v-8766886e]{display:block;position:relative;height:100%}.canvas[data-v-8766886e]{position:relative;width:100%;height:calc(100% - 70px);overflow:auto;margin:0 auto;display:flex;align-items:center}.precanvas[data-v-8766886e]{position:relative;margin:auto;display:block}.canvasMouse[data-v-8766886e]{position:absolute;z-index:3;pointer-events:none}canvas[data-v-8766886e]{position:relative;margin:auto;display:block}canvas[data-v-8766886e]:hover{cursor:crosshair}canvas.Pencil[data-v-8766886e]:hover{cursor:url(/icons/Pencil.svg) 0 128,crosshair}.boxBlock[data-v-8766886e]{margin:auto}.fileBlock[data-v-8766886e]{display:flex}.pixelBlock[data-v-8766886e]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;border:.3px solid var(--bg);background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.pixelBlock[data-v-8766886e]:hover{border:1px solid}.footer[data-v-8766886e]{display:flex;justify-content:space-between;align-items:center;padding:10px;margin-top:5px;background-image:paint(pixelbox);--pixelbox-border:3px;--pixelbox-border-radius:1px;--pixelbox-border-color:var(--color);--pixelbox-background-color:var(--bg);--pixelbox-background-shadow-border:0px;--pixelbox-background-shadow-color:var(--color);--pixelbox-background-shadow-position:bottom-right}",""]),t.exports=n},253:function(t,e,o){"use strict";o(240)},254:function(t,e,o){var n=o(37)(!1);n.push([t.i,".inputcolor[data-v-7418125e]{width:100%;height:40px;border:0;margin:5px 0 0;padding:0;background:transparent;box-shadow:none;outline:none;cursor:url(/icons/Pointer.svg) 4 0,pointer}.colors[data-v-7418125e]{display:block;font-size:0}.color[data-v-7418125e]{display:inline-block;width:25%;height:40px;cursor:url(/icons/Pointer.svg) 4 0,pointer}.color.transparent[data-v-7418125e]{background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.selected[data-v-7418125e]{border:3px dashed var(--color)}",""]),t.exports=n},255:function(t,e,o){"use strict";o(241)},256:function(t,e,o){var n=o(37)(!1);n.push([t.i,".colors[data-v-76f4ee0e]{display:block;font-size:0}.color[data-v-76f4ee0e]{display:inline-block;width:25%;height:40px;cursor:url(/icons/Pointer.svg) 4 0,pointer}.color.transparent[data-v-76f4ee0e]{background:repeating-conic-gradient(#4c4c4c 0,#4c4c4c 25%,#555 0,#555 50%) 50%/20px 20px;background:repeating-conic-gradient(#4c4c4c 0 25%,#555 0 50%) 50%/20px 20px}.selected[data-v-76f4ee0e]{border:3px dashed var(--color)}",""]),t.exports=n},257:function(t,e,o){"use strict";o(244)},258:function(t,e,o){var n=o(37)(!1);n.push([t.i,"ul[data-v-66b5992e]{margin:0;padding:0;display:flex;flex-direction:column;align-items:center;list-style-type:none;overflow-y:auto;overflow-x:hidden;max-height:100%}.frame[data-v-66b5992e]{border:2px solid var(--color);cursor:url(/icons/Pointer.svg) 4 0,pointer;margin-bottom:10px}.selected[data-v-66b5992e]{border:2px dashed var(--color)}.add[data-v-66b5992e]{display:block;width:50px;height:50px;cursor:url(/icons/Pointer.svg) 4 0,pointer;border:none;line-height:50px;font-size:24px;text-align:center;margin-bottom:0}",""]),t.exports=n},259:function(t,e,o){"use strict";o(245)},260:function(t,e,o){var n=o(37)(!1);n.push([t.i,".weapons[data-v-7fc2b500]{display:block;font-size:0}.weapon[data-v-7fc2b500]{display:inline-block;width:25%;height:40px;background-size:30px;background-position:50%;background-repeat:no-repeat}.weapon[data-v-7fc2b500]:hover{cursor:url(/icons/Pointer.svg) 4 0,pointer}.selected[data-v-7fc2b500]{border:3px dashed var(--color)}",""]),t.exports=n},267:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(38).default)("f78eca18",content,!0,{sourceMap:!1})},268:function(t,e,o){"use strict";o.r(e);var n={props:["title"]},r=(o(249),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"div"},[o("h4",[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"slot"},[t._t("default")],2)])}),[],!1,null,"4cdc5580",null);e.default=component.exports},269:function(t,e,o){"use strict";o.r(e);o(234),o(23),o(26);var n={computed:{clickElement:function(){return this.$store.state.clickValue},color:function(){return this.$store.state.colorSelected},width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frames:function(){return this.$store.state.frames},frameSelected:function(){return this.$store.state.frameSelected},layerSelected:function(){return this.$store.state.layerSelected},weapon:function(){return this.$store.state.weapon},clickButton:function(){return this.$store.state.clickButton}},watch:{clickElement:function(t){t||this.paintMouseUp()},width:function(){var t=this;this.$nextTick((function(){t.clearData(),t.loadDefaultData()}))},height:function(){var t=this;this.$nextTick((function(){t.clearData(),t.loadDefaultData()}))},frameSelected:function(){this.clearData(),this.loadDefaultData()},frames:function(){this.clearData(),this.loadDefaultData()}},data:function(){return{elements:null,scale:20,ctx:null,ctxMouse:null,raf:null,pos:{x:0,y:0}}},mounted:function(){var t=this;this.$refs.canvas.addEventListener("mousemove",this.paintMouseEnter,!1),this.$refs.canvas.addEventListener("wheel",(function(e){e.preventDefault(),e.deltaY<0?t.zoomIn():t.zoomOut()}),!1),this.ctx=this.$refs.canvas.getContext("2d"),this.ctxMouse=this.$refs.canvasMouse.getContext("2d"),this.$nextTick((function(){t.loadDefaultData()}))},methods:{zoomIn:function(){var t=this;this.scale<40&&(this.scale++,this.$nextTick((function(){t.loadDefaultData()})))},zoomOut:function(){var t=this;this.scale>1&&(this.scale--,this.$nextTick((function(){t.loadDefaultData()})))},clearData:function(){this.ctx.clearRect(0,0,this.width*this.scale,this.height*this.scale)},paintMouseEnter:function(t){this.paintMouseShadow(),this.pos.x=t.layerX,this.pos.y=t.layerY,this.clickElement&&this.paint()},paintMouseDown:function(t){this.paint()},paintMouseUp:function(t){},clearMouseShadow:function(){this.ctxMouse.clearRect(0,0,this.width*this.scale,this.height*this.scale)},paintMouseShadow:function(){var t=parseInt(this.pos.x/this.scale)+1,e=parseInt(this.pos.y/this.scale)+1;this.clearMouseShadow(),this.ctxMouse.beginPath(),this.ctxMouse.strokeStyle="#000",this.ctxMouse.fillStyle="transparent",this.ctxMouse.lineWidth=1,this.ctxMouse.rect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale),this.ctxMouse.stroke(),this.ctxMouse.fill()},paint:function(){var t=parseInt(this.pos.x/this.scale)+1,e=parseInt(this.pos.y/this.scale)+1,o=this.color,n=this.frameSelected-1;2===this.clickButton&&(o="transparent"),"transparent"===o||2===this.clickButton?(this.ctx.strokeStyle="transparent",this.ctx.fillStyle="transparent",this.ctx.lineWidth=0,this.ctx.clearRect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale)):(this.ctx.beginPath(),this.ctx.strokeStyle="transparent",this.ctx.fillStyle="#"+o,this.ctx.lineWidth=0,this.ctx.rect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale),this.ctx.stroke(),this.ctx.fill()),this.saveColor(t,e,o,n)},saveColor:function(t,e,o,n){this.$store.commit("addPixel",{x:t,y:e,color:o,frame:n})},loadDefaultData:function(){var t=this,e=this.frames[this.frameSelected-1][0].colors;Object.keys(e).forEach((function(e,o){t.ctx.beginPath(),t.ctx.strokeStyle="transparent",t.ctx.lineWidth=0,t.ctx.fillStyle="#"+e,t.frames[t.frameSelected-1][0].colors[e].pixels.forEach((function(e){var o=e.x,n=e.y;t.ctx.rect((o-1)*t.scale,(n-1)*t.scale,t.scale,t.scale)})),t.ctx.stroke(),t.ctx.fill()}))}}},r=(o(251),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"beforecanvas"},[o("div",{staticClass:"canvas"},[o("div",{staticClass:"precanvas"},[o("canvas",{ref:"canvasMouse",staticClass:"canvasMouse",style:"background: transparent;",attrs:{width:t.width*t.scale,height:t.height*t.scale},on:{click:t.paintMouseDown}}),t._v(" "),o("canvas",{ref:"canvas",class:t.weapon,style:"background: repeating-conic-gradient(var(--canvas-one) 0% 25%, var(--canvas-two) 0% 50%) 50% / "+t.scale+"px "+t.scale+"px;",attrs:{width:t.width*t.scale,height:t.height*t.scale},on:{click:t.paintMouseDown,contextmenu:function(e){return t.paintMouseDown.apply(null,arguments)},mouseleave:t.clearMouseShadow}})])]),t._v(" "),o("div",{staticClass:"footer"},[o("span",[t._v("Frame: "+t._s(t.frameSelected)+" / "+t._s(t.frames.length))]),t._v(" "),o("span",[t._v("Layer: "+t._s(t.layerSelected)+" / "+t._s(t.frames[t.frameSelected-1].length))]),t._v(" "),o("span",[t._v("Scale: "+t._s(t.scale))]),t._v(" "),o("span",[t._v("Weapon: "+t._s(t.weapon))]),t._v(" "),o("span",[t._v("Color:\n      "),"transparent"!=t.color?o("span",{style:"color: #"+t.color+";"},[t._v("#"+t._s(t.color))]):o("span",[t._v("Transparent")])])])])}),[],!1,null,"8766886e",null);e.default=component.exports},270:function(t,e,o){"use strict";o.r(e);var n={computed:{color:function(){return this.$store.state.colorSelected}},watch:{color:function(){this.inputcolor=this.color}},data:function(){return{inputcolor:"FF1486",colors:["transparent","ffffff","b8b5b9","868188","646365","45444f","313038","000000","fffba6","f9ec00","b9af00","958d00","ffb775","ff8c24","e86f00","bf5b00","ff9c8a","ff5c40","f02400","b91c00","ff95e4","ff4ad2","ec00b1","a6007c","e19bff","d166ff","af00fb","7b00b0","c6bfff","8b82ff","4435ff","1100df","6cdeff","1acbff","009ecc","006b8a","9dffd6","0dff98","00c672","008a50","d29f93","c78676","b96753","a35643","a67340","845b33","654627","513920"]}},methods:{colorinput:function(t){var e=t.target.value.substring(1);this.inputcolor=e,this.$store.commit("selectColor",e)},selectColor:function(t){this.inputcolor=t,this.$store.commit("selectColor",t)}}},r=(o(253),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"colors"},[t._l(t.colors,(function(e){return o("div",{key:e,staticClass:"color",class:t.color===e?"selected "+e:""+e,style:"background: #"+e+";",on:{click:function(o){return t.selectColor(e)}}})})),t._v(" "),o("input",{staticClass:"inputcolor",attrs:{type:"color"},domProps:{value:"#"+t.inputcolor},on:{click:t.colorinput,change:t.colorinput}})],2)}),[],!1,null,"7418125e",null);e.default=component.exports},271:function(t,e,o){"use strict";o.r(e);var n=o(233),r=(o(23),o(26),o(15),o(214),o(27),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(35),{computed:{color:function(){return this.$store.state.colorSelected},frame:function(){return this.$store.state.frameSelected-1},colors:function(){var t=[];return Object.keys(this.$store.state.frames[this.frame][0].colors).forEach((function(e){t.push(e)})),t=Object(n.a)(new Set(t)),t}},methods:{selectColor:function(t){this.$store.commit("selectColor",t)}}}),c=(o(255),o(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"colors"},[t._v("\n  "+t._s(t.colors)+"\n  "),t._l(t.colors,(function(e){return o("div",{key:e,staticClass:"color",class:t.color===e?"selected "+e:""+e,style:"background: #"+e+";",on:{click:function(o){return t.selectColor(e)}}})}))],2)}),[],!1,null,"76f4ee0e",null);e.default=component.exports},272:function(t,e,o){"use strict";o.r(e);var n=o(233),r=(o(23),o(26),o(15),o(214),o(27),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(35),o(81),o(46),o(160),o(161),{computed:{state:function(){return this.$store.state},width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frames:function(){return this.$store.state.frames},seconds:function(){return this.$store.state.seconds},colors:function(){var t=[];return this.$store.state.frames.forEach((function(e){Object.keys(e[0].colors).forEach((function(e){t.push(e)}))})),t=Object(n.a)(new Set(t)),t}},methods:{importPixelArt:function(){document.getElementById("importPixelArt").click()},importPixelArtFile:function(t){var e=this,o=t.target.files[0],n=new FileReader;n.readAsText(o,"UTF-8"),n.onload=function(t){e.$store.commit("importFile",{file:JSON.parse(t.target.result)}),document.getElementById("importPixelArt").value=""}},exportPixelArt:function(){var t={};t.frames=this.state.frames,t.width=this.state.width,t.height=this.state.height,t.seconds=this.state.seconds;var e=JSON.stringify(t),o="data:application/json;charset=utf-8,"+encodeURIComponent(e),n=document.createElement("a");n.href=o,n.download="".concat(Date.now(),".svgpixelart"),document.body.appendChild(n),n.click(),document.body.removeChild(n)},transformToSvg:function(data){var t=this,e="";return data.forEach((function(o){var n=o.x,r=o.y,c=t.pixelWH,l="M".concat((n-1)*c,",").concat((r-1)*c," ").concat(n*c,",").concat((r-1)*c," ").concat(n*c,",").concat(r*c," ").concat((n-1)*c,",").concat(r*c," ");e+=l})),e},transformToSvgColor:function(t){var e=this,o="";return this.frames.forEach((function(n,r){void 0!==e.frames[r][0].colors[t]?(e.frames[r][0].colors[t].pixels.forEach((function(t){var n=t.x,r=t.y,c=e.pixelWH,l="M".concat((n-1)*c,",").concat((r-1)*c," ").concat(n*c,",").concat((r-1)*c," ").concat(n*c,",").concat(r*c," ").concat((n-1)*c,",").concat(r*c);o+=l})),o+=";"):o+="M;"})),o},exportSvg:function(){var t="static";t=1===this.frames.length?"static":"animated";var e="SvgPixelArt-".concat(t,"-").concat(Date.now());this.saveSvg(e)},saveSvg:function(t){var e=this,o='<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(this.width,'" height="').concat(this.height,'" viewBox="0 0 ').concat(this.width*this.pixelWH," ").concat(this.height*this.pixelWH,'">');1===this.frames.length?Object.keys(this.frames[0][0].colors).forEach((function(t){o+='<path d="'.concat(e.transformToSvg(e.frames[0][0].colors[t].pixels),'" fill="#').concat(t,'"></path>')})):this.colors.forEach((function(t){var n=e.transformToSvgColor(t),r=n.split(";");o+='<path d="'.concat(r[0],'" fill="#').concat(t,'"><animate attributeName="d" dur="').concat(e.seconds,'s" repeatCount="indefinite" calcMode="discrete" values="').concat(n,'"/></path>')})),o+="</svg>";var n=new Blob([o],{type:"image/svg+xml;charset=utf-8"}),r=URL.createObjectURL(n),c=document.createElement("a");c.href=r,c.download=t,document.body.appendChild(c),c.click(),document.body.removeChild(c)}}}),c=o(18),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"success",on:{click:t.exportSvg}},[t._v("Download SVG")]),t._v(" "),o("button",{staticClass:"info",on:{click:t.exportPixelArt}},[t._v("Save")]),t._v(" "),o("button",{staticClass:"info",on:{click:t.importPixelArt}},[t._v("Import")]),t._v(" "),o("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"importPixelArt",accept:".svgpixelart"},on:{change:t.importPixelArtFile}})])}),[],!1,null,null,null);e.default=component.exports},273:function(t,e,o){"use strict";o.r(e);var n={components:{svgview:o(237).default},computed:{frame:function(){return this.$store.state.frameSelected},frames:function(){return this.$store.state.frames}},methods:{add:function(){this.$store.commit("addFrame")}}},r=(o(257),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",[t._l(t.frames,(function(e,n){return o("li",{key:n,staticClass:"frame",class:t.frame===n+1?"selected":""},[o("EditorSvgview",{attrs:{doc:n}})],1)})),t._v(" "),o("li",{staticClass:"frame add",on:{click:function(e){return t.add()}}},[t._v("+")])],2)}),[],!1,null,"66b5992e",null);e.default=component.exports;installComponents(component,{EditorSvgview:o(237).default})},274:function(t,e,o){"use strict";o.r(e);var n={computed:{weapon:function(){return this.$store.state.weapon}},data:function(){return{weapons:["Pencil","Paint"]}},methods:{selectWeapon:function(t){this.$store.commit("selectWeapon",t)}}},r=(o(259),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"weapons"},t._l(t.weapons,(function(e){return o("div",{key:e,staticClass:"weapon",class:t.weapon===e?"selected ":"",style:"background-image: url(icons/"+e+".svg);",on:{click:function(o){return t.selectWeapon(e)}}})})),0)}),[],!1,null,"7fc2b500",null);e.default=component.exports},275:function(t,e,o){"use strict";o.r(e);var n={computed:{pixelWH:function(){return this.$store.state.pixelWH},width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},seconds:function(){return this.$store.state.seconds}},watch:{width:function(){this.widthX=this.width},height:function(){this.heightY=this.height},seconds:function(){this.sec=this.seconds}},data:function(){return{pixel:this.pixelWH,widthX:this.width,heightY:this.height,sec:this.seconds}},mounted:function(){this.pixel=this.pixelWH,this.widthX=this.width,this.heightY=this.height,this.sec=this.seconds},methods:{update:function(){this.$store.commit("updateLayout",{pixel:parseInt(this.pixel),width:parseInt(this.widthX),height:parseInt(this.heightY),seconds:parseFloat(this.sec)})}}},r=o(18),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",{attrs:{for:"optionsfilex"}},[t._v("Files x:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.widthX,expression:"widthX"}],attrs:{id:"optionsfilex",type:"range",name:"filex",min:"2",max:"100"},domProps:{value:t.widthX},on:{__r:function(e){t.widthX=e.target.value}}}),t._v(" "+t._s(t.widthX)+"\n  \n  "),o("label",{attrs:{for:"optionsfiley"}},[t._v("Files y:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.heightY,expression:"heightY"}],attrs:{id:"optionsfiley",type:"range",name:"filey",min:"2",max:"100"},domProps:{value:t.heightY},on:{__r:function(e){t.heightY=e.target.value}}}),t._v(" "+t._s(t.heightY)+"\n  \n  "),o("label",{attrs:{for:"optionsseconds"}},[t._v("Seconds:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.sec,expression:"sec"}],attrs:{id:"optionsseconds",type:"range",name:"seconds",min:"0.1",max:"50",step:"0.10"},domProps:{value:t.sec},on:{__r:function(e){t.sec=e.target.value}}}),t._v("\n  "+t._s(t.sec)+"s\n  "),o("button",{on:{click:t.update}},[t._v("Update")])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,o){"use strict";o.r(e);var n=o(18),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("EditorSvgpreview")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EditorSvgpreview:o(248).default})},292:function(t,e,o){"use strict";o(267)},293:function(t,e,o){var n=o(37)(!1);n.push([t.i,".editor[data-v-2309cf4e]{display:block;width:100vw;position:relative;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;background:var(--bg)}.editor[data-v-2309cf4e]:-webkit-full-screen{padding:15px}.editor[data-v-2309cf4e]:-ms-fullscreen{padding:15px}.editor[data-v-2309cf4e]:fullscreen{padding:15px}.container[data-v-2309cf4e]{display:block;position:relative;height:calc(100vh - 100px);margin-left:20px;margin-right:20px}.headerEditor[data-v-2309cf4e]{text-align:right;height:24px}.bodyEditor[data-v-2309cf4e]{display:grid;grid-template-columns:120px 180px minmax(300px,1fr) 180px 240px;grid-gap:0 20px;gap:0 20px;grid-auto-flow:row}.column-pre-left[data-v-2309cf4e]{display:block}.column-right[data-v-2309cf4e]{display:flex;flex-direction:column}.column-center[data-v-2309cf4e]{height:calc(100vh - 100px)}.column-left[data-v-2309cf4e],.column-pre-left[data-v-2309cf4e],.column-pre-right[data-v-2309cf4e],.column-right[data-v-2309cf4e]{max-height:calc(100vh - 100px);overflow-y:auto}.canvas[data-v-2309cf4e]{height:100%}",""]),t.exports=n},299:function(t,e,o){"use strict";o.r(e);var n=o(233),r=(o(23),o(26),o(15),o(214),o(27),o(215),o(216),o(217),o(218),o(219),o(220),o(221),o(222),o(223),o(224),o(225),o(226),o(227),o(228),o(229),o(230),o(35),{computed:{frame:function(){return this.$store.state.frameSelected-1},colors:function(){var t=[];return Object.keys(this.$store.state.frames[this.frame][0].colors).forEach((function(e){t.push(e)})),t=Object(n.a)(new Set(t)),t}}}),c=(o(292),o(18)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"editor",attrs:{id:"editor"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"bodyEditor"},[o("div",{staticClass:"column-pre-left"},[o("EditorBox",{attrs:{title:"Frames"}},[o("EditorFrames")],1)],1),t._v(" "),o("div",{staticClass:"column-left"},[o("EditorBox",{attrs:{title:"Weapons"}},[o("EditorWeapons")],1),t._v(" "),o("EditorBox",{attrs:{title:"Colors"}},[o("EditorColors")],1)],1),t._v(" "),o("div",{staticClass:"column-center"},[o("EditorBox",{staticClass:"canvas",attrs:{title:"Canvas"}},[o("EditorCanvas")],1)],1),t._v(" "),o("div",{staticClass:"column-pre-right"},[t.colors.length>0?o("EditorBox",{attrs:{title:"Fr. Colors"}},[o("EditorColorsFrame")],1):t._e()],1),t._v(" "),o("div",{staticClass:"column-right"},[o("EditorBox",{attrs:{title:"Minimap"}},[o("EditorPreview")],1),t._v(" "),o("EditorBox",{attrs:{title:"Options"}},[o("EditorOptions")],1),t._v(" "),o("EditorBox",{attrs:{title:"Export"}},[o("EditorExport")],1)],1)]),t._v(" "),o("div",{staticClass:"footerEditor"})])])}),[],!1,null,"2309cf4e",null);e.default=component.exports;installComponents(component,{EditorFrames:o(273).default,EditorBox:o(268).default,EditorWeapons:o(274).default,EditorColors:o(270).default,EditorCanvas:o(269).default,EditorColorsFrame:o(271).default,EditorPreview:o(276).default,EditorOptions:o(275).default,EditorExport:o(272).default})}}]);