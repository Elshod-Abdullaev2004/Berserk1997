<template>
  <transition name="hero__show" @after-enter="startOverlayTransition">
    <section class="hero" v-if="show">
      <div class="video-container">
        <video class="hero__video" poster="@/assets/images/hero-bg.jpg" autoplay muted loop>
          <source src="@/assets/video/main_bg_video.mp4" type="video/mp4" />
          Ваш браузер не поддерживает тег video.
        </video>
        <div class="overlay">
          <h1 class="title">Погружение в мир тьмы и судьбы</h1>
          <p class="text">
            Berserk (1997) — это история о войне, судьбе и воле к свободе. Аниме 1997 года остаётся
            одной из самых культовых адаптаций манги Кэнтаро Миуры. Следите за историями Гатса,
            Гриффита и Ястребов, переживая эпические битвы, интриги и падения.
          </p>
        </div>
      </div>
    </section>
  </transition>

  <section class="explore">
    <div class="container">
      <h2>Ознакомление</h2>
      <div class="flex">
        <div class="card">
          <div class="card__img"><img src="@/assets/images/home-series-bg.jpg" alt="Серии" /></div>
          <div class="card__info">
            <h3>Серии</h3>
            <p>Посмотрите эпизоды аниме и погрузитесь в тёмную историю Берсерка.</p>
            <a href="episodes.html" class="button">Перейти</a>
          </div>
        </div>
        <div class="card reverse">
          <div class="card__img"><img src="@/assets/images/home-family.png" alt="Персонажи" /></div>
          <div class="card__info">
            <h3>Персонажи</h3>
            <p>Узнайте больше о героях и злодеях, которые делают Berserk таким запоминающимся.</p>
            <a href="characters.html" class="button">Перейти</a>
          </div>
        </div>
        <div class="card">
          <div class="card__img"><img src="@/assets/images/home-family.png" alt="Обои" /></div>
          <div class="card__info">
            <h3>Обои</h3>
            <p>
              Скачайте лучшие обои по Berserk для вашего рабочего стола или мобильного устройства.
            </p>
            <a href="wallpapers.html" class="button">Перейти</a>
          </div>
        </div>
        <div class="card reverse">
          <div class="card__img">
            <img src="@/assets/images/home-family.png" alt="История создания" />
          </div>
          <div class="card__info">
            <h3>История создания</h3>
            <p>Узнайте о том, как создавалось это культовое аниме и его связь с мангой.</p>
            <a href="history.html" class="button">Перейти</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const show = ref(false) // Реактивная переменная для отображения nav

onMounted(() => {
  // Инвертировать значение show при загрузке страницы
  show.value = true // Установите в true, чтобы запустить родительский переход
})
</script>
