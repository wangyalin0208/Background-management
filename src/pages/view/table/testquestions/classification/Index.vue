<template>
  <div class="classification">
    <div class="classification-title">
      <p>试卷分类</p>
      <el-button type="primary" plain @click="isshow=!isshow">+ 添加类型</el-button>
    </div>
    <div class="classification-main">
      <el-table :data="tableData">
        <el-table-column prop="questions_type_sort" label="序号"></el-table-column>
        <el-table-column prop="questions_type_id" label="类型ID"></el-table-column>
        <el-table-column prop="questions_type_text" label="类型名称"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
              <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="addtype1" v-show="isshow">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="序号">
          <el-input v-model="form.sort"></el-input>
        </el-form-item>
        <el-form-item label="类型名称">
          <el-input v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button class="btn-right" @click="quxiao">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { getTiMu, getInserQuestionsType, getDelQuestionsType } from "@/api";
export default {
  data() {
    return {
      tableData:[],
      isshow: false,
      form: {
        sort: "",
        text: "",
        id: "",
      },
    };
  },

  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      getTiMu().then((res) => {
        if (res.data.code === 1) {
          this.tableData = res.data.data;
        }
      });
    },
    onSubmit() {
      const data = { ...this.form };
      getInserQuestionsType(data).then((res) => {
        if (res.data.code === 1) {
          this.getlist();
        }
      });
      this.isshow = false;
    },
    quxiao() {
      this.isshow = false;
    },
    handleDelete(index, row) {
      const id =  this.tableData[index].questions_type_id
            getDelQuestionsType({id}).then((res) => { 
         if (res.data.code === 1) {
             this.getlist();
         }
      })
    },
  },
};
</script>
<style lang = "scss" scoped>
.classification {
  position: relative;
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
  .addtype1 {
    position: absolute;
    top: 150px;
    left: 200px;
    width: 800px;
    height: 300px;
    background: burlywood;
    .el-form-item {
      margin: 30px;
    }
    .btn-right {
      margin-left: 430px;
    }
  }
}
</style>