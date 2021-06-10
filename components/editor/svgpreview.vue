<template>
  <div class="box">
    <svg
      width="100%"
      height="100%"
      :viewBox="`0 0 ${width * pixelWH} ${height * pixelWH}`"
    >
      <path d=" " v-for="c in colors" :key="c" :style="`fill:#${c};`">
        <animate
          attributeName="d"
          :dur="`${seconds}s`"
          repeatCount="indefinite"
          calcMode="discrete"
          :values="transformToSvgColor(c)"
        />
      </path>
      <!--<path
        v-for="(c, index) in frame"
        :key="index"
        :style="`fill:#${index}`"
        :d="transformToSvg(c.pixels)"
      ></path>-->
    </svg>
  </div>
</template>

<script>
export default {
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
    seconds() {
      return this.$store.state.seconds;
    },
    frames() {
      return this.$store.state.frames;
    },
    colors() {
      let colors = [];
      this.$store.state.frames.forEach((item) => {
        Object.keys(item[0]).forEach((colorlist) => {
          colors.push(colorlist);
        });
      });
      colors = [...new Set(colors)];
      return colors;
    },
  },

  methods: {
    transformToSvgColor(color) {
      let svg_moveto = "";

      this.frames.forEach((frame, index) => {
        if (this.frames[index][0][color] !== undefined) {
          const data = this.frames[index][0][color].pixels;
          data.forEach((pos) => {
            const x = pos.x;
            const y = pos.y;
            const pixelWH = this.pixelWH;

            const coordinates = `M${(x - 1) * pixelWH},${(y - 1) * pixelWH} ${
              x * pixelWH
            },${(y - 1) * pixelWH} ${x * pixelWH},${y * pixelWH} ${
              (x - 1) * pixelWH
            },${y * pixelWH}`;
            svg_moveto += coordinates;
          });
          svg_moveto += `;`;
        } else {
          svg_moveto += `M;`;
        }
      });

      return svg_moveto;
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  width: 100%;
  border: 2px solid var(--color);
}
</style>