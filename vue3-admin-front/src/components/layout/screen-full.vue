<template>
  <div class="container" title="全屏/正常">
    <i
      class="iconfont"
      :class="isFullscreen ? 'el-icon-switch-button' : 'el-icon-full-screen'"
      @click="handleFullScreen"
    ></i>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted, onDeactivated } from "vue";
import screenfull from "screenfull";
export default {
  name: "",
  setup() {
    const data = reactive({ isFullscreen: false });
    onBeforeMount(() => {});
    onMounted(() => {
      if (screenfull.isEnabled) {
        screenfull.on("change", change);
      }
      screenfull.toggle();
    });
    onDeactivated(() => {
      if (screenfull.isEnabled) {
        screenfull.off("change", change);
      }
    });
    const handleFullScreen = function () {
      screenfull.toggle();
    };
    const change = () => {
      data.isFullscreen = screenfull.isFullscreen;
    };
    return {
      ...toRefs(data),
      handleFullScreen,
      change,
    };
  },
};
</script>
<style scoped lang='less'>
.container {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;

  i {
    width: 40px;
    height: 40px;
    font-size: 20px;

    &:before {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
  }
}
</style>