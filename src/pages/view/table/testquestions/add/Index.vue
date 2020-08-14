<template>   
    <div class="add" index="1-1">
        <h3>添加试题</h3>
           <div class = 'add-main'>
                <p>题目信息</p>
                <p>题干</p>
                <p><input type="text" placeholder="请输入题目标题，不超过20个字"></p>       
                <p>题目主题</p>
                <div class = "add-bottom">
                    <div class="title">
                       <el-row :gutter="20">
                            <el-col :span="16">
                                <div class="grid-content bg-purple">
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>|
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>|
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>|
                                     <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>|
                                     <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                </div>
                            </el-col>
                            <el-col :span="8">
                                <div class="grid-content bg-purple">
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>
                                    <span class="el-icon-edit"></span>|
                                    <span class="el-icon-tickets"></span>
                                     <span class="el-icon-tickets"></span>
                                </div>
                            </el-col>
                       </el-row>
                    </div>
                    <div class = 'text'>
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 15, maxRows: 20}"
                            placeholder="开始编辑..."
                            v-model="textarea2">
                         </el-input>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
             textarea2: '' 
        }
    },
    methods: {
        
    }
}
</script>
<style lang = "scss" scoped>
 .add{
     margin: 20px 50px;
     .add-main{
         width: 950px;
         height: 620px;
         margin: 15px 30px ;
         background:#fff;
        p{
            padding: 20px 40px ;
        }
        p{
            padding-left:20px;
          input{
             width: 900px;
             height: 35px;
             border: 1px solid #ccc;
             outline: none;
          }
        }
     }
     .title{
          .el-row {
                margin-bottom: 20px;
                &:last-child {
                margin-bottom: 0;
                }
            }
      }
     .add-bottom{
         width: 900px;
         margin: 20px;
         border: 1px solid #ccc;
         .title{
             width:900px;
             height: 35px;
             border-bottom: 1px solid #ccc;
         }
         .text{
              width: 900px;
              height: 225px;
        
         }
     }  
 }

</style>