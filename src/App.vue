<template>
  <div class="app">
    <van-nav-bar title="轻音" fixed left-text="返回" left-arrow @click-left="goBack" />
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friends">friends</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart" info="5">cart</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>

export default {
  data: () => ({
    active: 0
  }),
  created () {},
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
  .app{
    padding-top:46px;
    padding-bottom:50px;

    overflow-x: hidden;
    .fly-enter{
      transform: translateX(100%)
    }
    .fly-leave-to{
      transform: translateX(-100%)
    }
    .fly-enter-active
    .fly-leave-active{
      transition: all 1s ease
    }
  }
</style>
