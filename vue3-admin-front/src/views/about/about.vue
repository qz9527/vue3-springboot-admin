<template>
  <div>
    <h2>关于项目</h2>
    <div>
      <span>功能列表</span>
      <ul>
        <li>1.配置全局less vue.config.js</li>
        <li>2.文件別名配置 vue.config.js</li>
        <li>3.element-plus实现按需加载</li>
        <li>4.菜单栏配置</li>
        <li>5.全屏功能</li>
        <li>6.历史导航</li>
        <li>7.面包屑导航</li>
        <li>8.国际化</li>
      </ul>
    </div>
    <div id="customerChart" :style="{ width: '300px', height: '300px' }">
    </div>
    <div id="chart1" :style="{ width: '300px', height: '300px' }">
    </div>
  </div>
</template>

<script>
import { reactive,inject, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "",
  setup() {
    let echarts = inject("ec")
    const data = reactive({});
    onBeforeMount(() => {
    });
    onMounted(() => {
      let myChart = echarts.init(document.getElementById("customerChart"));
      let chart1 = echarts.init(document.getElementById("chart1"));
      myChart.setOption({
        title: { text: "总用户量" },
        tooltip: {},
        xAxis: {
          data: ["12-3", "12-4", "12-5", "12-6", "12-7", "12-8"],
        },
        yAxis: {},
        series: [
          {
            name: "用户量",
            type: "line",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
      chart1.setOption({
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            roseType: 'angle',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ]
        }
    ]
})
      window.onresize = function () {//自适应大小
        myChart.resize();
        chart1.resize();
      };
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style scoped lang='less'>
</style>