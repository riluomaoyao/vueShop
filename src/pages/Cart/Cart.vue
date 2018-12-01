<template>
  <section id="cartContainer">
    <div class="cartHeader">
    </div>
    <div class="cartContent">
      <ul>
        <li>30天无忧退货</li>
        <li>30天无忧退货</li>
        <li>30天无忧退货</li>
      </ul>
      <img src="">
      <div class="txt">
        登录
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
      background yellow
      text-align center

</style>
