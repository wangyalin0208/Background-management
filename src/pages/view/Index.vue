<template>
  <!--  -->
  <div class="warp">
    <div class="logo">
      <img src="../../assets/logo.jpg" alt />
    </div>
    <div class="main">
      <div class="main-left">
        <el-col :span="14">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="blue"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>试题管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">
                  <router-link to="/add" tag="li">添加试题</router-link>
                </el-menu-item>
                <el-menu-item index="1-2">
                  <router-link to="/classification" tag="li">试题分类</router-link>
                </el-menu-item>
                <el-menu-item index="1-3">
                  <router-link to="/look" tag="li">查看试题</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <router-link to="/adduser" tag="li">添加用户</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/usershow" tag="li">用户展示</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>考试管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">
                  <router-link to="/addtest" tag="li">添加考试</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/testlist" tag="li">考试列表</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">
                  <router-link to="/classgl" tag="li">班级管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                  <router-link to="/room" tag="li">教室管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                  <router-link to="/student" tag="li">学生管理</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>阅卷管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">
                  <router-link to tag="li">添加试题</router-link>
                </el-menu-item>
                <el-menu-item index="5-2">
                  <router-link to tag="li">添加试题</router-link>
                </el-menu-item>
                <el-menu-item index="5-3">
                  <router-link to tag="li">添加试题</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </div>
      <div class="main-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang='scss' scoped>
.warp {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .logo {
    width: 100%;
    height: 60px;
    padding: 20px;
  }
  .main {
    flex: 1;
    display: flex;
    .el-menu-vertical-demo {
      width: 225px;
      height: 1470px;
    }
    .el-menu-item {
      margin-left: 20px;
    }
    .main-right {
      flex: 1;
      background: #ccc;
    }
  }
}
</style>