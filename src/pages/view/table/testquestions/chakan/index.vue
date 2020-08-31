<template>   
    <div class="add-warp" index="1-1">
        <h3>查看试题</h3>
        <div class="add">
            <div class = 'add-top'>
                <p>题目信息</p>
                <p>题干</p>
                <p><input type="text" ></p>       
                <p>题目主题</p>
                <textarea ></textarea>            
            </div>
            <div class='add-bottom' >
                <el-select v-model="value" placeholder="周考一">
                    <el-option></el-option>
                </el-select>
                <p>选择课程类型</p>
                <el-select v-model="value" placeholder="javaScript上">
                    <el-option> </el-option>
                </el-select>
                <p>选择题目类型</p>
                <el-select v-model="value" placeholder="代码补全">
                    <el-option></el-option>
                </el-select>
                <p>答案信息</p>
              <textarea></textarea>
                <el-button type="primary" @click="getQuestions">提交</el-button>
                  
            </div>  
        </div>
    </div>
</template>
<script>
// import WangEditor from '../../../../../../components/ue'
import {  getQuestionsNew } from '@/api'
export default {  
    data(){
        return {
             tabledata:[],
             value:[],
             options:'',
        }
    },
    methods: {
        getQuestions(){
             getQuestionsNew().then((res=>{
                this.tabledata = res.data.data
                 console.log(this.tabledata)
            }))

        }
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