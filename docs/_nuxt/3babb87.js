(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{234:function(t,e,n){var o=n(2),c=n(235),r=n(84);o({target:"Array",proto:!0},{fill:c}),r("fill")},235:function(t,e,n){"use strict";var o=n(19),c=n(83),r=n(11);t.exports=function(t){for(var e=o(this),n=r(e.length),l=arguments.length,h=c(l>1?arguments[1]:void 0,n),d=l>2?arguments[2]:void 0,f=void 0===d?n:c(d,n);f>h;)e[h++]=t;return e}},262:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("6ca35e44",content,!0,{sourceMap:!1})},279:function(t,e,n){"use strict";n(262)},280:function(t,e,n){var o=n(37)(!1);o.push([t.i,".beforecanvas[data-v-5f77d7b6]{display:block;position:relative;height:100%}.canvas[data-v-5f77d7b6]{position:relative;width:100%;height:calc(100% - 70px);overflow:auto;margin:0 auto;display:flex;align-items:center}.precanvas[data-v-5f77d7b6]{position:relative;margin:auto;display:block}.canvasMouse[data-v-5f77d7b6]{position:absolute;z-index:3;pointer-events:none}canvas[data-v-5f77d7b6]{position:relative;margin:auto;display:block}canvas[data-v-5f77d7b6]:hover{cursor:crosshair}canvas.Pencil[data-v-5f77d7b6]:hover{cursor:url(/icons/Pencil.svg) 0 128,crosshair}.boxBlock[data-v-5f77d7b6]{margin:auto}.fileBlock[data-v-5f77d7b6]{display:flex}.pixelBlock[data-v-5f77d7b6]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;border:.3px solid var(--bg);background:repeating-conic-gradient(var(--canvas-one) 0,var(--canvas-one) 25%,var(--canvas-two) 0,var(--canvas-two) 50%) 50%/20px 20px;background:repeating-conic-gradient(var(--canvas-one) 0 25%,var(--canvas-two) 0 50%) 50%/20px 20px}.pixelBlock[data-v-5f77d7b6]:hover{border:1px solid}.footer[data-v-5f77d7b6]{display:flex;justify-content:space-between;align-items:center;padding:10px;margin-top:5px;background-image:paint(pixelbox);--pixelbox-border:3px;--pixelbox-border-radius:1px;--pixelbox-border-color:var(--color);--pixelbox-background-color:var(--bg);--pixelbox-background-shadow-border:0px;--pixelbox-background-shadow-color:var(--color);--pixelbox-background-shadow-position:bottom-right}",""]),t.exports=o},295:function(t,e,n){"use strict";n.r(e);n(234),n(23),n(26);var o={computed:{clickElement:function(){return this.$store.state.clickValue},color:function(){return this.$store.state.colorSelected},width:function(){return this.$store.state.width},height:function(){return this.$store.state.height},pixelWH:function(){return this.$store.state.pixelWH},frames:function(){return this.$store.state.frames},frameSelected:function(){return this.$store.state.frameSelected},layerSelected:function(){return this.$store.state.layerSelected},weapon:function(){return this.$store.state.weapon},clickButton:function(){return this.$store.state.clickButton}},watch:{clickElement:function(t){t||this.paintMouseUp()},width:function(){var t=this;this.$nextTick((function(){t.clearData(),t.loadDefaultData()}))},height:function(){var t=this;this.$nextTick((function(){t.clearData(),t.loadDefaultData()}))},frameSelected:function(){this.clearData(),this.loadDefaultData()},frames:function(){this.clearData(),this.loadDefaultData()}},data:function(){return{elements:null,scale:20,ctx:null,ctxMouse:null,raf:null,pos:{x:0,y:0}}},mounted:function(){var t=this;this.$refs.canvas.addEventListener("mousemove",this.paintMouseEnter,!1),this.$refs.canvas.addEventListener("wheel",(function(e){e.preventDefault(),e.deltaY<0?t.zoomIn():t.zoomOut()}),!1),this.ctx=this.$refs.canvas.getContext("2d"),this.ctxMouse=this.$refs.canvasMouse.getContext("2d"),this.$nextTick((function(){t.loadDefaultData()}))},methods:{zoomIn:function(){var t=this;this.scale<40&&(this.scale++,this.$nextTick((function(){t.loadDefaultData()})))},zoomOut:function(){var t=this;this.scale>1&&(this.scale--,this.$nextTick((function(){t.loadDefaultData()})))},clearData:function(){this.ctx.clearRect(0,0,this.width*this.scale,this.height*this.scale)},paintMouseEnter:function(t){this.paintMouseShadow(),this.pos.x=t.layerX,this.pos.y=t.layerY,this.clickElement&&this.paint()},paintMouseDown:function(t){this.paint()},paintMouseUp:function(t){},clearMouseShadow:function(){this.ctxMouse.clearRect(0,0,this.width*this.scale,this.height*this.scale)},paintMouseShadow:function(){var t=parseInt(this.pos.x/this.scale)+1,e=parseInt(this.pos.y/this.scale)+1;this.clearMouseShadow(),this.ctxMouse.beginPath(),this.ctxMouse.strokeStyle="#000",this.ctxMouse.fillStyle="transparent",this.ctxMouse.lineWidth=1,this.ctxMouse.rect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale),this.ctxMouse.stroke(),this.ctxMouse.fill()},paint:function(){var t=parseInt(this.pos.x/this.scale)+1,e=parseInt(this.pos.y/this.scale)+1,n=this.color,o=this.frameSelected-1;2===this.clickButton&&(n="transparent"),"transparent"===n||2===this.clickButton?(this.ctx.strokeStyle="transparent",this.ctx.fillStyle="transparent",this.ctx.lineWidth=0,this.ctx.clearRect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale)):(this.ctx.beginPath(),this.ctx.strokeStyle="transparent",this.ctx.fillStyle="#"+n,this.ctx.lineWidth=0,this.ctx.rect((t-1)*this.scale,(e-1)*this.scale,this.scale,this.scale),this.ctx.stroke(),this.ctx.fill()),this.saveColor(t,e,n,o)},saveColor:function(t,e,n,o){this.$store.commit("addPixel",{x:t,y:e,color:n,frame:o})},loadDefaultData:function(){var t=this,e=this.frames[this.frameSelected-1][0].colors;Object.keys(e).forEach((function(e,n){t.ctx.beginPath(),t.ctx.strokeStyle="transparent",t.ctx.lineWidth=0,t.ctx.fillStyle="#"+e,t.frames[t.frameSelected-1][0].colors[e].pixels.forEach((function(e){var n=e.x,o=e.y;t.ctx.rect((n-1)*t.scale,(o-1)*t.scale,t.scale,t.scale)})),t.ctx.stroke(),t.ctx.fill()}))}}},c=(n(279),n(18)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"beforecanvas"},[n("div",{staticClass:"canvas"},[n("div",{staticClass:"precanvas"},[n("canvas",{ref:"canvasMouse",staticClass:"canvasMouse",style:"background: transparent;",attrs:{width:t.width*t.scale,height:t.height*t.scale},on:{click:t.paintMouseDown}}),t._v(" "),n("canvas",{ref:"canvas",class:t.weapon,style:"background: repeating-conic-gradient(var(--canvas-one) 0% 25%, var(--canvas-two) 0% 50%) 50% / "+t.scale+"px "+t.scale+"px;",attrs:{width:t.width*t.scale,height:t.height*t.scale},on:{click:t.paintMouseDown,contextmenu:function(e){return t.paintMouseDown.apply(null,arguments)},mouseleave:t.clearMouseShadow}})])]),t._v(" "),n("div",{staticClass:"footer"},[n("span",[t._v("Frame: "+t._s(t.frameSelected)+" / "+t._s(t.frames.length))]),t._v(" "),n("span",[t._v("Layer: "+t._s(t.layerSelected)+" / "+t._s(t.frames[t.frameSelected-1].length))]),t._v(" "),n("span",[t._v("Scale: "+t._s(t.scale))]),t._v(" "),n("span",[t._v("Weapon: "+t._s(t.weapon))]),t._v(" "),n("span",[t._v("Color:\n      "),"transparent"!=t.color?n("span",{style:"color: #"+t.color+";"},[t._v("#"+t._s(t.color))]):n("span",[t._v("Transparent")])])])])}),[],!1,null,"5f77d7b6",null);e.default=component.exports}}]);