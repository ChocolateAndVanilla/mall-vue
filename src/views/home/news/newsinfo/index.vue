<template>
    <div class="newsinfo">
      <!-- title content -->
        <div class="newsinfo-header">
            <van-card  :title="news.title">
              <div slot="price">
                  <span class="add_time">发表时间:{{news.add_time}}</span>
              </div>
              <div slot="num">
                  <span>点击次数:{{news.click}}</span>
              </div>
          </van-card>
          <hr />
          <div class="newsinfo-content">
              {{news.content}}
          </div>
        </div>

        <!-- 评论组件 -->
        <comment :comments="comments" @postcomment="postcomment"></comment>
        <!-- 加载更多 -->
        <van-button plain hairline type="danger" class="more" @click="getMore">{{hasFlag?'没有新消息了':'加载更多'}}</van-button>
    </div>
</template>

<script>
import Comment from '@/components/comment'
export default {
  data: () => ({
    id: '',
    news: {},
    pageindex: 1,
    comments: [],
    limit: 2,
    hasFlag: false
  }),
  created () {
    this.id = this.$route.params.id
    this.getNewsInfo()
    this.getComments()
  },
  methods: {
    async getNewsInfo () {
      const { data: { message, status } } = await this.$http.get(`api/getnew/${this.id}`)

      if (status !== 0) return this.$Toast(message)
      this.news = message
      // console.log(message)
    },
    async getComments () {
      // 节流
      if (this.hasFlag !== false) return
      // this.pageindex++
      const {
        data: { message, status, count }
      } = await this.$http.get(`api/getcomments/${this.id}?pageindex=${this.pageindex}&limit=${this.limit}`)

      if (status !== 0) return this.$Toast(message)

      // message获取到某一页的数据
      this.comments = this.comments.concat(message)
      console.log(count)
      // 计算出一个布尔值,用于逻辑控制
      this.hasFlag = this.pageindex * this.limit > count
      // console.log(this.hasFlag)
      // console.log(data)
    },
    async getMore () {
      this.pageindex++
      this.getComments()
    },
    async postcomment (data) {
      const {
        data: { message, status }
      } = await this.$http.post(`api/postcomment/${this.id}`, { content: data })
      if (status !== 0) return this.$Toast('发表评论失败')
      console.log(message)
      this.comments.unshift({
        user_name: '匿名用户',
        content: data,
        add_time: Date.now().formate
      })
    }
  },
  components: {
    Comment
  }
}
</script>

<style lang="less" scoped>
  .newsinfo{
    padding: 0 4px;
    hr{
      margin: 0 0 10px 0;
    }
    .van-card{
      background: lavenderblush;
    }
    .van-card__thumb{
        height: 55px;

    }
    .van-card__content{
        min-height: 55px;
        .van-card__title{
            margin-bottom: 20px;
            text-align: center;
            color: red;
            font-size: 16px
        }
        .add_time{
            color: salmon
        }
    }
    // .newsinfo-content{
    //     text-indent: 2em
    // }
    .more{
      width: 100%;
    }

  }
</style>
