import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// load global style
import './style/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
