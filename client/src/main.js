import Vue from 'vue'
import App from './App.vue'

//Import VueRouter Library, and this app's routes
import VueRouter from 'vue-router'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import StateAPIService from '@/services/stateService'

Vue.use(VueRouter) //Use VueRouter

//Configure Bootstrap

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Add API service to Vue prototype
Vue.prototype.$stateService = StateAPIService

//Adds leaflet's CSS
import 'leaflet/dist/leaflet.css'

new Vue({
  render: h => h(App),
  router  /*include the routes*/
}).$mount('#app')
