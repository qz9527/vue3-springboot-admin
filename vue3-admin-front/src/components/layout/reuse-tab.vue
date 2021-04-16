<template>
  <div>
    <el-tag
      v-for="tag in histories"
      :key="tag.path"
      closable
      :type="tag.type"
    >
      {{ tag.stageId }}
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
</style>