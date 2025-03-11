<template>
  <div class="game">
    <field />
  </div>
</template>

<script lang="ts">
import {Field} from "@/widgets/field";

export default {
  name: 'game',
  components: { Field },
}
</script>

<style lang="scss">
.game {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
