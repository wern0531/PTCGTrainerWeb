<template>
  <div class="container">
    <h1>感謝您的購買</h1>
    <div class="d-flex flex-column flex-md-row align-items-center my-3 text-start">
      <div>
        訂單編號
        {{ orderId }}
      </div>

        <RouterLink
        type="button"
        class="mt-2 mt-md-0 ms-md-auto btn text-myColor btn-myBgMain border-myColor"
        :to="'/products/全部商品'"
        >好想再買喔!!</RouterLink
      >

    </div>
    <div>
      <h2>訂單資訊</h2>
      <hr />
      <div class="row">
        <div class="col-6 ms-auto">商品</div>
        <div class="col-3">數量</div>
      </div>
      <hr />
      <div v-for="item in orderData.products" :key="item.id">
        <div class="row">
          <div class="col-3">
            <img style="max-width: 80px" :src="item.product.imageUrl" alt="商品圖片" />
          </div>
          <div class="col-6 d-flex justify-content-center align-items-center">
            {{ item.product.title }}
          </div>
          <div class="col-3 d-flex justify-content-center align-items-center">
            {{ item.qty }}
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  data () {
    return {
      orderId: '',
      orderData: {}
    }
  },
  methods: {},
  components: { RouterLink },
  mounted () {
    window.scrollTo(0, 0) // 將頁面捲動到頂部
    this.orderId = this.$route.query.orderId
    this.orderData = JSON.parse(this.$route.query.orderData)
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 350px;
    font-weight: 700;
    font-size: 14px;
    line-height: 23px;
  }
}
</style>
