<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form" :model="loginForm" :rules="rules" ref="loginFormRef">
          <h1>Hello!</h1>
          <h2>欢迎来到管理练习系统</h2>
          <el-form-item prop="username">
            <el-input class="form-input" :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input class="form-input" :prefix-icon="Lock" type="password" v-model="loginForm.password"
                      show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button v-loading="loadRef" class="form-button" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from "vue";
// 引入用户相关的仓库
import useUserStore from '@/store/modules/user';
import {useRouter} from "vue-router";
import {ElNotification} from "element-plus";
// 引入时间端函数
import {getTime} from "@/utils/time.ts";

let useStore = useUserStore();
let $router = useRouter();

let loadRef = ref(false);
let loginFormRef = ref();

let loginForm = reactive({
  username: '',
  password: ''
})

const login = async () => {
  // 校验通过，发起请求
  await loginFormRef.value.validate() // 同步代码，会阻塞下面的代码，如果执行失败，则不会执行下面的代码


  loadRef.value = true

  try {
    await useStore.userLogin(loginForm)
    $router.push('/')
    ElNotification({
      type: 'success',
      title: `Hi,${getTime()}好呀！`,
      message: '欢迎回来'
    })
    loadRef.value = false
  } catch (error: any) {
    ElNotification({
      type: 'error',
      message: error.message
    })
    loadRef.value = false
  }
  // 调试 登录状态
  // let login = useStore.userLogin(loginForm)
  // console.log(login)
}

const validatorUserName = (rule:any,value:any,callback:any) => {
  // 校验用户名的规则
  if(value.length >= 5){
    callback();
  }else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassWord = (rule:any,value:any,callback:any) => {
  // 校验密码的规则
  if(value.length >= 5){
    callback();
  }else {
    callback(new Error('密码长度至少五位'))
  }
}

// 定义表单规则对象
const rules = {
  username: [
    // {required: true, message: '请输入用户名', trigger: 'blur'},
    // {required: true, min: 5, max: 12, message: '请确认账号长度保持在5到12位', trigger: 'blur'}
    {trigger:'change',validator:validatorUserName}
  ],
  password: [
    // {required: true, message: '请输入密码', trigger: 'blur'},
    // {required: true, min: 6, message: '密码长度至少6位', trigger: 'blur'}
    {trigger:'change',validator:validatorPassWord}
  ]
}


</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/login/background.png");
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    height: 60vh;
    top: 30vh;
    background-image: url("@/assets/login/login.png");
    background-size: cover;
    padding: 10%;
    border-radius: 20px;

    h1 {
      color: black;
      font-size: 40px;
    }

    h2 {
      color: black;
      font-size: 20px;
      margin: 20px 0;
    }

    .form-button {
      width: 100%;
    }
  }
}
</style>