<template>
    <div class="components-container">
<!--        json_data: 需要导出的数据-->
<!--        json_fields: 自主选择要导出的字段，指定嵌套数据并将标签分配给键是标签的字段，值是JSON字段。-->
<!--        name:导出文件-->
<!--        cnpm install vue-json-excel  使用文件解析插件-->
        <download-excel
                class = "export-excel-wrapper"
                :data = "json_data"
                :fields = "json_fields"
                :name = "name">
            <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
            <el-button type="primary" size="small">导出EXCEL</el-button>
        </download-excel>

        <div>
            <tinymce v-model="content" :height="300" />
        </div>

    </div>
</template>
<!--解析excel  上传excel  视频上传显示  换主题-->

<script>
    import Tinymce from '@/components/Tinymce'

    export default {
        name: "tableB",
        components: { Tinymce },
        data() {
            return {
                content:``,

                name:"远程诊断报告导出.xls",
                json_fields: {
                    "头部-诊断名称": "name",    //常规字段
                    "头部-联系电话": "phone.mobile", //支持嵌套属性
                    "头部-损坏区域代码": {
                        field: "phone.landline",
                        //自定义回调函数
                        callback: value => {
                            return `损坏区域代码 - ${value}`;
                        }
                    }
                },
                json_data: [
                    {
                        name: "损坏的组件一",
                        city: "New York",
                        country: "United States",
                        birthdate: "1978-03-15",
                        phone: {
                            mobile: "1-541-754-3010",
                            landline: "(541) 754-3010"
                        }
                    },
                    {
                        name: "损坏的组件二",
                        city: "Athens",
                        country: "Greece",
                        birthdate: "1987-11-23",
                        phone: {
                            mobile: "+1 855 275 5071",
                            landline: "(2741) 2621-244"
                        }
                    }
                ],
                json_meta: [
                    [
                        {
                            " key ": " charset ",
                            " value ": " utf- 8 "
                        }
                    ]
                ]
            }
        }
    }
</script>

<style scoped>
    .editor-content{
        margin-top: 20px;
    }
</style>

