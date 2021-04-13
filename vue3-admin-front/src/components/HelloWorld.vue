<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="title">{{ msg }}</div>
    <el-button size="mini">hello</el-button>
    <el-button
      type="primary"
      @click="$i18n.locale = $i18n.locale === 'zh-cn' ? 'en' : 'zh-cn'"
      >{{ $t("i18n.btn") }}</el-button
    >
    <div class="list">
      <h2>{{ $t("i18n.title1") }}</h2>
      <p>{{ $t("i18n.p1") }}</p>
      <p>{{ $t("i18n.p2") }}</p>
      <p>{{ $t("i18n.p3") }}</p>
    </div>
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
@import url("~styles/vars.less");
a {
  color: @my-theme-color;
}
.title {
  color: @my-theme-color;
}
</style>
