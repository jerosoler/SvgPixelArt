<template>
  <div
    :style="`width: ${(width * pixelWH) / 5}px; height:${
      (height * pixelWH) / 5
    }px;`"
  >
    <svg
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width * pixelWH} ${height * pixelWH}`"
    >
      <path
        v-for="(c, index) in frame"
        :key="index"
        :style="`fill:#${index}`"
        :d="transformToSvg(c.pixels)"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["doc"],
  computed: {
    width() {
      return this.$store.state.width;
    },
    height() {
      return this.$store.state.height;
    },
    pixelWH() {
      return this.$store.state.pixelWH;
    },
    frame() {
      return this.$store.state.frames[this.doc][0];
    },
  },

  methods: {
    transformToSvg(data) {
      let svg_moveto = "";
      data.forEach((pos) => {
        const x = pos.x;
        const y = pos.y;
        const pixelWH = this.pixelWH;

        const coordinates = `M${(x - 1) * pixelWH},${(y - 1) * pixelWH} ${
          x * pixelWH
        },${(y - 1) * pixelWH} ${x * pixelWH},${y * pixelWH} ${
          (x - 1) * pixelWH
        },${y * pixelWH} `;
        svg_moveto += coordinates;
      });
      return svg_moveto;
    },
  },
};
</script>

<style scoped>
svg {
  /*transform: scale(5);*/
}
</style>