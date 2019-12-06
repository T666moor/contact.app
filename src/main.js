import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Contact from './components/Contact.vue'
import Add from './components/Add.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

const router = new VueRouter ({
	routes: [
		{ path: '/', component: Contact },
		{ path: '/add', component: Add }
	],
	mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
