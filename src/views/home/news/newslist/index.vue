<template>
    <div class="newslist">
        <router-link v-for="item in newslist" :key="item.id" :to="'/home/newsinfo/'+item.id">
            <van-card  :title="item.title" :thumb="item.img_url" >
                <div slot="price">
                    <span class="add_time">发表时间:{{item.add_time | datefmt}}</span>
                </div>
                <div slot="num">
                    <span>点击次数:{{item.click}}</span>
                </div>
            </van-card>
        </router-link>
    </div>
</template>

<script>
export default {
  data: () => ({
    newslist: []
  }),
  created () {
    this.getNewsList()
  },
  methods: {
    // 获取新闻列表信息
    async getNewsList () {
      const { data: { message, status }
      } = await this.$http.get('api/getnewslist')

      if (status !== 0) return this.$Toast('获取新闻列表失败')
      this.newslist = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
    .newslist{
        .van-card__thumb{
            height: 55px;

        }
        .van-card__content{
            min-height: 55px;
            .van-card__title{
                margin-bottom: 20px
            }
            .add_time{
                color: orange
            }
        }
    }
</style>
