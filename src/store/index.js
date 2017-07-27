import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)

const state = {
	login:false,
	user_info:null
}
const store = new Vuex.Store({
	state,
	actions,
	mutations
})
export default store