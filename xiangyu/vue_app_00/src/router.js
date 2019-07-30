//用来引入路由
import Vue from 'vue'
import Router from 'vue-router'
//自定义组件
import Login from "./components/xy/login.vue"
import mypage from "./components/xy/mypage.vue"
import index_title from "./components/xy/index_title.vue"
import city from "./components/xy/city.vue"
import lookUp from "./components/xy/lookUp.vue"
import rent_sharing from "./components/xy/rent_sharing_list.vue"
import Home from "./components/Home.vue"
import Fujin from "./components/xy/Fujin.vue"
import MessageLists from "./components/xy/MessageLists.vue"
import details from "./components/xy/details.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/login',component:Login},
    {path:'/mypage',component:mypage},
    {path:'/index_title',component:index_title},
    {path:'/city',component:city},
    {path:'/lookup',component:lookUp},
    {path:'/rent_sharing',component:rent_sharing},
    {path:'/Home',component:Home},
    {path:'/Fujin',component:Fujin},
    {path:'/MessageLists',component:MessageLists},
    {path:'/details',component:details},
  ]
})

