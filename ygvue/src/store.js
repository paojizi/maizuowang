import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//全局状态对象
const state = {
	selected:'1'
}

//触发状态
const mutations = {
	Filmchange1(){
		state.selected = '2'
	},
	Filmchange2(){
		state.selected = '1'
	}
}

export default new Vuex.Store({
	'state':state,
	'mutations':mutations
})
