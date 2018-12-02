<template>
  <div class="loginContainer">
    <div class="personalHeader">
      <div class="personHome" @click="goHome('/home')">
        <i class="iconfont icon-HOME"></i>
      </div>
      <a href="javascript:;" class="personalImg"></a>
      <div class="personGouwu">
        <i class="iconfont icon-sousuo" @click="goHome('/home')"></i>
        <i class="iconfont icon-gouwuche" @click="goCart('/cart')"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
