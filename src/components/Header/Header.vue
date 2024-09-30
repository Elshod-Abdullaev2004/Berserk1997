<template>
  <transition name="nav__fade">
    <nav class="nav" v-if="show">
      <router-link class="nav__logo" to="/">
        <img src="@/assets/images/berserk1997.png" alt="berserk1997" />
      </router-link>
      <!-- Обычное меню -->
      <ul class="nav__list" v-if="!isMobile">
        <li v-for="link in links" :key="link.title">
          <router-link @click="closeMenu" :to="link.url" class="nav__list_link">{{
            link.title
          }}</router-link>
        </li>
      </ul>
      <!-- Мобильное меню -->
      <div v-if="isMobile">
        <button class="burger" @click="toggleMenu">
          <span class="burger-line" :class="{ active: isMenuOpen }"></span>
          <span class="burger-line" :class="{ active: isMenuOpen }"></span>
          <span class="burger-line" :class="{ active: isMenuOpen }"></span>
        </button>
        <nav :class="{ 'nav-menu': true, open: isMenuOpen }">
          <ul class="nav__list">
            <li v-for="link in links" :key="link.title">
              <router-link @click="closeMenu" :to="link.url" class="nav__list_link">{{
                link.title
              }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isMobile = ref(false)
const links = ref([
  { title: 'Главная', url: '/' },
  { title: 'Серии', url: '/series' },
  { title: 'Персонажи', url: '/characters' },
  { title: 'Цитаты', url: '/quotes' },
  { title: 'Обои', url: '/wallpapers' },
  { title: 'История создания', url: '/history' }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

const show = ref(false) // Реактивная переменная для отображения nav

onMounted(() => {
  // Инвертировать значение show при загрузке страницы
  show.value = !show.value
})
</script>
