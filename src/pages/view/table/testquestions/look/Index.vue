<template>   
    <div class="look" index="1-3">
           <p >查看试题</p>
       <div class='look-title'>
           <ul>
               <li v-for="(item,key) in testname" :key="key">{{item}}</li>
           </ul>
       </div>
           <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="考试类型">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="题目类型">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="出题人">
                    <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
           </el-form>
        <div class="look-main">
            <div class="item">
                <p>机器人归位</p>
                 <div class='item-title'>
                     <ul>
                         <li>代码补全</li>
                         <li>javaScript上</li>
                         <li class="item-test">周考一</li>
                     </ul>
                     <router-link to="/bianji" >编辑</router-link>
                 </div>
                 <div class='item-name'>dsad发布</div>
            </div>
            
        </div>   
    </div>
</template>
<script>

export default {
    data(){
        return {
          formInline: {
          user: '',
          region: ''
        },
        testname:[
            'All','javaScript上','javaScript下','模块开发','移动端开发','node基础','组件化开发(vue)','渐进式开发(react)','项目实战','javaScript高级','node高级',
        ]    
        }
    },
    methods: {
        onSubmit(){},
        show(){
            this.isshow !=this.isshow
        }
    }
}
</script>
<style lang = "scss" scoped>
 
  .look{
         width: 1034x;
         height:700px;
         margin: 10px 0 0 40px ;
         position: relative;
     .look-title{
          margin-top: 30px;
          width: 1050px;
          height:100px;
          background:#fff;
          border-radius: 15px;
          ul{ 
              padding-top: 10px;
            li{
            float: left;
            margin-right: 15px;
            font-size: 14px;
            color: gray;
            }
          }
      }
     .demo-form-inline{
         margin-top: 5px;
          .el-select{
              width: 150px;
              }
     }
     .look-main{
        margin-top: 10px;
        background: #fff;
        width: 1050px;
        height: 100%;
        border-radius: 15px; ;
        .item{
            width: 100%;
            height: 150px;
            border-bottom:1px solid gray ;
             p{padding: 20px;}
             .item-title{
                 display: flex;
                 justify-content: space-between;
                 padding-right: 15px;
                 ul{
                     display: flex;
                    li{
                        border: 1px solid gray;
                        margin-left: 20px;
                      }
                
                   }
             }  
              .item-name{
                   margin: 20px;
                  }       
     }
  }
  .cd{
      position: absolute;
      top:-10px;
      left: -42px;
      width: 100%;
      height: 100%;
      border: 1px solid red;
      background: #fff;
  }
  }
</style>