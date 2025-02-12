<template>
  <div :class="$style.TheSettings">
    <h1>Настройки</h1>
    <div :class="$style.inputs">
      <div :class="$style.inputWrapper">
        <label :class="$style.label" for="height">Высота поля</label>
        <input
          v-model="fieldSize.height"
          id="height"
          type="range"
          min="100"
          max="800"
          step="20"
        />
      </div>
      <div :class="$style.inputWrapper">
        <label :class="$style.label" for="width">Ширина поля</label>
        <input
          v-model="fieldSize.width"
          id="width"
          type="range"
          min="100"
          max="800"
          step="20"
        />
      </div>
      <div :class="$style.inputWrapper">
        <label :class="$style.label" for="speed">Начальная скорость</label>
        <input id="speed" type="range" min="100" max="800" step="20" />
      </div>
    </div>
    <router-link class="button" to="/">Вернуться в меню</router-link>
  </div>
</template>
<script setup>
import { useGame } from '@/composables/game'

const { fieldSize } = useGame()
</script>
<style lang="scss">
.TheSettings {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.label {
  color: vars.$title;
}

.inputs {
  display: flex;
}

.inputWrapper {
  display: flex;
  flex-direction: column;

  //&:first-child {
  //  margin-right: 20px;
  //}
}
</style>
