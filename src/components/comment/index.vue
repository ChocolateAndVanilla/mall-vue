<template>
    <div class="comment">
        <!-- <van-cell-group>
            <van-cell title="单元格" label="描述信息" />
        </van-cell-group> -->
        <h2>发表评论</h2>
        <hr />
        <textarea v-model="text" cols="30" rows="10" placeholder="请输入内容" class="text"></textarea>

        <van-button color="salmon" class="btn" @click="addComment">发表评论</van-button>

        <div class="comment-list" v-for="(comment,index) in comments" :key="comment.id">
            <div class="comment-title">
                <span>{{index + 1}}楼</span>
                <span>用户:{{comment.user_name}}</span>
                <span>发表时间:{{comment.add_time | datefmt}}</span>
            </div>

            <div class="comment-item">
                {{comment.content}}
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data: () => ({
    text: ''
  }),
  props: {
    comments: {
      type: Array
    }
  },
  created () {

  },
  methods: {
    addComment () {
      if (this.text.length === 0) return this.$Toast('请输入内容')
      this.$emit('postcomment', this.text)
      this.text = ''
    }
  }
}
</script>

<style lang="less" scoped>
    .comment{
        textarea{
            border: none
        }
        .text{
            font-size: 16px;
            height: 85px;
            width: 100%;
        }
        .btn{
            width: 100%;
        }
        .comment-list{
            font-size: 12px;
            .comment-title{
                margin-top: 6px;
                background: #cccccc;
                line-height: 30px;
                span{
                    margin-right: 4px;
                }
            }
        }
    }
</style>
