<template>
   <router-view />
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted,provide } from 'vue'
import * as echarts from 'echarts'
export default {
  name: '',
  setup() {
    provide('ec',echarts)
    const data = reactive({})
    onBeforeMount(() => {

    })
    onMounted(() => {
     
    })
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang='less'>

</style>