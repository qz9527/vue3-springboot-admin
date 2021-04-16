<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <template v-for="item in sideBarList">
        <!-- 一级菜单 -->
        <el-submenu
          style="padding-left:40px"
          v-if="item.children"
          :key="item.name"
          :index="item.name"
          class="subMenuContent"
        >
          <template #title >
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>
          <!-- <el-menu-item index="1-4-1">选项1</el-menu-item> -->

          <!-- 二级菜单 -->
          <template v-for="subItem in item.children">
            <el-submenu
              v-if="subItem.children"
              :key="subItem.name"
              :index="subItem.name"
              class="subMenuContent"
            >
              <template #title>
                <i class="el-icon-location"></i>
                <span>{{ subItem.title }}</span>
                <!-- 三级菜单 -->
                <template>
                  <router-link
                    v-for="grandchildItem in subItem.children"
                    :key="grandchildItem.name"
                    :to="grandchildItem.path"
                    class="circle third"
                  >
                    <el-menu-item
                      :index="grandchildItem.meta.name"
                      style="padding-left: 80px"
                      class="subMenuContent"
                    >
                      {{ grandchildItem.meta.title }}
                    </el-menu-item>
                  </router-link>
                </template>
              </template>
              <!-- 三级菜单 -->
            </el-submenu>
            <!-- 二级else -->
            <router-link
              :to="subItem.path"
              :key="subItem.name"
              class="circle"
              v-else
            >
             
              <el-menu-item
                :index="subItem.name"
                style="padding-left: 60px"
                class="subMenuContent"
              >
               <!-- <i :class="subItem.icon"></i> -->
                {{ subItem.title }}
              </el-menu-item>
            </router-link>
          </template>
        </el-submenu>
        <!-- 一级else -->
        <router-link :to="item.path" :key="item.name" class="circle" v-else>
          <el-menu-item
            :index="item.name"
            style="padding-left: 60px"
            class="subMenuContent"
          >
            <i class="el-icon-setting"></i>
            {{ item.title }}
          </el-menu-item>
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
import routes from "@/router/route";
import { mapGetters, useStore } from "vuex";
export default {
  name: "",
  setup() {
    const store = useStore();
    const router = useRouter();
    function tolog() {
      router.push("/log");
    }
    console.log(routes);
    console.log(store.getters);
    const data = reactive({
      isCollapse: false,
      routes,
    });
    onBeforeMount(() => {});
    onMounted(() => {});
    return {
      ...toRefs(data),
      tolog,
    };
  },
  computed: {
    ...mapGetters(["sideBarList"]),
  },
};
</script>
<style scoped lang='less'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  text-align: left;
}
.subMenuContent {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.circle {
  .el-menu-item {
    position: relative;

    &:before {
      content: "";
      width: 4px;
      height: 4px;
      border-radius: 50%;
      border: 1px solid @submenu-title;
      position: absolute;
      left: 45px;
      top: 23px;
    }
  }
}
</style>