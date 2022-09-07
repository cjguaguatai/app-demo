<template>
  <view>
    <van-card v-for="(item,index) in goods" :key="item.goods_id" :price="item.goods_price | tofixed"
      :title="item.goods_name" :thumb="item.goods_small_logo||defaultPic"
      :thumb-link='`../goods_detail/goods_detail?id=${item.goods_id}`' />
  </view>
</template>

<script>
  import {
    getGoodsList
  } from '@/api/goods.js'
  import toast from '@/utils/toast.js'
  export default {
    data() {
      return {
        queryData: {
          query: '',
          cid: '', // 分类id
          pagenum: 1,
          pagesize: 10
        },
        goods: [],
        total: 0,
        defaultPic: 'https://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png',
        isLoading: false
      };
    },
    methods: {
      async getGoodsList(cb) {
        const {
          goods,
          total
        } = await getGoodsList(this.queryData)
        this.total = total
        this.goods = [...this.goods, ...goods]
        cb && cb()
        this.isLoading = false
      }
    },
    onLoad({
      query
    }) {
      this.queryData.query = query
      this.getGoodsList()
    },
    onPullDownRefresh() {
      this.queryData = {
        query: this.queryData.query,
        cid: '', // 分类id
        pagenum: 1,
        pagesize: 10
      }
      this.total = 0
      this.goods = []
      this.getGoodsList(() => {
        uni.stopPullDownRefresh()
      })
    },
    onReachBottom() {
      if (this.queryData.pagenum * this.queryData.pagesize >= this.total) return toast('没有更多了')
      if (this.isLoading) return
      this.isLoading = true
      this.queryData.pagenum++
      this.getGoodsList()
    }
  }
</script>

<style lang="scss">

</style>
