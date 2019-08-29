<template>
    <div class="photolist">
        <van-tabs @change="getImgs" animated >
            <van-tab v-for="cate in cates" :title="cate.title" :key="cate.id" >
                <template v-if="imgs.length !== 0">
                  <router-link :to="'/home/photoinfo/'+img.id" v-for="img in imgs" :key="img.id" class="img-box">
                    <!-- <img :src="img.img_url" alt=""> -->
                    <img v-lazy="img.img_url" >
                  </router-link>
                </template>
                <div v-else>暂无数据</div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
export default {
  data: () => ({
    cates: [],
    imgs: []
  }),
  created () {
    this.getImgCategory()
    this.getImgs(0)
  },
  methods: {
    async getImgCategory () {
      const {
        data: { status, message }
      } = await this.$http.get('api/getimgcategory')
      if (status !== 0) return this.$Toast('获取分类失败')
      //   console.log(message)
      message.unshift({ id: 0, title: '全部' })
      this.cates = message
    },
    // 默认传递一个index
    async getImgs (index) {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getimages/${index}`)
      if (status !== 0) return this.$Toast('获取分类失败')
      this.imgs = message
      console.log(message)
    }
  }
}
</script>

<style lang="less" scoped>
.photolist{
  // overflow-x: hidden;
  .img-box{
    padding: 4px;
  }
  img{
    height: 100%;
    width: 100%;
  }
}
</style>
