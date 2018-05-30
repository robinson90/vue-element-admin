<template>
  <div class="loginContainer">
    <el-form :label-position="labelPosition" label-width="80px" :model="loginForm" class="loginForm">
      <h3 class="title">{{title}}</h3>
       <el-form-item label="用户名">
            <el-input v-model="loginForm.name" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="loginForm.password" type="password" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="loading">登录</el-button>
        <el-button>取消</el-button>
        </el-form-item>
        
    </el-form>
    
  </div>
</template>
<script>
import { getToken, setToken, removeToken } from '@/utils/auth'

export default {
  name: "login",
  data() {
    return {
        title:'登录',
        labelPosition: 'right',
        loading:false,
        loginForm: {
          name: '',
          password: '',
        }
    };
  },
  methods:{
    //   提交表单
      onSubmit(){
          this.loading = true ;
          let name = this.loginForm.name
          let password = this.loginForm.password
          setTimeout(()=>{
              this.loading = false 
            if(name==="admin"){
            this.loading = false
                        this.$message({
                        message: '恭喜你，登录成功',
                        type: 'success'
                        });
                        setToken(password)
                        setTimeout(()=>{
                            this.$router.push("index")
                        },500) 
            }else{
                 this.$message({
                        message: '用户名密码错误',
                        type: 'error'
                        });

            }
              
          },2000)

      }
  }
};
</script>
<style lang="scss">
.loginContainer {
    .el-form-item__label{
    color: #eee;
    }
  .el-input{

      input{
          background: transparent;
          color:#fff;
      }
  }



}

</style>
<style scoped lang="scss">
.loginContainer {
  background: #2d3a4b;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  .title{
      font-size: 26px;
    font-weight: 400;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
    .loginForm{
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    padding: 35px 35px 15px 35px;
    margin: 200px auto;
    }


}
</style>
