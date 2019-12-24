import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:''
  },
  // mutations是同步的方法，里面事件的第一个参数为仓库state
  mutations: {
    // 设置vuex的token
    setToken(state,token){
      state.token=token
    }
  },
  // actions是异步的方法，但最后还是要进入mutations
  actions: {
  },
  modules: {
  },
  // 手动添加,相当于vue中的计算属性
  getters:{

  }
})
