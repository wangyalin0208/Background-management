import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import View from '@/pages/view'


import Add from '@/pages/view/table/testquestions/add'
import Classification from '@/pages/view/table/testquestions/classification'
import Look from '@/pages/view/table/testquestions/look'

import Classgl from '@/pages/view/table/class/classgl'
import Room from '@/pages/view/table/class/room'
import Student from '@/pages/view/table/class/student'

import Addtest  from '@/pages/view/table/test/addtest'
import Testlist  from '@/pages/view/table/test/testlist'

import Adduser  from '@/pages/view/table/user/adduser'
import Usershow  from '@/pages/view/table/user/usershow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/view',
      component: View,
      children: [
            {
              path: '/add',
              component: Add,
            },
            {
              path: '/classification',
              component: Classification,
            },
            {
              path: '/look',
              component: Look,
            },
            {
              path: '/classgl',
              component: Classgl,
            },
            {
              path: '/room',
              component: Room,
            },
            {
              path: '/student',
              component: Student,
            },
            {
              path: '/addtest',
              component: Addtest,
            },
            {
              path: '/testlist',
              component: Testlist,
            },
            {
              path: '/adduser',
              component: Adduser,
            },
            {
              path: '/usershow',
              component: Usershow,
            },
                ]
    },
          ]
      
})
