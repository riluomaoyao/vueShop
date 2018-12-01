<template>
  <div class="homeContainer">
    <div class="headerWrap">
      <div class="homeSearch">
        <a href="javascript:;" class="homeImg"></a>
        <div class="search">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="搜索商品，共19604款好物">
        </div>
        <div class="homeLogin">登录</div>
      </div>
      <div class="homeTab">
        <ul class="tabList">
          <li :class="{on:index===activeIndex}" v-for="(item,index) in data" :key="index" @click="active(index)">{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="yichu">
      <div class="contentWrap">
        <!--轮播图-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="banner.length>0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                <a href="javascript:">
                  <div class="food_container">
                    <img :src="item.picUrl">
                  </div>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--自营品牌-->
        <ul class="g-grow">
          <li>
            <i class="iconfont icon-gou"></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i class="iconfont icon-gou"></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i class="iconfont icon-gou"></i>
            <span>48小时快速退款</span>
          </li>
        </ul>
        <!--所有内容-->
        <div class="mainWrap">
          <div class="m-bossRecommendModule">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/3a1c2a948d28fd62de4b997d8bd006ec.png">
            </a>
          </div>
          <div class="m-sceneLightShoppingGuideModule" v-if="home.tagList">
            <div class="Thingsfirst" v-for="(item,index) in home.tagList.slice(0,4)"
                :style ="{backgroundImage:` url(${item.picUrl})`}"  >
              <a href="javascript:;" class="m-styleBanner" >
                <div class="title">{{item.name}}</div>
                <div class="desc">{{item.floorPrice}}元起</div>
                <div class="picList">
                  <!--<img :src="item.picUrl" class="pic">-->
                </div>
              </a>
            </div>
          </div>

          <div class="newItem">
            <header class="newItemsWrap">
              <span>新品首发</span>
              <div class="all">查看全部</div>
            </header>
            <!--轮播图-->
            <div class="goodGrid">
               <ul class="goodsList">
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
                 <li class="goodItem">
                   <div class="img"><img src=""></div>
                   <div class="title">新品</div>
                   <div class="name ellipsis">小龙虾 4-6钱 1千克/盒 （800克虾+200克汤）</div>
                   <div class="newItemDesc">夏季爆品，媲美现煮</div>
                   <div class="price">$98</div>
                 </li>
               </ul>
            </div>
          </div>











        </div>
        <div class="fo"></div>
      </div>

    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    data() {
      return {
        //这里存放初始化状态
        activeIndex:0
      }
    },
    computed: {
      ...mapState(['data','banner','home'])
    },
    mounted() {
      this.$store.dispatch('getData')
      this.$store.dispatch('getBanner')
      this.$store.dispatch('getHome')
      this._initScroll();
    },
    watch: {
      //轮播图
      banner() {
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          })


        })
      }
    },

    methods:{
      active(index){
        this.activeIndex=index
      },
      _initScroll() {
        this.yichu= new BScroll('.yichu',{
          click:true
        })
       this.homeTab = new BScroll('.homeTab',{
          scrollX: true,
          click: true
        })
      },
    },





//    height (148.03/$rem)

  }
