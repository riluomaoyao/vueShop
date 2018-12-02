<template>
    <div class="goodsContentItem" v-if="nav.categoryL1List">
      <div class="banner">
        <img :src="nav.categoryL1List[activeIndex].wapBannerUrl">
      </div>
      <div class="cateList">
        <div class="text">
          <span>{{nav.categoryL1List[activeIndex].name}}</span>
          <span>分类</span>
        </div>
        <div class="listImg">
          <div class="cateItem" v-for="(item,index) in nav.categoryL1List[activeIndex].subCateList" :key="index">
            <div class="cateImg">
              <img :src="item.wapBannerUrl">
            </div>
            <div class="cateText">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>
  export default {
    props: {
      nav:Object,
      activeIndex:Number
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .goodsContentItem
      width 6.99rem
      .banner
        width 100%
        height (197/$rem)
        background greenyellow
        img
          width 100%
          height 100%
      .cateList
        width 100%
        .text
          height 1.44rem
          line-height  1.44rem
          text-align  center
          font-size  0.32rem
          color #333
          margin-top (3/$rem)
        .listImg
          width 100%
          overflow hidden
          .cateItem
            width 33%
            float left
            margin-bottom 50px
            .cateImg
              width (144/$rem)
              height (144/$rem)
              img
                width 100%
                height 100%
            .cateText
              width (144/$rem)
              height (75/$rem)
              text-align center
              font-size 0.32rem
</style>
