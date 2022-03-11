<template>
  <header>
    <div>Logo</div>
    <div class="options">
      <div
        v-if="$colorMode.preference !== 'light'"
        @click="$colorMode.preference = 'light'"
        class="darkmode light"
      >
        
      </div>
      <div v-else @click="$colorMode.preference = 'dark'" class="darkmode dark"></div>
      <div @click="fullscreen" class="fullscreen"></div>
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

.darkmode, .fullscreen {
  display: block;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 32px 32px;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
}

.light {
  background-image: url('/icons/Day.svg');
}
.dark {
  background-image: url('/icons/Night.svg');
}
.fullscreen {
  background-image: url('/icons/Fullscreen.svg');
}
</style>