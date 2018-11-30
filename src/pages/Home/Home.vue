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
          <li class="on">推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
        </ul>
      </div>
    </div>
    <div class="contentWrap">
      <!--轮播图-->
      <nav class="msite_nav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:">
                <div class="food_container">
                  <img src="./images/5.png">
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:">
                <div class="food_container">
                  <img src="./images/2.jpg">
                </div>
              </a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:">
                <div class="food_container">
                  <img src="./images/3.jpg">
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
        <div class="m-sceneLightShoppingGuideModule">
          <div class="Thingsfirst">
            <a href="javascript:javascript:;" class="m-styleBanner" >
              <div class="title">断货补单王</div>
              <div class="desc">严选必买爆款</div>
              <div class="picList">
                <img src="http://yanxuan.nosdn.127.net/11b5e87392b8a3ae4c3f0315e4acb8ac.png" class="pic">
                <img src="http://yanxuan.nosdn.127.net/5316edad774df95d0e350f90e60e211c.png" class="pic">
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      this._initScroll();
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    methods:{
      _initScroll() {
       this.homeTab = new BScroll('.homeTab',{
          scrollX: true,
          click: true
        })
      },
    },






  }
</script>
<!--$rem-->
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .headerWrap
    width 100%
    height (148.03/$rem)
    background-color palegoldenrod
    .homeSearch
      width 100%
      height (88.03/$rem)
      position relative
      padding (16.008/$rem) (30.016/$rem)
      box-sizing border-box
      display flex
      background yellow
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
      .tabList
        height (60/$rem)
        overflow hidden
        white-space nowrap
        li
          width (88.03/$rem)
          height (55/$rem)
          line-height (55/$rem)
          text-align center
          background grey
          font-size (28.0147/$rem)
          color #333
          display inline-block
          vertical-align top
          &.on
            border-bottom 2px solid red
            color red





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
    background yellow
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
        width 50%
        height 50%
        .m-styleBanner
          width (343.18/$rem)
          height (264.127/$rem)
          background-image url(https://yanxuan.nosdn.127.net/4c38aa44bbafcc735aa6752617fe2cdb.png)
          background-size 100% 100%
          .title
            color:#333333
            font-size (32.0173/$rem)
          .desc
            color:#7f7f7f
            font-size (24.0128/$rem)
          .picList
            img
              width 50%
              float left













</style>
