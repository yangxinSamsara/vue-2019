import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './utils/filter' //引入全局的过滤器
// import './utils/directive'
// 引入全局指令
import globalDirective from './utils/directive'
Vue.use(globalDirective)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')