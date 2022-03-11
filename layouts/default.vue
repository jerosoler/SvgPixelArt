<template>
  <div @mousedown="clickValueTrue" @mouseup="clickValueFalse">
    <TemplateTheHeader class="header" />
    <Nuxt />
    <TemplateTheFooter class="footerhome" />
  </div>
</template>
<script>
export default {
  mounted() {
    document.addEventListener('contextmenu', event => event.preventDefault());
  },
  methods: {
    clickValueTrue(event) {
      this.$store.commit("clickState", { clickValue: true, clickButton: event.button});
    },
     clickValueFalse(event) {
      this.$store.commit("clickState", { clickValue: false, clickButton: null});
    },
  },
};
</script>
<style>
html {
  /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; */
  font-family: "PS2P";
  font-size: 12px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.header, .footerhome {
  min-height: 60px;
  max-width: 1140px;
  margin: auto;
}
.footerhome {
  min-height: 40px;
}
</style>
