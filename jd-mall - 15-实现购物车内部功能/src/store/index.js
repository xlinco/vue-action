import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    cartArray:[], //存储购物车商品的数组
  },
  // mutations是同步的方法，里面事件的第一个参数为仓库state
  mutations: {
    // 设置vuex的token
    setToken(state,token){
      state.token=token
    },
    // 添加商品到购物车
    toCart(state,item){
      const goods = state.cartArray.find(v=>v.title==item.label)
      if (goods) {
        goods.cartCount += 1
      } else {
        state.cartArray.push({
          title: item.label,
          cartCount: 1
        })
      }
    },
    // 购物车商品数量+1
    cartAdd(state,index){
      state.cartArray[index].cartCount++
    },
    // 购物车商品数量-1
    cartReduce(state, index) {
      if (state.cartArray[index].cartCount>1){
        state.cartArray[index].cartCount--
      }else{
        if (window.confirm(`确定删除${state.cartArray[index].title}吗？`)){
          state.cartArray.splice(index,1)
        }
      }
    },
    // 清空购物车
    clearCart(state){
      state.cartArray=[]
    }
  },
  // actions是异步的方法，但最后还是要进入mutations
  actions: {
  },
  modules: {
  },
  // 手动添加,相当于vue中的计算属性computed
  getters:{
    countSum:state=>{
      let num = 0
      state.cartArray.forEach(v=>{
        num+=v.cartCount
      })
      return num
    }
  }
})
