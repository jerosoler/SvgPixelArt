<template>
  <div class="colors">
    <div
      v-for="c in colors"
      :key="c"
      @click="selectColor(c)"
      class="color"
      :class="color === c ? `selected ${c}` : `${c}`"
      :style="`background: #${c};`"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    color() {
      return this.$store.state.colorSelected;
    },
  },
  data() {
    return {
      colors: [
        "transparent",
        "ff0000",
        "ff9900",
        "000000",
        "cacaca",
        "004b8c",
        "fd7fff",
        "99ee00",
        "a900da",
        "e8ff01",
      ],
    };
  },
  methods: {
    selectColor(c) {
      this.$store.commit("selectColor", c);
    },
  },
};
</script>

<style scoped>
.colors {
  display: block;
  font-size: 0;
}
.color {
  display: inline-block;
  width: 25%;
  height: 40px;
  cursor: pointer;
  /*border: 2px solid var(--bg);
  margin: 5px;*/
}

.color.transparent {
  background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% /
    20px 20px;
}

.selected {
  border: 3px dashed var(--color);
}
</style>
