<template>
    <div class="goods-info">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="isShow" id="ball" ref="ballRef"></div>
        </transition>
        <div style="width:375px;overflow:hidden">
          <van-swipe :autoplay="3000" indicator-color="white" class="my-swipe">
              <van-swipe-item class="item" v-for="thum in thums" :key="thum.id">
                  <img :src="thum.src" alt="">
              </van-swipe-item>
          </van-swipe>
        </div>

        <van-panel :title="goodsinfo.title" class="panel">
            <div class="panel-body">
                <div class="price-group">
                    市场价格:
                    <span class="old">{{goodsinfo.market_price}}</span>
                    销售价格:
                    <span class="new">{{goodsinfo.sell_price}}</span>
                </div>

                <!-- 步进器组件 -->
                <div class="stepper">
                    <div class="number">购买数量:</div>
                    <van-stepper v-model="value" integer class="number"/>
                </div>
                <div class="btn-group">
                    <!-- 按钮 -->
                    <van-button type="primary" size="small">立即购买</van-button>
                    <van-button type="danger" size="small" @click="addCart" :disabled="isAble">加入购物车</van-button>
                </div>
            </div>
        </van-panel>

        <!-- 列表信息 -->
        <van-panel class="panel" title="商品信息">
            <div class="panel-body">
                <p>商品货号:{{goodsinfo.goods_no}}</p>
                <p>库存情况:{{goodsinfo.stock_quantity}}件</p>
                <p>上架时间:{{goodsinfo.add_time}}</p>
            </div>
        </van-panel>

    </div>

</template>

<script>
export default {
  data: () => ({
    id: '',
    thums: [],
    value: 0,
    goodsinfo: {},
    isShow: false,
    xDist: 0,
    yDist: 0,
    isAble: false
  }),
  created () {
    this.id = this.$route.params.id
    this.getThumImages()
    this.getgoodsinfo()
  },
  methods: {
    async getThumImages () {
      let id = Number(this.id) + 100
      const {
        data: { status, message }
      } = await this.$http.get(`/api/getthumimages/${id}`)
      if (status !== 0) return this.$Toast(message)
      console.log(message)
      this.thums = message
    },
    async getgoodsinfo () {
      const {
        data: { status, message }
      } = await this.$http.get('api/goods/getinfo/' + this.id)
      if (status !== 0) return this.$Toast('获取信息失败')
      this.goodsinfo = message
      console.log(message)
    },
    getBound () {
      let ball = this.$refs.ballRef.getBoundingClientRect()
      //   console.log(ball)
      let info = document.querySelector('.van-info').getBoundingClientRect()

      this.xDist = info.left - ball.left
      this.yDist = info.top - ball.top
    },
    addCart () {
      this.isShow = !this.isShow
    },
    beforeEnter (el) {
      // 设置起始位置
      el.style.transform = 'translate(0,0)'
    },
    enter (el, done) {
      // 设置元素的目的地
      // eslint-disable-next-line no-unused-expressions
      el.offsetLeft

      // 获取移动的距离
      this.getBound()
      //   el.style.transform = 'translate(195px,210px)'
      el.style.transform = `translate(${this.xDist}px,${this.yDist}px)`
      el.style.transition = 'all .3s ease'
      done()// 执行完之后马上执行下一个函数
    },
    afterEnter (el) {
      this.isShow = false
      // 点击的瞬间禁用按钮,起到节流的作用
      this.isAble = true
      // 动画走完之后,重新激活
      setTimeout(() => {
        this.isAble = false
      }, 400)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-info{
    position: relative;
    .ball{
        width: 15px;
        height:15px;
        border-radius: 50%;
        background: red;
        position: absolute;
        top:399px;
        left:62px;
        z-index: 999;
        // transform: translate(195px,231px)
    }
    .my-swipe{
        height: 300px;
        img{
            width: 100%;
            height: 300px;
            display: block;
        }
    }
    .panel{
        width: 96%;
        border-radius: 6px;
        box-shadow: 0 0 3px #ccc;
        margin: 0 auto;
        margin-top:10px;
        overflow: hidden;
        .panel-body{
            margin-left: 16px;
            margin-bottom: 10px;
            color: #8f8f94;
            font-size: 14px;
        }
    }
}
</style>
