<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <FooterView />
</template>

<script setup>
import { ref } from 'vue'
import router from '../router/index'

import Navbar from '@/components/NavbarComponent.vue'
import FooterView from '@/components/FooterComponent.vue'
import { RouterView, useRoute } from 'vue-router'

const currentRoute = useRoute()
const isRootRoute = ref(currentRoute.path === '/')
if (isRootRoute.value.path !== '/') {
  router.push('/')
}
</script>
<style scoped>
main{
  margin-top: 85px;
  position: relative;
  min-height: 100vh;
}
</style>
