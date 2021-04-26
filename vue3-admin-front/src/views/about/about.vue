<template>
  <div>
    <h2>关于项目</h2>
    <div>
      <span>功能列表</span>
      <ul>
        <li>1.配置全局less vue.config.js</li>
        <li>2.文件別名配置 vue.config.js</li>
        <li>3.element-plus实现按需加载</li>
        <li>4.菜单栏配置</li>
        <li>5.全屏功能</li>
        <li>6.历史导航</li>
        <li>7.面包屑导航</li>
        <li>8.国际化</li>
      </ul>
    </div>
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
</style>