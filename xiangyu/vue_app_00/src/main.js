import Vue from 'vue'
import App from './App.vue'
import router from './router'
//以上的三行不要动保存在原来位置
//原因：引入有序
//第三方的组件库在下面引入
//1.完整引入mint-ui
import MintUI from 'mint-ui'
//2.单独引入mint-ui样式
import'mint-ui/lib/style.css'
//3.将mint-ui注册vue
Vue.use(MintUI);
import { Button } from 'vant';
Vue.use(Button);

//4.引入图标字体的样式文件
import'./font/iconfont.css'
//5.引入axios.js文件
import axios from "./axios"
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
