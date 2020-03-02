import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
