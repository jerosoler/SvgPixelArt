<template>
  <header>
    <div id="logo"><img src="/SvgPixelArt/icons/Logo.svg" height="40px" alt="SVG Pixel Art Logo"></div>
    <div class="options">
      <div
        v-if="$colorMode.preference !== 'light'"
        @click="$colorMode.preference = 'light'"
        class="darkmode light"
      >
        
      </div>
      <div v-else @click="$colorMode.preference = 'dark'" class="darkmode dark"></div>
      <div v-if="!fullscreen" @click="fullscreenOpen" class="fullscreen fullscreenOpen"></div>
      <div v-else @click="fullscreenClose" class="fullscreen fullscreenClose"></div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      fullscreen: false,
    }
  },
  mounted() {
    document.addEventListener('fullscreenchange', this.changeScreen, false);
  },
  methods: {
    fullscreenOpen() {
      //const ele = document.getElementById("editor");
      const ele = document.documentElement;
      ele.requestFullscreen();
    },
    fullscreenClose() {
      document.exitFullscreen();
    },
    changeScreen() {
      if (document.fullscreenElement) {
        this.fullscreen = true;
      } else {
        this.fullscreen = false;
      }
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
  cursor: url('/SvgPixelArt/icons/Pointer.svg') 4 0, pointer;
}

.light {
  background-image: url('/SvgPixelArt/icons/Day.svg');
}
.dark {
  background-image: url('/SvgPixelArt/icons/Night.svg');
}
.fullscreenOpen {
  background-image: url('/SvgPixelArt/icons/Fullscreen.svg');
}
.fullscreenClose {
  background-image: url('/SvgPixelArt/icons/Downscreen.svg');
}
</style>