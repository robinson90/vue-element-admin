webpackJsonp([3],{"4Lha":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"app-wrapper",class:this.classObj},["mobile"===this.device&&this.sidebar.opened?i("div",{staticClass:"drawer-bg",on:{click:this.handleClickOutside}}):this._e(),this._v(" "),i("sidebar",{staticClass:"sidebar-container"}),this._v(" "),i("div",{staticClass:"main-container"})],1)},staticRenderFns:[]};var a=e("Z0/y")({name:"layout",components:{},mixins:[],computed:{sidebar:function(){return this.$store.state.app.sidebar},device:function(){return this.$store.state.app.device},classObj:function(){return{hideSidebar:!this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:"mobile"===this.device}}},methods:{handleClickOutside:function(){this.$store.dispatch("closeSideBar",{withoutAnimation:!1})}}},s,!1,function(t){e("m3a1")},"data-v-1878570c",null);i.default=a.exports},m3a1:function(t,i){}});
//# sourceMappingURL=3.3c61cf0f7872d1ed1a06.js.map