<template>
  <div id="about" >
      <el-row type="flex" justify="center" :gutter="100">
       <el-col :span="4">
         <el-card shadow="always">
           访问量
         </el-card>
       </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            新增人数
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            发布菜谱
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            日活跃量
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card shadow="always">
            评论数
          </el-card>
        </el-col>
      </el-row>
    <el-row :gutter="100" type="flex" justify="center">
     <el-col :span="7">
       <el-card shadow="always">
       访问量
       </el-card></el-col>
     <el-col :span="7">
       <el-card shadow="always">
         访问量
       </el-card>
     </el-col>
      <el-col :span="7">
        <el-card shadow="always">
          访问量
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="100" type="flex" justify="center">
      <el-col :span="15">
        <el-card shadow="always">
          <div ref="myEchartChart" :style="{width: '1000px', height: '300px'}"></div>
        </el-card></el-col>
      <el-col :span="6">
        <el-card shadow="always">
            <div ref="panEchart" :style="{width: '400px', height: '300px'}"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import echarts from "echarts";
  export default {
    name:"About",
    data(){
      return{
        msg: 'Welcome to Your Vue.js App',
          optionDate:{
              tooltip: {
                  trigger: 'axis',
                  axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              legend: {
                  data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
              },
              grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis: [
                  {
                      type: 'category',
                      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                  }
              ],
              yAxis: [
                  {
                      type: 'value'
                  }
              ],
              series: [
                  {
                      name: '直接访问',
                      type: 'bar',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [320, 332, 301, 334, 390, 330, 320]
                  },
                  {
                      name: '邮件营销',
                      type: 'bar',
                      stack: '广告',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [120, 132, 101, 134, 90, 230, 210]
                  },
                  {
                      name: '联盟广告',
                      type: 'bar',
                      stack: '广告',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [220, 182, 191, 234, 290, 330, 310]
                  },
                  {
                      name: '视频广告',
                      type: 'bar',
                      stack: '广告',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [150, 232, 201, 154, 190, 330, 410]
                  },
                  {
                      name: '搜索引擎',
                      type: 'bar',
                      data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                      emphasis: {
                          focus: 'series'
                      },
                      markLine: {
                          lineStyle: {
                              type: 'dashed'
                          },
                          data: [
                              [{type: 'min'}, {type: 'max'}]
                          ]
                      }
                  },
                  {
                      name: '百度',
                      type: 'bar',
                      barWidth: 5,
                      stack: '搜索引擎',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [620, 732, 701, 734, 1090, 1130, 1120]
                  },
                  {
                      name: '谷歌',
                      type: 'bar',
                      stack: '搜索引擎',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [120, 132, 101, 134, 290, 230, 220]
                  },
                  {
                      name: '必应',
                      type: 'bar',
                      stack: '搜索引擎',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [60, 72, 71, 74, 190, 130, 110]
                  },
                  {
                      name: '其他',
                      type: 'bar',
                      stack: '搜索引擎',
                      emphasis: {
                          focus: 'series'
                      },
                      data: [62, 82, 91, 84, 109, 110, 120]
                  }
              ]
          },
          //饼状图
          panDate: {
              tooltip: {
                  trigger: 'item'
              },
              legend: {
                  top: '5%',
                  left: 'center'
              },
              series: [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius: ['40%', '70%'],
                      avoidLabelOverlap: false,
                      itemStyle: {
                          borderRadius: 10,
                          borderColor: '#fff',
                          borderWidth: 2
                      },
                      label: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          label: {
                              show: true,
                              fontSize: '40',
                              fontWeight: 'bold'
                          }
                      },
                      labelLine: {
                          show: false
                      },
                      data: [
                          {value: 1048, name: '搜索引擎'},
                          {value: 735, name: '直接访问'},
                          {value: 580, name: '邮件营销'},
                          {value: 484, name: '联盟广告'},
                          {value: 300, name: '视频广告'}
                      ]
                  }
              ]
          }
      }
    },
    components:{
    },
    mounted(){
      this.$nextTick(()=>{
        setTimeout(() => {
          this.drawLine();
        });
      })
    },
    methods:{
       drawLine(){
         debugger
          //基于准备好的dem,初始化echart实例
         let myEchart = echarts.init(this.$refs.myEchartChart);
         myEchart.setOption(this.optionDate)

         let panEcharts = echarts.init(this.$refs.panEchart);
         panEcharts.setOption(this.panDate)
       }
    },

      watch:{
          // activityData:{
          //     deep:true,
          //     handler(newValue,oldValue){
          //         this.activity.setOption(newValue)
          //     }
          // }
        }
      }
</script>
<style scoped lang="scss">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  #about{
    padding:20px
  }
</style>
