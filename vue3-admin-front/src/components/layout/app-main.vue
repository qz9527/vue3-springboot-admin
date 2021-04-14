<template>
  <section class="container">
    <div class="wrapper" id="wrapper">
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppMain",
};
</script>

<style lang="less" scoped>
.container {
  .wrapper {
    width: 100%;
    height: 100%;
    text-align: left;
  }
}
</style>