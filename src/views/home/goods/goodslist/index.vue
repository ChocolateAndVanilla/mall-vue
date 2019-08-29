<template>
    <div class="goods-list">
        <div class="goods-item" v-for="good in goods" :key="good.id" @click="goTarget(good.id)">
            <img :src="good.img_url" alt />
            <h1 class="title">{{good.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">¥{{good.sell_price}}</span>
                    <span class="old">¥{{good.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{good.stock_quantity}}件</span>
                </p>
            </div>
        </div>
        <!-- 加载更多 -->
        <van-button hairline type="danger" class="more" @click="getMore">{{hasFlag?'没有商品了哦':'加载更多'}}</van-button>
    </div>
</template>

<script>
export default {
  data: () => ({
    pageindex: 0,
    goods: [],
    limit: 3,
    hasFlag: false
  }),
  created () {
    this.getGoods()
  },
  methods: {
    async getGoods () {
      if (this.hasFlag !== false) return
      this.pageindex++
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getgoods?pageindex=${this.pageindex}&limit=${this.limit}`)
      if (status !== 0) return this.$Toast(message)
      console.log(message)
      this.goods = this.goods.concat(message)
      this.hasFlag = this.pageindex * this.limit > count
      console.log(this.hasFlag)
    },
    getMore () {
      this.getGoods()
    },
    goTarget (id) {
      this.$router.push('/home/goodsinfo/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-list{
    display: flex;
    padding: 7px;
    flex-wrap: wrap;
    justify-content: space-between;
    .goods-item{
        width: 48%;
        display: flex;
        box-shadow: 0 0 8px #ccc;
        bottom: 1px solid #ccc;
        margin: 4px 0;
        padding: 2px;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            p{
                margin: 0;
                padding: 5px;
            }
            .price{

                .new{
                    color: red;
                    font-weight: bolder;
                    font-size: 16px;
                }
                .old{
                    text-decoration:line-through;
                    margin-left: 10px;
                    font-size: 12px;
                }
            }
            .sell{
                background: #ccc;
                display:flex;
                justify-content: space-between;
                font-size: 12px;
                line-height:30px;
            }
        }
    }
    .more{
        width:100%;
    }
}
</style>
