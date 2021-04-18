<template>
  <div>
    <el-tag class="tags" closable v-for="tag in histories" :key="tag.path" :type="tag.type">
      <router-link class="tag-item" :to="tag.path">
        <span class="button">{{ tag.title }}</span></router-link
      >
    </el-tag>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  name: "",
  computed: {},
  setup() {
    const histories = reactive([]);
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        // histories.push(route.path)
        const ele = {};
        ele.stageId = route.name;
        ele.path = route.path;
        ele.routePath = route.matched[route.matched.length - 1].path;
        ele.title = route.meta.title;
        const result = histories.find((item) => {
          return item.path == ele.path;
        });
        if (result == undefined) {
          histories.push(ele);
        }
      }
    );
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
      histories,
      route,
    };
  },
};
</script>
<style scoped lang='less'>
.active {
  box-sizing: border-box;
  height: 40px;
  color: #ffffff;
  background: @theme;
  border: none;
  position: relative;
}
.tags{
  margin-right: 10px;
}
.tag-item {
  height: 40px;
  width: 60px;
  padding: 5px 0px 5px 5px;
}
.button{
  border: 1px solid #ccc;
  padding: 5px;
}
</style>