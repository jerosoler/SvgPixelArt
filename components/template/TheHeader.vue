<template>
  <header>
    <div>Logo</div>
    <div class="right">
      <div
        v-if="$colorMode.preference !== 'light'"
        @click="$colorMode.preference = 'light'"
      >
        Light
      </div>
      <div v-else @click="$colorMode.preference = 'dark'">Dark</div>
    </div>
  </header>
</template>
<style scoped>
.right {
  float: right;
}
</style>