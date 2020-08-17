<template>   
    <div class="add-warp" index="1-1">
        <h3>编辑试题</h3>
        <div class="add">
            <div class = 'add-top'>
                <p>题目信息</p>
                <p>题干</p>
                <p><input type="text" placeholder="请输入题目标题，不超过20个字"></p>       
                <p>题目主题</p>
                <wang-editor></wang-editor>              
            </div>
            <div class='add-bottom' >
                <el-select v-model="value" placeholder="周考一">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <p>选择课程类型</p>
                <el-select v-model="value" placeholder="javaScript上">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <p>选择题目类型</p>
                <el-select v-model="value" placeholder="代码补全">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
                <p>答案信息</p>
                <wang-editor></wang-editor> 
                <el-button type="primary">提交</el-button>
                  
            </div>  
        </div>
    </div>
</template>
<script>
import WangEditor from '../../../../../../components/ue'
export default {
      components:{
        WangEditor
    },
    data(){
        return {
             textarea2: '' ,
             value:[],
             options:'',
        }
    },
    methods: {
        
    },
 
}
</script>
<style lang = "scss" scoped>
.add-warp{
     width: 100%;
     height: 1470px;
     padding: 20px 50px;
     overflow: hidden;
    .add{
         width: 950px;
         height: 100%;
         margin: 15px 30px ;
         background:#fff;
         p{
            padding: 20px 40px ;
          }
         input{
            width: 900px;
            height: 35px;
            border: 1px solid #ccc;
            margin-left: -20px;
            padding-left: 10px;
            outline: none;
          }
       .add-bottom{
           margin-top: 20px;
            width: 950px;
            height:735px;
     
    .el-select,p{
         margin: 10px 20px;
     } 
     }  
 }
 }

</style>