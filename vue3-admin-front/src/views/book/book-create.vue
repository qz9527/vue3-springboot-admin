<template>
  <div class="container">create
            <el-button>测试</el-button>
  </div>
</template>

<script>
import Config from "@/config/index";
export default {
  setup(){
    console.log(Config.baseURL)
  }
};
</script>

<style>
</style>