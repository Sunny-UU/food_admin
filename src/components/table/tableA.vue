<template>
    <div>
        <button @click="clickClick">点击按钮</button>
        {{this.name}}
        <a href="http://127.0.0.1:7001/index">这是链接借耳机</a>
    </div>
</template>
<script>
    import {commonUpload} from '../../api/new'
    export default {
        name: "tableA",
        data(){
            return{
                name:'',
            }
        },
        methods:{
            clickClick(){
                debugger
                commonUpload('').then(res=>{
                    debugger
                    console.log(res.data);
                    this.name = res.data
                }).catch((e)=>{
                    debugger
                    console.log(e)
                })
            }
        }
    }
</script>

<style scoped>

</style>
