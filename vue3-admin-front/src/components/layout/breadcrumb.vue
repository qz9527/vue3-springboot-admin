<template>
  <div class="nav-title">
    <a
      class="item"
      v-for="(item, index) in titleArr"
      style="cursor: default"
      :key="index"
    >
      <p>{{ item }}</p>
    </a>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "",
  setup() {
    const store = useStore();
    const route = useRoute();
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
      store,
      route,
    };
  },
  computed: {
    stageInfo() {
      return this.store.getters.getStageInfo(this.route.name);
    },
    titleArr() {
      return this.stageInfo.map((item) => item.title).filter((item) => !!item);
    },
  },
};
</script>
<style scoped lang='less'>
.nav-title {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
  .item {
    i {
      margin-right: 4px;
    }

    display: flex;
    align-items: center;
    padding-right: 18px;
    position: relative;
    color: @right-side-font-color;

    &:after {
      content: "/";
      position: absolute;
      top: 0;
      right: 6px;
    }
  }

  .item:last-child {
    color: @theme;
    padding-right: 0;

    &:after {
      content: "";
    }
  }
}
</style>