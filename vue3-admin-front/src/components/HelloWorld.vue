<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="title">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: "Hello vue3 admin",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="less">
@import url("../assets/styles/vars.less");
a {
  color: @my-theme-color;
}
.title{
  color: @my-theme-color;
}
</style>
