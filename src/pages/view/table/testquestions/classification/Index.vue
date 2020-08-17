<template>
  <div class="classification">
    <div class="classification-title">
      <p>试卷分类</p>
      <el-button type="primary" plain>+ 添加类型</el-button>
    </div>
    <div class="classification-main">
      <el-table :data="tableData" >
        <el-table-column prop="id" label="类型ID" ></el-table-column>
        <el-table-column prop="name" label="类型名称"></el-table-column>  
        <el-table-column prop="" label="地址"></el-table-column>  
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        tableData: [{
          id:'454545-dsd',
          name:'简单题'
          },
          {
          id:'dsds545-dsd',
          name:'代码阅读题'
          },
          {
           id:'dhsf-dsd',
           name:'代码补全'
          },
          {
           id:'zcdf-dsd4',
           name:'修改bug'  
          },
          {
           id:'2d3f-ds4d',
           name:'手写代码'   
          },
          {
           id:'8asf-dsd',
           name:'4545'
          }
          ]
       
    };
  },
  methods: {},
};
</script>
<style lang = "scss" scoped>
.classification {
  width: 1124px;
  height: 100%;
  overflow: hidden;
  .classification-title {
    margin: 15px;
    p {
      padding-left: 18px;
    }
    .el-button {
      margin-top: 10px;
    }
  }
  .classification-main {
    margin-left: 15px;
    width: 100%;
    background: #fff;
  }
}
</style>