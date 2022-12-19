import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入移动端适配文件
import './assets/flexible/flexible.js'
// 引入字体图标
import './assets/fonts/iconfont.css'
// 引入vant组件
import { Button, Icon, Form, Field, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem } from 'vant'
// 使用组件
[Button, Icon, Form, Field, Tabbar, TabbarItem, Swipe, SwipeItem, Grid, GridItem].forEach(item => { Vue.use(item) })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
