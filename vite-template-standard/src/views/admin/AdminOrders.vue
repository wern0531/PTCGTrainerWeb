<template>
  <LoadingItem :active="isLoading" :z-index="1060" :opacity="0">
    <div class="loadingGif">
      <img src="@/assets/image/pikachu_gif.gif" alt="會動的皮卡丘過場圖" />
    </div>
  </LoadingItem>
    <div class="container" v-if="isready">
    <table class="table mt-4 text-white">
      <thead>
        <tr>
          <th width="120">購買時間</th>
          <th width="120">Email</th>
          <th width="200">購買款項</th>
          <th width="120">應付金額</th>
          <th width="100">是否付款</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id">
          <td>{{ createDate(order.create_at) }}</td>
          <td>{{ order.user.email }}</td>
          <td>
            <ul class="list-unstyled">
              <li v-for="product in order.products" :key="product.id">
                {{ product.product.title }} 數量 : {{ product.qty
                }}{{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ order.total }}</td>
          <td>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                v-model="order.is_paid"
                @change="updatePaid(order)"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                <span class="text-success" v-if="order.is_paid === true"
                  >已付款</span
                >
                <span v-else>未付款</span></label
              >
            </div>
          </td>
          <td>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-outline-primary btn-sm"
                @click="openModel('edit', order)"
              >
                檢視
              </button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openModel('del', order)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  </div>
  <!-- 檢視model -->
  <div
    class="modal fade"
    id="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="orderModal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ createDate(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="tempOrder.paid_date">
                        {{ createDate(tempOrder.paid_date) }}
                      </span>
                      <span v-else>時間不正確</span>
                    </td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ currency(tempOrder.total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ currency(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary">修改付款狀態</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 刪除商品 -->
  <div
    id="delOrderModal"
    ref="delOrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除訂單</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除訂單編號
          <strong class="text-danger">{{ tempOrder.id }}</strong> (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delOrder">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
import Pagination from '@/components/PaginationComponent.vue'
const { VITE_URL, VITE_PATH } = import.meta.env

let orderModal = ''
let delOrderModal = ''

export default {
  data () {
    return {
      isready: false,
      isLoading: false,
      orders: [],
      pagination: {},
      tempOrder: {}
    }
  },
  methods: {
    createDate (time) {
      const thisTime = new Date(time * 1000)
      return thisTime.toLocaleDateString()
    },
    currency (num) {
      const n = parseInt(num, 10)
      return `${n
        .toFixed(0)
        .replace(/./g, (c, i, a) =>
          i && c !== '.' && (a.length - i) % 3 === 0
            ? `, ${c}`.replace(/\s/g, '')
            : c
        )}`
    },
    getOrders (page = 1) {
      this.$http
        .get(`${VITE_URL}v2/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders
          this.pagination = res.data.pagination
          this.isready = true
          this.isLoading = false
        })
    },
    updatePaid (item) {
      const paid = { is_paid: item.is_paid }
      this.$http
        .put(`${VITE_URL}v2/api/${VITE_PATH}/admin/order/${item.id}`, {
          data: paid
        })
    },
    openModel (status, item) {
      if (status === 'edit') {
        this.tempOrder = { ...item }
        orderModal.show()
      } else if (status === 'del') {
        this.tempOrder = { ...item }
        delOrderModal.show()
      }
    },
    delOrder () {
      this.$http
        .delete(
          `${VITE_URL}v2/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`
        )
        .then((res) => {
          this.tempOrder = {}
          this.getOrders()
          delOrderModal.hide()
          alert(res.data.message)
        })
    }
  },
  components: {
    Pagination
  },
  mounted () {
    this.isLoading = true
    this.getOrders()
    orderModal = new Modal(this.$refs.orderModal, {
      keyboard: false
    })
    delOrderModal = new Modal(this.$refs.delOrderModal, {
      keyboard: false
    })
  }
}
</script>
