<template>
  <section id="cartContainer">
    <div class="cartHeader">购物车</div>
    <div class="cartContent">
      <ul class="advantage">
        <li>30天无忧退货</li>
        <li>30天无忧退货</li>
        <li>30天无忧退货</li>
      </ul>
      <div class="gouwuche">
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div class="txt">
        <span>去添加点什么</span>
        <div>登录</div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #cartContainer
    width 100%
    height 100%
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
      position relative
      .advantage
        width 100%
        display flex
        align-items center
        padding-top (13/$rem)
        li
          font-size 0.32rem
          color #666
          flex 1
          list-style circle
          text-align center
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