</script>
<!--$rem-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .homeContainer
    width 100%
    height 100%
    .headerWrap
      width 100%
      position fixed
      z-index 100
      background #fff
      .homeSearch
        width 100%
        height (88.03/$rem)
        position relative
        padding (16.008/$rem) (30.016/$rem)
        box-sizing border-box
        display flex
        justify-content center
        align-items center
        .homeImg
          width (138.06/$rem)
          height (41/$rem)
          background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png')
          background-repeat no-repeat
          background-size (138.06/$rem) (41/$rem)
          margin-right (20.0109/$rem)
        .search
          width (442.28/$rem)
          height (56.03/$rem)
          line-height (56.03/$rem)
          border-radius (10/$rem)
          background-color #ededed
          justify-content center
          display flex
          align-items center
          .iconfont
            font-size (28.0147/$rem)
            margin-right (10.0051/$rem)
          input
            font-size (28.0147/$rem)
            width (371.51/$rem)
            height (41.6/$rem)
            background-color #ededed
            outline none
        .homeLogin
          border 1px solid red
          color red
          font-size (24/$rem)
          width (74.0375/$rem)
          height (40.0125/$rem)
          line-height (40.0125/$rem)
          border-radius 6px
          text-align center
          margin-left (16.0083/$rem)
      .homeTab
        width 100%
        height 100%
        overflow hidden
        display flex
        .tabList
          display flex
          background yellow
          flex-flow row nowrap
          background #fff
          padding 0 (30.016/$rem)
          li
            width (88.03/$rem)
            height (55/$rem)
            line-height (55/$rem)
            text-align center
            font-size (28.0147/$rem)
            color #333
            &.on
              border-bottom 2px solid red
              color red

    .yichu
      width 100%
      height 100%
      .contentWrap
        width 100%
        padding-top  (145.03/$rem)
        .msite_nav
          width 100%
          height (370.19/$rem)
          .swiper-container
            width 100%
            height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              a
                width 100%
                height 100%
                .food_container
                  width 100%
                  height 100%
                  img
                    width 100%
                    height 100%
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774


        .g-grow
          width 100%
          height (72.04/$rem)
          display flex
          align-items center
          padding (30.016/$rem)
          box-sizing border-box
          li
            width 33.3%
            height (26.23/$rem)
            text-align center
            display flex
            align-items center
            justify-content center
            .iconfont
              font-size (24.0128/$rem)
            span
              font-size (24/$rem)

        .mainWrap
          width 100%
          height 100%
          .m-bossRecommendModule
            width 100%
            height (160.07/$rem)
            img
              width 100%
              height 100%
          .m-sceneLightShoppingGuideModule
            width 100%
            height (576.287/$rem)
            padding (10.0051/$rem)  (30.016/$rem) (30.016/$rem) (26.0141/$rem)
            box-sizing border-box
            .Thingsfirst
              width 48%
              height 50%
              float left
              padding (18/$rem)
              box-sizing border-box
              border 1px solid gray
              margin-bottom (8.00025/$rem)
              margin-right (8.00025/$rem)
              margin-left (4.00025/$rem)
              background-size 100% 100%
              .m-styleBanner
                width (343.18/$rem)
                height (264.127/$rem)
                .title
                  color:#333333
                  font-size (27.9998/$rem)
                  margin-bottom (6/$rem)
                .desc
                  color:black
                  font-size (24.0128/$rem)
                .picList
                  img
                    width (150.07/$rem)
                    height (150.07/$rem)
                    float left





          .newItem
            width 100%
            height (260/$rem)
            background yellow
            .newItemsWrap
              width 100%
              height 100%
              text-align center
              span
                font-size (36/$rem)
                color  #8BA0B6
                margin-bottom  (30/$rem)
              .all
                width (240/$rem)
                height (56/$rem)
                line-height (56/$rem)
                text-align center
                color  #8BA0B6
                background #D8E5F1
                font-size (27.9998/$rem)
            .goodGrid
              width 100%
              height (502.5/$rem)
              background palegoldenrod
              margin (22.5/$rem) 0
              .goodsList
                height 100%
                display flex
                .goodItem
                  width (279.987/$rem)
                  height 100%
                  background palegreen
                  margin-left (30/$rem)
                  img
                    width (279.987/$rem)
                    height (287.987/$rem)
                    background-color gainsboro
                  .title
                    width (40/$rem)
                    height (30/$rem)
                    font-size (20.002/$rem)
                    background-color #f48f18
                    color #fff
                    margin-left (15/$rem)
                    margin-bottom (9.99975/$rem)
                    padding   (5.00025/$rem) (15.9998/$rem) (5.00025/$rem) (15.9998/$rem)
                    text-align center
                  .name
                    width 100%
                    height (33.6/$rem)
                    background yellow
                    font-size (27.9998/$rem)
                    margin-bottom (9.99975/$rem)
                    padding 0 (9.99975/$rem)
                    box-sizing border-box
                  .newItemDesc
                    width 100%
                    background greenyellow
                    margin-bottom (14.0002/$rem)
                    padding 0 (9.99975/$rem)
                    box-sizing border-box
                    font-size (24/$rem)
                  .price
                    width 100%
                    padding 0 (9.99975/$rem)
                    box-sizing border-box
                    color red
                    font-size (27.9998/$rem)



















        .fo
          width 100%
          height (2000/$rem)



</style>
