<template>
  <section id="cartContainer">
    <div class="cartHeader">购物车</div>
    <div class="cartContent">
      <ul class="advantage">
        <li>
          <i class="iconfont icon-kongxinyuan"></i>
          <span class="txt">30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-kongxinyuan"></i>
          <span class="txt">30天无忧退货</span>
        </li>
        <li>
          <i class="iconfont icon-kongxinyuan"></i>
          <span class="txt">30天无忧退货</span>
        </li>
      </ul>
      <div class="gouwuche">
        <i class="iconfont icon-unie62d"></i>
      </div>
      <div class="txt">
        <span>去添加点什么</span>
        <div @click="goLogin('/personal')">登录</div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    methods: {
      goLogin(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #cartContainer
    width 100%
    height 100%
    position relative
    .cartHeader
      width 100%
      height  (87/$rem)
      line-height (87/$rem)
      font-size (36/$rem)
      text-align center
    .cartContent
      width 100%
      height 100%
      background #f4f4f4
      box-sizing border-box
      position fixed
      .advantage
        width 100%
        display flex
        align-items center
        padding-top (13/$rem)
        li
          flex 1
          text-align center
          display flex
          align-items center
          justify-content center
          .txt
            margin-top (-16/$rem)
            font-size 0.32rem
            color #666
          .iconfont
            margin-right (-27/$rem)
            margin-top (20px/$rem)
            font-size 0.52rem
            color #666


      .gouwuche
        width (248/$rem)
        height (248/$rem)
        margin-top 5rem
        margin-left 3.035111rem
        text-align center
        .iconfont
          font-size (248/$rem)
          color gainsboro
      .txt
        text-align center
        span
          margin-bottom .66667rem
          line-height 1
          font-size .37333rem
          color #999
          display block
        div
          margin auto
          width 6.4rem
          height 1.22667rem
          font-size .4rem
          line-height 1.22667rem
          color #fff
          background-color #b4282d
          border-radius .04rem
          text-align center
</style>
