<template>
  <div>
    <img class="headerimg" src="https://shdcapp.wondersgroup.com/yilian-cloud-v2.0-wechat/public/images/index/banner-new.png" alt="">
    <ul>
      <li class="mineitem" v-for="item in mineArray" :key="item.label" @click="itemClick(item)">
        <span class="minetitle">{{item.label}}</span>
        <i class="cubeic-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{ 
      mineArray:[
        {label:'商品收藏'},
        {label:'我的足迹'},
        {label:'店铺收藏'},
        {label:'我的订单'},
        {label:'退出',type:'exit'},
      ]
    }
  },
  methods:{
    itemClick(item){
      if(item.type==='exit'){
        this.$store.commit('setToken','')
        localStorage.removeItem('token')
        localStorage.removeItem('cartArray')
        this.$router.push({path:'/login'})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .headerimg
    height 150px
    width 100%
  .mineitem
    font-size 14px
    text-align left 
    height 50px
    line-height 50px
    padding-left 5%
    border-bottom 1px solid #eee
    .minetitle
      display inline-block
      width 90%
</style>
