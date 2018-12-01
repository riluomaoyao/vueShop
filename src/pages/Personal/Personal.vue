<template>
  <section id="personalContainer">
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
    <div class="personalContent">
      <div class="logoWrap">
      </div>
      <div class="phoneLogin">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="mailLogin">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="phoneRegister">
        <span>手机号快捷注册</span>
        <i class="iconfont icon-z043"></i>
      </div>
    </div>
    <div class="personFooter">
      <ul class="loginWays">
        <li>
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </li>
        <li>
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </li>
        <li>
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #personalContainer
    width 100%
    height 100%
    .personalHeader
      width 100%
      height (87/$rem)
      background #fafafa
      padding 0px (15.9998/$rem) 0px (24/$rem)
      color #000
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
    .personalContent
      width 100%
      height 100%
      background #F4F4F4
      text-align center
      .logoWrap
        height (417.98/$rem)
        background-image url("http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
        background-repeat no-repeat
        background-size (267.99/$rem) (90/$rem)
        background-position center
      .phoneLogin
        width (670.425/$rem)
        height (93.9997/$rem)
        line-height (93.9997/$rem)
        color #fff
        border 1px solid #b4282d
        background-color #b4282d
        font-size (27.9998/$rem)
        border-radius (2/$rem)
        text-align center
        margin-bottom (32.0003/$rem)
        margin-left (40/$rem)
        .iconfont
          font-size (40/$rem)
      .mailLogin
        width (670.425/$rem)
        height (93.9997/$rem)
        line-height (93.9997/$rem)
        font-size (27.9998/$rem)
        border-radius (2/$rem)
        border 1px solid #b4282d
        text-align center
        margin-bottom (35.0003/$rem)
        margin-left (40/$rem)
        .iconfont
          font-size (40/$rem)
      .phoneRegister
        width (670.425/$rem)
        height (93.9997/$rem)
        font-size (27.9998/$rem)
        color #333
        .iconfont
          font-size (27.9998/$rem)






</style>
