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
      <!--轮播图-->

    </div>





  </div>
</template>
<script>
  export default {



  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
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

</style>
