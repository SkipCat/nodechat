'use strict'

import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import ChatPage from './components/ChatPage.vue'

const router = new VueRouter({
	routes: [
		{ name: 'LoginPage', path: '/login', component: LoginPage },
		{ name: 'ChatPage', path: '/chat', component: ChatPage }
	]
})

export default router
