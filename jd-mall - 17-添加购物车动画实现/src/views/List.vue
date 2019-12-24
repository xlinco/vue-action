<template>
  <div class="panelsbox">
    <cube-scroll class="leftpanels">
      <ul>
        <li v-for="(list,index) in tabslabel" :key="index" :class="list.active?'active':''" @click="selectlist(index)">
          {{list.label}}
        </li>
      </ul>
    </cube-scroll>

    <cube-scroll class="rightpanels">
      <ul>
        <li v-for="(item,index1) in tags" :key="index1">
          <img :src="item.image" alt="">
          <p>{{item.label}}<i class="cubeic-add" @click="addtToCart($event,item)"></i></p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ball:{
        show:false,
        el:null
      },
      tabslabel:[
        {
          label:'热门推荐',
          active:true
        },
        {
          label:'手机数码',
          active:false
        },
        {
          label:'家用电器',
          active:false
        },
        {
          label:'电脑办公',
          active:false
        },
        {
          label:'男装',
          active:false
        },
        {
          label:'女装',
          active:false
        },
        {
          label:'酒水饮料',
          active:false
        },
        {
          label:'食品生鲜',
          active:false
        },
        {
          label:'家具家装',
          active:false
        },
        {
          label:'医药保健',
          active:false
        },
        {
          label:'宠物生活',
          active:false
        },
        {
          label:'礼品鲜花',
          active:false
        },
        {
          label:'生活旅行',
          active:false
        },
        {
          label:'二手商品',
          active:false
        },
        {
          label:'特产馆',
          active:false
        },
        {
          label:'京东金融',
          active:false
        },
        {
          label:'国际名牌',
          active:false
        },
        {
          label:'拍卖',
          active:false
        },
        {
          label:'房产',
          active:false
        }
      ],
      tags:[

      ]
    }
  },
  methods:{
    // 获取分类
    async getClassfiy(index){
      const result = await this.$http.get('/api/classify',{
        params:{
          type:index
        }
      })
      
      this.tags=result.data
    },
    // 点击左侧分类
    selectlist(index){
      console.log(index)
      this.tabslabel.forEach((val,i)=>{
        if(index===i){
          val.active=true
        }else{
          val.active=false
        }
      })
      this.getClassfiy(index)
    },
    // 添加商品到购物车  $evevt,item
    addtToCart(e,item){
      this.$store.commit('toCart',item);
      // 让小球显示出来
      this.ball.show=true
      // 获取点击元素
      this.ball.el=e.target
    },
    // 动画执行之前，让小球移动到点击的位置
    beforeEnter(el){
      // 获取小球点击的位置
      const dom = this.ball.el
      console.log(dom,8888)
      // 获取点击的dom的位置
      const rect=dom.getBoundingClientRect()

      console.log(rect)
      const x=rect.left-window.innerWidth*0.7
      const y=-(window.innerHeight-rect.top)
      console.log(x,y)
      el.style.display='block'
      el.style.transform=`translate3d(0, ${y}px, 0)`
      const inner=el.querySelector('.inner')
      inner.style.transform=`translate3d(${x}px, 0, 0)`
    },
    enter(el,done){
      // 触发动画重绘
      // document.body.offsetHeight
      // 小球移动回到原点（即购物车的位置）
      el.style.transform=`translate3d(0, 0, 0)`
      const inner=el.querySelector('.inner')
      inner.style.transform=`translate3d(0, 0, 0)`

      // 过渡完成后执行的事件
      el.addEventListener('transitionend',done)
    },
    afterEnter(el){
      // 结束后隐藏小球
      this.ball.show=false
      el.style.display='none'
    },
  },
  created(){
    // 获取默认的分类数据
    this.getClassfiy(0);
  },
  mounted(){
    // 设置滚动盒子高度
    const leftPanels = document.querySelector('.leftpanels');
    const rightPanels = document.querySelector('.rightpanels');
    const bodyHeight = document.documentElement.clientHeight;
    leftPanels.style.height = bodyHeight-57+'px';
    rightPanels.style.height = bodyHeight-57+'px';
  }
}
</script>

<style lang="stylus" scoped>
  .panelsbox
    display flex
    .leftpanels
      width 30%
      li
        height 50px
        line-height 50px
        border-bottom 1px solid #fff
        color #333
        background #f8f8f8
        font-size  14px
      .active
        background #fff
        color #e93b3d
    .rightpanels
      width 70%
      ul
        display flex
        flex-wrap  wrap
        li
          width 50%
          justify-content center
          align-items center
          font-size 15px
          img 
            width 80px
            height  80px
    .cubeic-add
      font-size 18px  
    .ball-wrap
      .ball
        position fixed
        left 70%
        bottom 10px
        z-index 102     
        color #ff0000
        transition all 1s cubic-bezier(0.49,-0.29,0.75,0.41)
        .inner
          width 16px
          height 16px
          transition all 1s linear
</style>