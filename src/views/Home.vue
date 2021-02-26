<template>
  <div id="home">
    <el-container>
      <Sidemenu width="200px" style="height: 100vh;"></Sidemenu>
      <el-container>
        <el-header style="background-color: pink">
          <Header :levelList="levelList"></Header>
        </el-header>
        <el-main style="padding: 0">
          <el-breadcrumb separator-class="el-icon-arrow-right" style="background-color: white; padding: 10px">
            <el-breadcrumb-item  v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <keep-alive>
            <router-view style="padding: 20px"></router-view>
          </keep-alive>
        </el-main>
<!--        //默认false 冒泡阶段执行   true为捕获阶段执行-->
        document.addeventListener('click',function(){},false)
<!--        浏览器端：-->

<!--        ECMAScript，描述了JavaScript语言的语法和基本对象-->
<!--        文档对象模型（DOM），描述处理网页内容的方法和接口-->
<!--        浏览器对象模型（BOM），描述与浏览器进行交互的方法和接口-->
<!--        服务器端：-->

<!--        ECMAScript-->
<!--        node.js内置模块：文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等-->
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Header from '../components/baseBar/Header'
  import Sidemenu from '../components/baseBar/Sidemenu'
  export default {
    name:"Index",
    data(){
      return{
        levelList: []
      }
    },
    components:{
      Header,
      Sidemenu
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    created(){
      this.getBreadcrumb()
    },
    methods:{
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item =>{
                  if(item.meta.title){
                    return item.name
                  }
          }
        )
        console.log(matched)
        debugger
        const first = matched[0];
        if (first && first.name !== '首页') {
          matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
        }
        this.levelList = matched
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .home > *{
    height: 100vh;
  }
  .el-header {
    padding: 0;
  }
  .el-main {
    padding: 20px;
  }
</style>
