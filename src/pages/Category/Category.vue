<template>
  <div class="categoryContainer">
    <div class="searchGoods">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="搜索商品，共19604款好物">
      </div>
    </div>
    <div class="goodsCategory">
      <div class="goodsListLeft">
        <ul class="goodsList">
          <li :class="{active:index===activeIndex}" v-for="(item,index) in nav.categoryL1List" :key="index" @click="currentactive(index)">{{item.name}}</li>
        </ul>
      </div>


      <div class="goodsContentRight">
        <div class="banner">
          <img src="http://yanxuan.nosdn.127.net/338801bc05ba0ee0cf201c1a87376677.png">
        </div>
        <div class="cateList">
          <div class="text">
            <span>夏季专区</span>
            <span>分类</span>
          </div>
          <div class="listImg">
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
            <div class="cateItem">
              <div class="cateImg">
                <img src="http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png">
              </div>
              <div class="cateText">
                行李箱
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        activeIndex:0,
      }
    },
    mounted() {
      this.$store.dispatch('getNav')
    },

    methods: {
      currentactive(index) {
        this.activeIndex=index
      }
    },
    computed: {
      ...mapState(['nav'])
    },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .categoryContainer
    width 100%
    height 100%
    .searchGoods
      width 100%
      height (90/$rem)
      position relative
      padding (16.008/$rem) (30.016/$rem)
      box-sizing border-box
      border-bottom  1px solid #999
      .search
        width 100%
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
          font-size 0.37333rem
          width (371.51/$rem)
          height (41.6/$rem)
          background-color #ededed
          outline none
    .goodsCategory
      width 100%
      height 100%
      overflow hiddens
      .goodsListLeft
        width 2.16rem
        height 100%
        position relative
        float left
        border-right 1px solid #999
        .goodsList
          border-right 1px solid #999
          width 2.16rem
          padding-bottom 1.84rem
          padding-top 0.3rem
          li
            width 100%
            height 0.66667rem
            text-align center
            border none
            display  block
            color #333
            font-size 0.37333rem
            line-height 0.66667rem
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
            margin  0.3rem 0
            box-sizing border-boxs
            &:nth-child(1)
              margin-top 0
            &.active
              font-size 0.48rem
              color #ab2b2b
              line-height 0.66667rem
              border-left 4px solid #ab2b2b
      .goodsContentRight
        padding 0.4rem 0.4rem 0.28rem
        height  100%
        border 1px solid #f4f4f4
        width 6.99rem
        padding 0.4rem 0.4rem 0.28rem 0.4rem
        float right
        .banner
          width 100%
          height (197.01/$rem)
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
