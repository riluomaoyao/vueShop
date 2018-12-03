<template>
  <div class="loginContainer">
    <div class="personalHeader">
      <router-link to="/personal">
        <i class="iconfont icon-leftjiantou"></i>
      </router-link>
    </div>
    <div class="personalContent">
      <div class="logoWrap"></div>

      <!--<div class="phone">-->
        <!--<div class="phonenum common">-->
          <!--<input type="text" placeholder="请输入手机号"/>-->
        <!--</div>-->
        <!--<div class="yzm common">-->
          <!--<input type="text" placeholder="请输入短信验证码"/>-->
          <!--<button>获取验证码</button>-->
        <!--</div>-->
        <!--<div class="problem">-->
          <!--<span>遇到的问题？</span>-->
          <!--<span>使用密码验证登录</span>-->
        <!--</div>-->
      <!--</div>-->
      <div class="ms">
        <div class="mail common">
          <input type="text" placeholder="邮箱账号" />
        </div>
        <div class="mima common">
          <input type="text" placeholder="密码" />
        </div>
        <div class="problem">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
      </div>

      <div class="Loginpshone com">登录</div>
      <div class="other com">其他账号登录</div>
      <!--可有可无-->
      <div class="zhuce">注册账号</div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>s
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .loginContainer
    width 100%
    height 100%
    .personalHeader
      width 100%
      padding-left (24/$rem)
      position fixed
      .iconfont
        font-size (35/$rem)
        color #000
    .personalContent
      width 100%
      height 100%
      text-align center
      .logoWrap
        height (417.98/$rem)
        background-image url("http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
        background-repeat no-repeat
        background-size (267.99/$rem) (90/$rem)
        background-position center
      .phone
        .common
          width 8.93333333rem
          height   1.22666667rem
          position relative
          border-bottom 1px solid #eeeeee
          margin 0 auto
          input
            font-size 30px
            width 8.93333333rem
            border none
            outline none
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
          button
            display  inline-block
            width  2.13333333rem
            height  0.8rem
            border-radius   0.1rem
            border  1px solid #000
            line-height  0.8rem
            font-size 0.37333333rem
            position absolute
            top 50%
            left 88%
            transform translate(-50%, -50%)
            background #fff
        .problem
          width  8.93333333rem
          height (30/$rem)
          line-height (30/$rem)
          display flex
          justify-content space-between
          margin 20px auto 0
          span
            font-size 0.26rem
            color #666
      .ms
        .common
          width 8.93333333rem
          height   1.22666667rem
          position relative
          border-bottom 1px solid #eeeeee
          margin 0 auto
          input
            font-size 30px
            width 8.93333333rem
            border none
            outline none
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
        .problem
          width  8.93333333rem
          height (30/$rem)
          line-height (30/$rem)
          display flex
          justify-content space-between
          margin 20px auto 0
          span
            font-size 0.26rem
            color #666

      .com
        width  8.93333333rem
        height  1.2rem
        text-align  center
        line-height  1.2rem
        background  #b4282d
        color  #fff
        margin  0.5rem auto 0
        border-radius  0.1rem
        font-size 30px
      .zhuce
        margin 0.3rem auto 0
        font-size 30px


</style>
