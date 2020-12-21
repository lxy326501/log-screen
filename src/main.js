import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import dataV from '@jiaminghi/data-view'

// import 'echarts/map/js/world.js'
import './assets/css/style.css'

Vue.use(dataV)

// 将echarts保存为全局变量
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
