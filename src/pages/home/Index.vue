<template>
  <div class="bg">
    <div class="login">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="account">
              <el-input  v-model="ruleForm.account" autocomplete="off"           
              ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
                <el-checkbox label="记住密码" name="type" ></el-checkbox>
                <el-button type="text" class="btn" @click="forgotpassword">忘记密码</el-button>
          </el-form-item> 
          <el-form-item>
            <el-button type="primary" @click="login">安全登录</el-button>
          </el-form-item>
      </el-form>
   

    </div>
  </div>
</template>
<script>
import { login, getUserInfo } from '@/api'
export default {
  data() {
    return {
      ruleForm:{
        account:'',
        pass:'',
      },
      rules: {
        account:[
          { required: true, message: '账号不能为空', trigger: 'blur'  },
        ],
        pass:[
          { required: true, message: '密码不能为空', trigger: 'blur'  },
        ],
      },
    }
  },
  created() {},
  methods:{
    rememberpassword(){
      console.log(1)
    },
    forgotpassword(){
       this.ruleForm.account=''
       this.ruleForm.pass=''
    },
    login(){
      const user_name=this.ruleForm.account
      const user_pwd=this.ruleForm.pass
      login({user_name,user_pwd })
      .then(res=>{
         const { code, token }=res.data
        if(code===1){
          window.localStorage.setItem('token',token)
           this.$router.push({path:'/view'})
          this.getInfo()
        }
      })
    },
    getInfo(){
      getUserInfo()
      .then(res=>{
        const { code, data }=res.data
        localStorage.setItem('user_id',data.user_id)
      })
    }
  },
}
</script>
<style lang = "scss" scoped>
p{
  width: 100px;
  height: 1px;
}
.bg {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/timg.gif");
  .login {
    position: absolute;
    top: 50px;
    right: 10px;
    width: 400px;
    height: 350px;
    background: white;
    border: 1px solid black;
    .el-form{
      margin: 70px 50px;
      margin-left: -20px;
      .el-button{
        width: 150px;
        margin-left: 50px;
      }
    }
    .btn{
      position: absolute;
      right: -25px;
      color: gray
    }
  }
}
</style>