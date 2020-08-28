<template>
  <div class="add-warp" index="1-1">
    <h3>添加试题</h3>
    <div class="add">
      <div class="add-top">
        <p>题目信息</p>
        <p>题干</p>
        <p>
          <input type="text" v-model="testlist.questions_stem" placeholder="请输入题目标题，不超过20个字" />
        </p>
        <p>题目主题</p>
        <textarea v-model="testlist.title" id="texta" cols="30" rows="10"></textarea> 
       
      </div>
      <div class="add-bottom">
        <p>选择考试类型</p>
        <el-select v-model="testlist.exam_id" placeholder="周考一">
          <el-option
            v-for="item in testtype"
            :key="item.exam_id"
            :label="item.exam_name"
            :value="item.exam_id"
          ></el-option>
        </el-select>
        <p>选择课程类型</p>
        <el-select  v-model="testlist.subject_id" placeholder="javaScript上">
          <el-option
            v-for="item in options"
            :key="item.subject_id"
            :label="item.subject_text"
            :value="item.subject_id"
          ></el-option>
        </el-select>
        <p>选择题目类型</p>
        <el-select v-model="testlist.questions_type_id" placeholder="代码补全">
          <el-option
            v-for="item in options1"
            :key="item.questions_type_id"
            :label="item.questions_type_text"
            :value="item.questions_type_id"
          ></el-option>
        </el-select>
        <p>答案信息</p>
          <textarea  v-model=" testlist.questions_answer" id="texta" cols="30" rows="10"></textarea> 
      </div>
        <el-button class="btn" type="primary" @click="getAddTest">提交</el-button>
    </div>
  </div>
</template>
<script>
 
import { getTest,getTest1,getKeCheng,getTiMu} from "@/api";
export default {
  data() {
    return {
      testtype: '',
      options: '',
      options1:'',
      testlist: {
        questions_stem: "",
        questions_type_id: "",
        subject_id: "",
        exam_id: "",
        user_id:'', 
        questions_answer: "",
        title: "",
      },
    };  
  },
    
  created(){
    getTest1().then(res=>{
        if(res.data.code===1){
          this.testtype= res.data.data  
        }
    }),
    getKeCheng().then(res=>{
      if(res.data.code===1){
        this.options= res.data.data
      }
    }),
    getTiMu().then(res=>{
       if(res.data.code===1){
         this.options1= res.data.data
        }
    })
  },    
          
  methods: {
    getAddTest() {
      const user_id = window.localStorage.getItem('user_id')
      const pamars = {
        questions_stem: this.testlist.questions_stem,
        questions_type_id: this.testlist.questions_type_id,
        subject_id: this.testlist.subject_id,
        exam_id: this.testlist.exam_id,
        user_id,
        questions_answer: this.testlist.questions_answer,
        title: this.testlist.title,
      };

      getTest( { ...pamars} )
        .then((res) => {
          if (res.data.code === 1) {        
            console.log(pamars);
          }
        });
     }
    },
  
};
</script>
<style lang = "scss" scoped>
.add-warp {
  width: 100%;
  height: 100%;
  padding: 20px 50px;
  overflow: hidden;
  .add {
    width: 950px;
    height: 100%;
    margin: 15px 30px;
    background: #fff;
    p {
      padding: 20px 40px;
    }
    input {
      width: 900px;
      height: 35px;
      border: 1px solid #ccc;
      margin-left: -20px;
      padding-left: 10px;
      outline: none;
    }
    .add-bottom {
      margin-top: 20px;
      width: 950px;
      height: 750px;

      .el-select,
      p {
        margin: 10px 20px;
      }
    }
    /* .btn{
        margin-top: 85px;
    } */
     #texta{
       width: 950px;
       outline: none;
       font-size: 20px;
       padding-left: 20px;
     }
  }
}
</style>