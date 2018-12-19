//引入
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//状态
export const store = new Vuex.Store({
		state: {
			childName: '网络组织',
			str:'',
			isEdit:true,
		},
	mutations: {
		save_childName(state, Payload) {
			state.childName = Payload;
		},
		commitID(state,Payload){
				state.str = Payload;
		},
		isEdit(state,Payload){
			state.isEdit = Payload;
		}
	}
})