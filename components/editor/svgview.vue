<template>
  <!--<div
    :style="`width: ${width * pixelWH * 2}px; height:${
      height * pixelWH * 2
    }px; width 100%; min-width: 50px; height: auto; display:flex;`"
  > -->
  <div class="box">
    <div class="frame">
      <div class="number">{{ doc + 1 }}</div>
      <div class="duplicate" @click="duplicate"></div>
      <div class="del" @click="del" v-if="this.$store.state.frames.length > 1"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        :viewBox="`0 0 ${width * pixelWH} ${height * pixelWH}`"
        @click="selectFrame(doc + 1)"
      >
        <path
          v-for="(c, index) in frame"
          :key="index"
          :style="`fill:#${index}`"
          :d="transformToSvg(c.pixels)"
        ></path>
      </svg>
    </div>
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
      return this.$store.state.frames[this.doc][0].colors;
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
    selectFrame(f) {
      this.$store.commit("selectFrame", f);
    },
    duplicate() {
      this.$store.commit("duplicateFrame", this.doc);
    },
    del() {
      this.$store.commit("delFrame", this.doc);
    },
  },
};
</script>

<style scoped>
.box {
  display: block;
  position: relative;
}
.frame {
  width: 100%;
  height: auto;
  min-height: 50px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

svg {
  background: repeating-conic-gradient(var(--canvas-one) 0% 25%, var(--canvas-two) 0% 50%) 50% /
    20px 20px;
}
.number {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color);
  color: var(--bg);
  min-width: 24px;
  height: 24px;
  border-radius: 0px 0px 4px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.duplicate {
  position: absolute;
  bottom: 0;
  right: 0;
  background: var(--color);
  color: var(--bg);
  width: 24px;
  height: 24px;
  border-radius: 4px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.del {
  position: absolute;
  top: 0;
  right: 0;
  background: var(--color);
  color: var(--bg);
  width: 24px;
  height: 24px;
  border-radius: 0px 0px 0px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.number,
.del,
.duplicate {
  opacity: 0;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center center;
}
.del {
  background-image: url('/SvgPixelArt/icons/Delete.svg');
}
.duplicate {
  background-image: url('/SvgPixelArt/icons/Duplicate.svg');
}

.frame:hover .number,
.frame:hover .del,
.frame:hover .duplicate {
  opacity: 1;
}
</style>
