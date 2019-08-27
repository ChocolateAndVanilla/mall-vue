<template>
    <div class="home">
        <!-- <img src="./logo.png" alt=""> -->
        <van-swipe :autoplay="3000" indicator-color="white" class="my-swipe">
            <van-swipe-item class="item" v-for="item in lunbolist" :key="item.id">
                <img :src="item.img" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- <Grid></Grid> -->
        <van-grid :column-num="3" class="my-grid">
            <van-grid-item v-for="grid in grids" :key="grid.id" :text="grid.title" props="grid" :to="grid.to">
                <template slot="icon">
                    <img :src="grid.src" alt="">
                </template>

            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
// import Grid from '../../components/grids'
export default {
  data: () => ({
    lunbolist: [],
    grids: []
  }),
  created () {
    this.getlunbo()
    this.getGrids()
  },
  methods: {
    async getlunbo () {
      const { data: { message, status }
      } = await this.$http.get('api/getlunbo')

      if (status !== 0) return this.$Toast('获取轮播图失败')
      this.lunbolist = message
    },
    async getGrids () {
      const { data: { message, status }
      } = await this.$http.get('api/grids')

      if (status !== 0) return this.$Toast('获取图标失败')
      this.grids = message
      console.log(message)
    }
  },
  components: {
    // Grid
  }
}
</script>

<style lang='less' scoped>
.home{
    .my-swipe{
        height: 200px;
        // .item{
        //     &:nth-child(1){
        //         background:red
        //     }
        //     &:nth-child(2){
        //         background:aqua
        //     }
        //     &:nth-child(3){
        //         background:purple
        //     }
        // }
        .item{
            img{
                width:100%;
                height:100%;
                display: block
            }
        }
    }
    .my-grid{
        img{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: block
        }
    }
}
</style>
