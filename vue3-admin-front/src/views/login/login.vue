<template>
  <div class="login">
    <div class="top-img"></div>
    <div class="form-box">
      <div class="title"><span>chenbaiqiang</span></div>
      <div>
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="form"
        >
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="form.password1"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item v-show="type=='register'" label="重复密码">
            <el-input
              v-model="form.password2"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tips" v-if="type == 'login'">
        <span>还没账号</span>
        <el-button @click="toggle('register')" class="input-button">前去注册</el-button>
      </div>
      <div class="tips" v-else>
        <span>已有登录账号</span>
        <el-button @click="toggle('login')" class="input-button">前去登录</el-button>
      </div>
      <div class="submit-wrapper">
        <el-button class="input-button"  v-if="type == 'login'" @click="login">登录</el-button>
        <el-button class="input-button"  v-if="type == 'register'" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive({
      labelPosition: "right",
      type: "login",
      form: {
        username: "root",
        password1: "123456",
        password2: "",
      },
    });
    const toggle = (v) => {
      console.log(v);
      data.type = v;
    };
    const login = ()=>{
      let obj = {username:data.form.data,password:data.form.password1}
      console.log(obj)
    }
    const register = ()=>{
      let obj = {...data.form}
      console.log(obj)
    }
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      ...toRefs(data),
      toggle,
      login,
      register
    };
  },
};
</script>
<style scoped lang='less'>
.login {
  width: 100%;
  height: 100%;
  background-size: auto;
  .form-box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 445px;
  }
  .title {
    text-align: center;
    margin-bottom: 50px;
    font-size: 40px;
  }
}

.input-button {
  width: 80px;
  text-align: center;
}
.tips {
  margin: 10px 0px;
  text-align: right;
}
.submit-wrapper{
  display: flex;
  justify-content: center;
}
</style>