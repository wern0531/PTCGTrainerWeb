<template>
    <div>這是登入頁面</div>
    <form id="form" class="form-signin" @submit.prevent="login">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="username"
          placeholder="name@example.com"
          required
          autofocus
          v-model="user.username"
        />
        <label for="username">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          required
          v-model="user.password"
        />
        <label for="password">Password</label>
      </div>
      <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
        登入
      </button>
    </form>
  </template>

<script>
const { VITE_URL } = import.meta.env

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http
        .post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          // 從res.data內取得token,expired(時間格式)
          const { token, expired } = res.data
          // 存放cookie
          document.cookie = `hexToken=${token};expires=${new Date(
              expired
            )}; path=/`
            //   window.location = "products.html";
          this.$router.push('/admin')
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  }
}
</script>
