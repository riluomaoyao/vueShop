<template>
  <div id="app">
    <!--显示当前的组件内容-->
    <router-view/>
    <FoodGuide/>
  </div>
</template>
<script>
  import FoodGuide from './components/FoodGuide/FoodGuide.vue'
  export default {
    components: {
      FoodGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%



</style>
