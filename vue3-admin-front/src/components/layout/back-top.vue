<template>
  <div
    class="backTop"
    :style="{ right: right + 'px', bottom: bottom + 'px' }"
    v-if="showBackTop"
  >
    <i
      class="el-icon-arrow-up"
      :style="{ fontSize: fontSize + 'px' }"
      @click="backTop"
    ></i>

  </div>
</template>

<script>
import {ref, onDeactivated, onMounted } from 'vue'
export default {
  name: "BackTop",
  props: {
    right: {
      type: Number,
      default: 50,
    },
    bottom: {
      type: Number,
      default: 50,
    },
    fontSize: {
      type: Number,
      default: 18,
    },
  },
  setup() {
    const scrollY = ref(0);
    const showBackTop = ref(true);
    const targetDom = ref(null);
    const handleScroll = function (e) {
      scrollY.value = e.target.scrollTop;
      showBackTop.value = e.target.scrollTop > 100; // 页面滚动距离大于100的时候显示回到top的标识
      targetDom.value = e;
    };
    const backTop = function () {
      const _this = this;
      console.log(_this)
      let timer = requestAnimationFrame(function fn() {
        const currentTop = _this.targetDom.target.scrollTop;
        if (currentTop > 0) {
          // 平滑滚动
          const scrollSpeed = currentTop + (0 - currentTop) / 6;
          _this.targetDom.target.scrollTop = scrollSpeed;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
    };
    onMounted(() => {
      window.addEventListener("scroll", handleScroll, true);
    });
    onDeactivated(()=>{
      window.removeEventListener("scroll", handleScroll);
    })
    return { backTop, targetDom, scrollY, showBackTop };
  },
  // data() {
  //   return {
  //     targetDom: null, // 当前滚动对象
  //     showBackTop: false, // 是否显示回到顶部标识
  //     scrollY: 0, // 滚动距离
  //   };
  // },
  // mounted() {
  //   // 监听页面滚动
  //   window.addEventListener("scroll", this.handleScroll, true);
  // },
  // methods: {
  //   handleScroll(e) {
  //     this.scrollY = e.target.scrollTop;
  //     this.showBackTop = e.target.scrollTop > 100; // 页面滚动距离大于100的时候显示回到top的标识
  //     this.targetDom = e;
  //   },
  //   // 滑动到顶部
  //   backTop() {
  //     const _this = this;
  //     let timer = requestAnimationFrame(function fn() {
  //       const currentTop = _this.targetDom.target.scrollTop;
  //       if (currentTop > 0) {
  //         // 平滑滚动
  //         const scrollSpeed = currentTop + (0 - currentTop) / 6;
  //         _this.targetDom.target.scrollTop = scrollSpeed;
  //         timer = requestAnimationFrame(fn);
  //       } else {
  //         cancelAnimationFrame(timer);
  //       }
  //     });
  //   },
  // },
  // destroyed() {
  //   window.removeEventListener("scroll", this.handleScroll);
  // },
};
</script>

<style lang="less" scoped>
.backTop {
  position: fixed;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  line-height: 50px;
  z-index: 3;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
}
</style>
