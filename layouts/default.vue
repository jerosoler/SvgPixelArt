<template>
  <div @mousedown="clickValue(true)" @mouseup="clickValue(false)">
    <TemplateTheHeader class="header" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  methods: {
    clickValue(value) {
      this.$store.commit("clickState", value);
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

.header {
  min-height: 60px;
  max-width: 1140px;
  margin: auto;
}
</style>
