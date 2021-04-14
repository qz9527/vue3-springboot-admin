<template>
  <div style="height: 100%">
    <el-container>
      <el-aside class="aside">
          <hello-world msg="hhhhhh"></hello-world>
          <back-top></back-top>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div class="left">
          </div>
        </el-header>
        <el-main ref="main">
            <app-main ref="appMain"></app-main>
            
        </el-main>
        <back-top :right="50" :bottom="50" :fontSize="34"></back-top>
      </el-container>
    </el-container>

  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import HelloWorld from "../../components/HelloWorld.vue";
import AppMain from '../../components/layout/app-main.vue';
import backTop from '../../components/layout/back-top.vue';
export default {
  name: "Home",
  components: {
    HelloWorld,
    AppMain,
    backTop
  },
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
</style>