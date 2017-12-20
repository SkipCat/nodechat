'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import store from './store.js'

import App from './App.vue'

Vue.use(VueRouter)

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
