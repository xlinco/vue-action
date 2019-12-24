<template>
  <div>
    <div class="goods" v-for="(item,index) in carArr" :key="index">
      {{item.title}}
      <div class="goodsright">
        <i class="cubeic-remove" @click="removeCart(index)"></i>
        <span>{{item.cartCount}}</span>
        <i class="cubeic-add" @click="addCart(index)"></i>
      </div>
    </div>
    <cube-button style="margin:10px 0">下单</cube-button>
    <cube-button @click="clearCart">清空购物车</cube-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data(){
    return {
      // carArr:[
        
      // ]
    }
  },
  computed:{
    // 快速拿到vuex仓库里的数据（vuex封装好的，可直接使用）
    ...mapState({
      carArr:state=>state.cartArray
    })
  },
  methods:{
    // 减少商品
    removeCart(index){
      this.$store.commit('cartReduce',index)
    },
    // 增加商品
    addCart(index){
      this.$store.commit('cartAdd',index)
    },
    // 清空购物车
    clearCart(){
      this.$store.commit('clearCart')
    },
  }
}
</script>

<style lang="stylus" scoped>
  .goods
    padding 10px 15px
    font-size 18px
    text-align left
    border-bottom 1px solid #eee

    .goodsright
      float right 
      font-size 18px
</style>