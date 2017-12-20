'use strict'

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: {
			pseudo: null
		}
	},
	mutations: {
		setPseudo(store, newPseudo) {
			store.user.pseudo = newPseudo
		}
	}
})

export default store
