<template>
  <div class="home">
    <div class="home__title">
      <h1>Snake</h1>
      <h2>JS Edition</h2>
      <router-link to="/game" class="button">Начать</router-link>
      <router-link to="/settings" class="button">Настройки</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'home',
  setup() {


    return {}
  }
}
</script>

<style lang="scss">
.home {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > :not(:last-child) {
      margin-bottom: 8px;
    }
  }
}
</style>
