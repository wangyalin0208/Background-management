<template>
  <div class="look" index="1-3">
    <p>查看试题</p>
    <div class="look-title">
      <ul>
        <li v-for="(item) in testname" :key="item.subject_id" >{{item.subject_text}}</li>
      </ul>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="考试类型">
        <el-select v-model="formInline.region" placeholder="请选择">
          <el-option  v-for="(item) in testtype"   :key='item.exam_id' :value="item.exam_name" :label="item.exam_name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="题目类型">
        <el-select v-model="formInline.region1" placeholder="请选择">
          <el-option v-for="(item) in timutype"  :key='item.questions_type_id' :label="item.questions_type_text" :value="item.questions_type_text"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出题人">
        <el-select v-model="formInline.region2" placeholder="请选择">
          <el-option :key="item.questions_type_id"  :label="item.questions_type_text" :value="item.user_name"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <div class="look-main">
      <div class="item" v-for="(item,index) in tabledata" :key='index'>
        <p>{{item.title}}</p>
        <div class="item-title">
          <ul>
            <li>{{item.questions_type_text}}</li>
            <li>{{item.subject_text}}</li>
            <li class="item-test">{{item.exam_name}}</li>
          </ul>
          <router-link to="/bianji">编辑</router-link>
        </div>
        <div class="item-name">{{item.user_name}}发布</div>
      </div>
    </div>
  </div>
</template>
<script>
import {getKeCheng,getTest1, getTiMu,getQuestionsCondtion, getQuestionsNew} from "@/api";
export default {
  data() {
    return {
      tabledata:[],
      formInline: {
        region: "",
        region1:'',
        region2:'',
      },
      testname:[],
      testtype:
        {
           exam_name:'',
           exam_id:''
        },
      timutype:{
        questions_type_id:'',
        questions_type_text:'',
        questions_type_sort:'',
      }
    };
  },
  created() {
    getKeCheng().then(res=>{
        if(res.data.code===1){
          this.testname = res.data.data  
        }
      }),
    getTest1().then(res=>{
        if(res.data.code===1){
          this.testtype = res.data.data
        }
      }),  
    getTiMu().then(res=>{
        if(res.data.code===1){
          this. timutype = res.data.data
        }
      }),
    getQuestionsNew().then(res =>{
      this.tabledata = res.data.data
      console.log(this.tabledata)
    })
  },
  methods: {
    onSubmit() {
      getQuestionsCondtion().then((res=>{
       console.log(res)
        }))
     
    },
    show() {
      this.isshow != this.isshow;
    },
  },
  
};
</script>
<style lang = "scss" scoped>
.look {
  width: 1034x;
  height: 100%;
  margin: 10px 0 0 40px;
  position: relative;
  .look-title {
    margin-top: 30px;
    width: 1050px;
    height: 100px;
    background: #fff;
    border-radius: 15px;
    ul {
      padding-top: 10px;
      li {
        float: left;
        margin-right: 15px;
        font-size: 14px;
        color: gray;
      }
    }
  }
  .demo-form-inline {
    margin-top: 5px;
    .el-select {
      width: 150px;
    }
  }
  .look-main {
    margin-top: 10px;
    background: #fff;
    width: 1050px;
    height: 100%;
    border-radius: 15px;
    .item {
      width: 100%;
      height: 150px;
      border-bottom: 1px solid gray;
      p {
        padding: 20px;
      }
      .item-title {
        display: flex;
        justify-content: space-between;
        padding-right: 15px;
        ul {
          display: flex;
          li {
            border: 1px solid gray;
            margin-left: 20px;
          }
        }
      }
      .item-name {
        margin: 20px;
      }
    }
  }
  .cd {
    position: absolute;
    top: -10px;
    left: -42px;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background: #fff;
  }
}
</style>