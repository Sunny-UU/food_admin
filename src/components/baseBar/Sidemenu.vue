<template>
    <div>
     <transition name="fade">
         <el-menu
                 :default-active="this.$route.path"
                 class="el-menu-vertical-demo"
                 @open="handleOpen"
                 @close="handleClose"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router
                 :collapse="isCollapse" unique-opened>

             <el-menu-item  @click="isCollapse = !isCollapse">
                 <i class="el-icon-menu"></i>
                 <span slot="title">导航</span>
             </el-menu-item>

            <template v-for="itemX in route">

                <el-menu-item v-if="onlyOneChild(itemX)" :key="resolvePath(itemX.path, itemX.children[0].path)" :index="resolvePath(itemX.path, itemX.children[0].path)" >
                    <i :class="itemX.children[0].meta.icon"></i>
                    <span slot="title">{{itemX.children[0].name}}</span>
                </el-menu-item>

                <el-submenu v-else :key="itemX.path" :index="itemX.path"  popper-append-to-body>
                    <template slot="title">
                        <i :class="itemX.meta.icon"></i>
                        <span slot="title">{{itemX.name}}</span>
                    </template>

                    <el-menu-item v-for="item in itemX.children" :key="item.path" :index=" resolvePath(itemX.path,item.path)">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </el-menu-item>
                </el-submenu>
            </template>
         </el-menu>
     </transition>
    </div>
</template>
<style>
    .el-menu-vertical-demo{
        height: 100vh;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }
</style>

<script>
    export default {
        name:"Sidemenu",
        data() {
            return {
                isCollapse: true,
                route:[],
                basePath: {
                    type: String,
                    default: ''
                }
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            resolvePath(baseRoute,baseBase){
                debugger
                return  baseRoute+"/"+baseBase
            },
            onlyOneChild(itemX){
                debugger
                return itemX.children.length==1 ? true: false;
            }

        },
        mounted() {
            debugger
            console.log(this.$route.path)
            let aa = JSON.parse(this.$store.getters.login);
            this.route = aa;
        }
    }
</script>
