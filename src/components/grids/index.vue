<template>
  <div class="grids">
      <div class="demo-icon">
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
            <div class="van-col van-col--6">
                <i class="van-icon">
                    <img src="./gird/menu1.png" alt="">
                </i>
                <span>location-o</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
    .grids{
        .demo-icon {
            font-size: 0;
        }
        .demo-icon-list {
        box-sizing: border-box;
        min-height: calc(100vh - 65px);
        padding-top: 10px;
        }
        .demo-icon .van-col {
        display: inline-block;
        float: none;
        height: 100px;
        width: 33.3333%;
        text-align: center;
        vertical-align: middle;
        img{
            width: 60px;
            height: 60px;
        }
        }
        .demo-icon .van-col span {
        display: block;
        padding: 0 5px;
        color: #7d7e80;
        font-size: 12px;
        line-height: 18px;
        }
        .demo-icon .van-icon {
        margin: 20px 0 10px;
        color: #323233;
        font-size: 32px;
        }
        .demo-icon .van-tab__pane {
        width: auto;
        margin: 20px;
        background-color: #fff;
        }
    }
</style>
