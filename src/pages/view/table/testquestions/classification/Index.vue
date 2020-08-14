<template>   
    <div class='classification' index="1-2">
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
         
        
    </div>
</template>
<script>

export default {
    data(){
        return {
            
        }
    },
    methods: {
        
    }
}
</script>
<style lang = "scss" scoped>
   .look{
         width: 1034x;
         height:700px;
         margin: 0 0 0 90px ;
         background:#fff;
    .el-select,p{
         margin: 10px 20px;
     } 
     
  }

</style>