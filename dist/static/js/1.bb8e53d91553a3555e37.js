webpackJsonp([1],{"+JYW":function(e,t){},"6ThT":function(e,t){},Quw4:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"login",data:function(){return{title:"登录",labelPosition:"right",loading:!1,loginForm:{name:"",password:""}}},methods:{onSubmit:function(){var e=this;this.loading=!0;var t=this.loginForm.name,o=this.loginForm.password;setTimeout(function(){e.loading=!1,"admin"===t?(e.loading=!1,e.$message({message:"恭喜你，登录成功",type:"success"}),localStorage.setItem("name",t),localStorage.setItem("password",o),setTimeout(function(){e.$router.push("index")},500)):e.$message({message:"用户名密码错误",type:"error"})},2e3)}}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"loginContainer"},[o("el-form",{staticClass:"loginForm",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.loginForm}},[o("h3",{staticClass:"title"},[e._v(e._s(e.title))]),e._v(" "),o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{attrs:{"auto-complete":"on"},model:{value:e.loginForm.name,callback:function(t){e.$set(e.loginForm,"name",t)},expression:"loginForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{type:"password","auto-complete":"on"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("登录")]),e._v(" "),o("el-button",[e._v("取消")])],1)],1)],1)},staticRenderFns:[]};var i=o("Z0/y")(n,a,!1,function(e){o("6ThT"),o("+JYW")},"data-v-75fd2385",null);t.default=i.exports}});
//# sourceMappingURL=1.bb8e53d91553a3555e37.js.map