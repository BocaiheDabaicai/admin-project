<template>
<div class="login-container">
  <el-row>
    <el-col :span="12" :xs="0"></el-col>
    <el-col :span="12" :xs="24">
      <el-form class="login-form">
        <h1>Hello!</h1>
        <h2>欢迎来到管理练习系统</h2>
        <el-form-item>
          <el-input class="form-input" :prefix-icon="User" v-model="loginFrom.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="form-input" :prefix-icon="Lock" type="password" v-model="loginFrom.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="form-button" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</div>
</template>

<script setup lang="ts">
import {User,Lock} from '@element-plus/icons-vue'
import {reactive} from "vue";
// 引入用户相关的仓库
import useUserStore from '@/store/modules/user';

let useStore = useUserStore();

let loginFrom = reactive({
  username:'',
  password:''
})

const login = () => {
  useStore.userLogin(loginFrom)
}

</script>

<style lang="scss" scoped>
.login-container{
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/login/background.png");
  background-size: cover;

  .login-form{
    position: relative;
    width: 80%;
    height: 60vh;
    top:30vh;
    background-image: url("@/assets/login/login.png");
    background-size:cover;
    padding: 10%;
    border-radius: 20px;

    h1{
      color: black;
      font-size: 40px;
    }
    h2{
      color: black;
      font-size: 20px;
      margin: 20px 0;
    }
    .form-button{
      width: 100%;
    }
  }
}
</style>