<template>
  <Header />
  <RouterView v-if="routerAlive" />
  <ScrollToTop />
  <Footer />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import { ref, provide, nextTick } from 'vue'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.vue'

let routerAlive = ref(true)

const reload = () => {
  routerAlive.value = false
  nextTick(() => (routerAlive.value = true))
}

provide('reload', reload)
</script>
