(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{245:function(e,t,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(38).default)("7d14335d",content,!0,{sourceMap:!1})},259:function(e,t,n){"use strict";n(245)},260:function(e,t,n){var o=n(37)(!1);o.push([e.i,".weapons[data-v-7fc2b500]{display:block;font-size:0}.weapon[data-v-7fc2b500]{display:inline-block;width:25%;height:40px;background-size:30px;background-position:50%;background-repeat:no-repeat}.weapon[data-v-7fc2b500]:hover{cursor:url(/icons/Pointer.svg) 4 0,pointer}.selected[data-v-7fc2b500]{border:3px dashed var(--color)}",""]),e.exports=o},274:function(e,t,n){"use strict";n.r(t);var o={computed:{weapon:function(){return this.$store.state.weapon}},data:function(){return{weapons:["Pencil","Paint"]}},methods:{selectWeapon:function(e){this.$store.commit("selectWeapon",e)}}},c=(n(259),n(18)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weapons"},e._l(e.weapons,(function(t){return n("div",{key:t,staticClass:"weapon",class:e.weapon===t?"selected ":"",style:"background-image: url(icons/"+t+".svg);",on:{click:function(n){return e.selectWeapon(t)}}})})),0)}),[],!1,null,"7fc2b500",null);t.default=component.exports}}]);