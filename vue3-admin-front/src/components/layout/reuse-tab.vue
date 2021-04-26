<template>
  <div>
    <el-tag
      class="tags"
      closable
      v-for="tag in histories"
      :key="tag.path"
      :type="tag.type"
    >
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
    const data = reactive({});
    onBeforeMount(() => {});
    onMounted(() => {});
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
.tags {
  margin-right: 10px;
}
.tag-item {
  height: 40px;
  width: 60px;
  padding: 5px 0px 5px 5px;
}
.button {
  border: 1px solid #ccc;
  padding: 5px;
}
</style>