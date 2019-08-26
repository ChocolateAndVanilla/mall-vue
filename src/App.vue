<template>
  <div class="app">
    <van-nav-bar title="轻音少女" left-text="返回" left-arrow @click-left="onClickLeft" />
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
    onClickLeft () {
      console.log('left')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
