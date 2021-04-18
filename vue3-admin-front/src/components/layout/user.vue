<template>
  <div class="user">
    <el-dropdown>
      <span class="el-dropdown-link">
        <div class="nav-avatar"><img src="../../assets/image/user/user.png" alt="头像" /></div>
      </span>
      <template #dropdown>
        <el-dropdown-menu class="user-box">
          <el-dropdown-item>黄金糕xxxxxxx</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  setup() {
    console.log("1-开始创建组件-setup");
    const data = reactive({});
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang='less'>
.user {
  height: 40px;

  .el-dropdown-link {
    cursor: pointer;

    .nav-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 10px;
    }
  }
}
.user-box{
    width: 326px;
  background-color: none;
  background: transparent;
  margin-bottom: 0;
  padding-bottom: 0;
  border: none;
}
</style>