<template>
  <div style="height: 100%">
    <el-container>
      <el-aside class="aside">
        <side-bar></side-bar>
      </el-aside>
      <el-container class="container-main">
        <el-header class="header">
          <div class="left">
            <breadcrumb></breadcrumb>
            <reuse-tab></reuse-tab>
          </div>
          <div class="right-info">
            <ibutton></ibutton>
            <screen-full></screen-full>
            <user></user>
          </div>
        </el-header>
        <el-main ref="main">
          <app-main ref="appMain"></app-main>
          <back-top :right="50" :bottom="50" :fontSize="34"></back-top>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
import AppMain from "../../components/layout/app-main.vue";
import backTop from "../../components/layout/back-top.vue";
import SideBar from "../../components/layout/side-bar.vue";
import Ibutton from "../../components/layout/i-button.vue";
import ReuseTab from "../../components/layout/reuse-tab.vue";
import Breadcrumb from "../../components/layout/breadcrumb.vue";
import ScreenFull from "../../components/layout/screen-full.vue";
import User from '../../components/layout/user.vue';
export default {
  name: "Home",
  components: {
    AppMain,
    backTop,
    SideBar,
    Ibutton,
    ReuseTab,
    Breadcrumb,
    ScreenFull,
    User,
  },
  setup() {
    const store = useStore();
    console.log("1-开始创建组件-setup");
    const data = reactive({});
    onBeforeMount(() => {
      console.log(store.state.user); // 模块下的state
      console.log(store.getters["user/logined"]); // 模块下调用方法
      console.log(store.getters);
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    return {
      ...toRefs(data),
      store,
    };
  },
};
</script>
<style scoped lang='less'>
.el-container {
  display: flex;
}
.aside {
  // background: rgb(25, 42, 94);
  overflow-x: hidden;
  width: 200px !important;
  padding-right: 10px;
}
.container-main {
  padding: 0 10px;
}
.header {
  padding: 0;
  background: @header-background;
  height: @header-height !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 6px 0px rgba(190, 204, 216, 0.4);
  border-bottom: 1px solid rgba(190, 204, 216, 0.4);

  .left {
    height: 100%;
    width: 100%;
    padding: 20px 10px 10px 10px;
    div{
      margin-bottom: 10px;
    }
    .operate {
      display: flex;
      align-items: center;
      background: @header-background;
      padding-left: 20px;
      height: 86px;

      .iconfont {
        font-size: 16px;
        font-weight: 500;
        color: @right-side-font-color;
        cursor: pointer;
        transform: rotate(0deg);
        transition: all 0.3s linear;
        margin-right: 10px;

        &:hover {
          color: #3963bc;
        }
      }

      .rotate {
        transform: rotate(180deg);
        transition: all 0.3s linear;
      }
    }
  }


  .right-info {
    display: flex;
    align-items: center;
  }
}

.el-main {
  overflow-y: auto;
  position: relative;
  padding: 0;
}
</style>