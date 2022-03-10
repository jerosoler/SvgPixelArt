<template>
  <header>
    <div>Logo</div>
    <div class="options">
      <div
        v-if="$colorMode.preference !== 'light'"
        @click="$colorMode.preference = 'light'"
      >
        Light
      </div>
      <div v-else @click="$colorMode.preference = 'dark'">Dark</div>
      <div @click="fullscreen">Fullscreen</div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    fullscreen() {
      const ele = document.getElementById("editor");
      ele.requestFullscreen();
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>