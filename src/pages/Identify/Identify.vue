<template>
  <div class="IdentifyContainer">
    <div class="personalHeader">
      <div class="personHome">
        <i class="iconfont icon-HOME"></i>
      </div>
      <a href="javascript:;" class="personalImg"></a>
      <div class="personGouwu">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
    <div class="IdentifyContent">
      <div class="content">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/c6a391ff65f798cbf51030cb35ccdb25.jpg">
              <div class="content">
                <div class="subTitle">严选推荐</div>
                <div class="title">周年庆断货的好物榜</div>
                <div class="desc">周年庆没买到，这次不要错过咯</div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/9c9bbc692ff2b98e729a67ecca003dff.jpg">
              <div class="content">
                <div class="subTitle">严选推荐</div>
                <div class="title">周年庆断货的好物榜</div>
                <div class="desc">周年庆没买到，这次不要错过咯</div>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b8cfc8fefa68033b9f458527bc6f1682.jpg">
              <div class="content">
                <div class="subTitle">严选推荐</div>
                <div class="title">周年庆断货的好物榜</div>
                <div class="desc">周年庆没买到，这次不要错过咯</div>
              </div>
            </div>
          </div>
        </div>






        <div class="foo"></div>
        <div class="foo1"></div>
      </div>

    </div>





  </div>
</template>
<script>
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      this._initScroll();
      var mySwiper =  new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    },
    methods:{
      _initScroll() {
        this.IdentifyContent = new BScroll('.IdentifyContent',{
          click:true,
          spaceBetween:'10%',
        })
      },
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .IdentifyContainer
    width 100%
    height 100%
    .personalHeader
      width 100%
      height (87/$rem)
      background #fafafa
      padding 0px (15.9998/$rem) 0px (24/$rem)
      color #000
      position fixed
      z-index 10
      .personHome
        float left
        .iconfont
          font-size (75/$rem)
      .personalImg
        float left
        width (471.987/$rem)
        height (87/$rem)
        background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png')
        background-repeat no-repeat
        background-size (171/$rem) (54/$rem)
        background-position center
      .personGouwu
        width (180/$rem)
        line-height (87/$rem)
        float right
        .iconfont
          font-size  (50/$rem)
          float left
          font-weight 400
          margin-right (30/$rem)

    .IdentifyContent
      width 100%
      height 100%
      box-sizing border-box
      .content
        padding-top (87/$rem)
        .swiper-container
          .swiper-wrapper
            .swiper-slide
              width (552.609/$rem)
              height (315/$rem)
              background yellow
              img
                width 100%
                height 100%

























        .foo
          width 100%
          height (5000/$rem)
          background red
        .foo1
          width 100%
          height (5000/$rem)
          background yellow
</style>
