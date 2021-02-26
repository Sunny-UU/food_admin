<template>
    <div class="global_size">
        <div class="nav">
            <img src="../../assets/logo.png" style="height: 100%;width: 15%;vertical-align: middle;float: left;margin-left: 15%">
            <span>您好，欢迎登陆！</span>
        </div>
        <div class="login_main">
            <el-tabs v-model="activeName" stretch @tab-click="login_handleClick" v-show="show">
                <div>
                    <h2>这是个系统</h2>
                </div>
                <div class="form_size">
                    <el-form ref="form" :model="userInfo" :rules="fieldRules" label-width="80px" class="demo-ruleForm">
                        <el-form-item prop="loginname">
                            <el-input v-model="userInfo.loginname" placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input type="password" v-model="userInfo.password" placeholder="密码" show-password></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox style="width: 50%;color: rgb(32,138,135)" v-model="checked" checked>记住密码</el-checkbox>
                            <el-link type="primary" :underline="false" style="width: 50%" target="_blank" @click="change">找回密码</el-link>
                        </el-form-item>
                        <el-form-item style="width:100%;">
                            <el-button class="button" style="width:90%;" @click="login" :loading="loading">登 录</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-tabs>
            <el-tabs stretch v-show="!show">
                <div>
                    <h2>中银</h2>
                </div>
                <div class="form_size">
                    <el-form ref="form1" :model="info" :rules="fieldRules1" label-width="80px" class="demo-ruleForm">
                        <el-form-item style="text-align: left">
                            <h3>找回密码</h3>
                        </el-form-item>
                        <el-form-item prop="username">
                            <el-input v-model="info.username" placeholder="请输入用户名"></el-input>
                        </el-form-item>
                        <el-form-item prop="email">
                            <el-input v-model="info.email" placeholder="请输入邮箱"></el-input>
                        </el-form-item>
                        <el-form-item >
                            <el-button type="primary" class="button" style="width:100%;" @click="findPassword" :loading="loading1">找回密码</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div>
                    <el-link type="primary" :underline="false" style="width: 50%" target="_blank" @click="change">返回登录</el-link>
                </div>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    export default {
        name: "login",
        data () {
            return {
                show: true,
                //登录用户名、密码
                userInfo: {
                    loginname: 'admin',
                    password: '',
                    role: 'first'
                },
                //登录验证规则
                fieldRules: {
                    loginname: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'}
                    ]
                },
                //选项卡默认切换值
                activeName: 'first',
                //加载
                loading: false,
                loading1: false,
                //记住密码按钮
                checked: true,
                // 找回密码表单
                info: {
                    username: '',
                    email: ''
                },
                //找回密码校验规则
                fieldRules1: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    email: [
                        {required: true, message: '请输入邮箱', trigger: 'blur'}
                    ]
                },

            }
        },
        methods: {
            //调登录api接口
            login () {
                this.$refs['form'].validate(valid => {
                    if (valid) {
                        this.loading = true
                        let _this = this
                        debugger
                        // const  path = _this.$route.query.redirect || '/about'
                        this.loading = false
                        _this.$router.push("/home")
                        // this.$store.dispatch('login', this.userInfo)
                        //     .then(() => {
                        //         debugger
                        //         this.loading = false
                        //         const  path = _this.$route.query.redirect || '/about'
                        //         _this.$router.replace(path)
                        //     })
                        //     .catch((erro) => {
                        //         _this.$message.error(erro)
                        //         this.loading = false
                        //     })
                    }
                });
            },
            //找回密码
            findPassword () {
                this.$refs['form1'].validate(valid => {
                    if (valid) {
                        debugger


                    }
                });
            },
            //选项卡切换
            login_handleClick(tab) {
                debugger
                this.userInfo.role = tab.name;
            },
            change () {
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
    .global_size{
        height: 100%;
        width: 100%;
        position:fixed;
        top: 0;
        left: 0;
        background: url("../../assets/anjia.png");
        min-width: 1000px;
        zoom: 1;
        /*background-color: #fff;*/
        background-size: 100% 100%;
        /*-webkit-background-size: cover;*/
        /*-o-background-size: cover;*/
        /*background-position: center 0;*/
    }
    .nav{
        position: absolute;
        /*top: 50%;*/
        /*left: 30%;*/
        background-color: #ffffff;
        width: 100%;
        height: 7%;
        opacity: 0.9;
    }
    .nav span{
        position: absolute;
        font-size: 18px;
        color: #757575;
        font-weight: bolder;
        top: 30%;
    }
    .login_main{
        height: 500px;
        width: 450px;
        position: absolute;
        right: 6%;
        top: 20%;
        box-sizing: border-box;
        padding: 50px 80px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
        background-color: white;
        opacity: 0.97;
    }
    .form_size{
        margin: 50px 30px 0px -50px;
    }
    .button{
        color: #fff;
        background-color: rgb(32,138,135);
    }
    .button:active {
        background-color: #ffffff;
        color: rgb(32,138,135);
        border-color: rgb(32,138,135);
    }
    /*.button:disabled {*/
    /*    background-color: #ffffff;*/
    /*    color: rgb(32,138,135);*/
    /*    !*border-color: rgb(32,138,135);*!*/
    /*}*/
    .el-link.el-link--primary {
        color: rgb(32,138,135);
    }
</style>

