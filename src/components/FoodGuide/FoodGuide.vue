<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto('/home')" :class="{on:this.$route.path==='/home'}">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span class="txt">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/category')" :class="{on:this.$route.path==='/category'}">
      <span class="item_icon">
        <i class="iconfont icon-liebiaofenlei"></i>
      </span>
      <span class="txt">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/identify')" :class="{on:this.$route.path==='/identify'}">
      <span class="item_icon">
        <i class="iconfont icon-wupinguanli"></i>
      </span>
      <span class="txt">识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/cart')" :class="{on:this.$route.path==='/cart'}"v>
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="txt">购物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto('/personal')" :class="{on:this.$route.path==='/personal'}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span class="txt">个人</span>
    </a>
  </footer>
</template>
<script>
  export default {
    methods: {
      goto(path) {
        this.$router.replace(path)
      }
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color palegoldenrod
    width 100%
    height (98.05/$rem)
    display flex
    .guide_item
      display flex
      flex-direction column
      text-align center
      align-items center
      flex 1
      color #000
      &.on
        color red
      span
        font-size (24.01/$rem)
        margin-top 5px
        margin-bottom 5px
        .iconfont
          font-size (40.01/$rem)
</style>
