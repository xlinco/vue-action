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
          <p>{{item.label}}</p>
        </li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
    }
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
</style>