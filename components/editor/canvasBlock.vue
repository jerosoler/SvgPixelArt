<template>
  <div>
    <div class="canvas" 
    >
      <div class="boxBlock"  ref="canvas"
     :style="`transform: scale(${scale}); min-width:${width * 20 * scale}px; height:${height * 20 * scale}px; transform-origin: ${scale < 1 ? width * 20 * scale : 0 }px 0px; max-height: 644px;`">
        <div class="fileBlock" v-for="indexx in height" :key="`x-${indexx}`">
          <div
            class="pixelBlock"
            v-for="indexy in width"
            :key="`y-${indexy}`"
            :style="`width:${pixelWH * 20}px; height:${pixelWH * 20}px;`"
            :data-pos-x="indexy"
            :data-pos-y="indexx"
            @mouseenter="paintMouseEnter"
            @mousedown="paintMouseDown"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    clickElement() {
      return this.$store.state.clickValue;
    },
    color() {
      return this.$store.state.colorSelected;
    },
    width() {
      return this.$store.state.width;
    },
    height() {
      return this.$store.state.height;
    },
    pixelWH() {
      return this.$store.state.pixelWH;
    },
    frames() {
      return this.$store.state.frames;
    },
    frameSelected() {
      return this.$store.state.frameSelected;
    },
  },
  watch: {
    width() {
      this.$nextTick(() => {
        this.clearData();
        this.start();
        this.loadDefaultData();
      });
    },
    height() {
      this.$nextTick(() => {
        this.clearData();
        this.start();
        this.loadDefaultData();
      });
    },
    frameSelected() {
      this.clearData();
      this.start();
      this.loadDefaultData();
    },
    frames() {
      this.clearData();
      this.start();
      this.loadDefaultData();
    },
  },
  data() {
    return {
      elements: null,
      scale: 1,
    };
  },
  mounted() {
    /*
    this.$refs.svg.addEventListener(
      "mouseenter",
      function (e) {
        console.log(e);
      },
      false
    ); */
    this.start();
    this.loadDefaultData();
     this.$refs.canvas.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          this.zoomIn();
        } else {
          this.zoomOut();
        }
      },
      false
    );
  },
  methods: {
    zoomIn() {
      if (this.scale < 2) {
        this.scale+=0.05;
      }
    },
    zoomOut() {
      if (this.scale > 0.4) {
        this.scale-=0.05;
      }
    },
    clearData() {
      for (var i = 0; i < this.elements.length; i++) {
        /*this.elements[i].removeEventListener(
          "mouseenter",
          this.paintMouseEnter
        );
        this.elements[i].removeEventListener("mousedown", this.paintMouseDown);*/
        this.elements[i].style.background = null;
      }
    },
    start() {
      this.elements = document.getElementsByClassName("pixelBlock");
      /*for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].addEventListener("mouseenter", this.paintMouseEnter);
        this.elements[i].addEventListener("mousedown", this.paintMouseDown);
      }*/
    },
    paintMouseEnter: function (e) {
      if (this.clickElement) {
        this.paint(e.target);
      }
    },
    paintMouseDown: function (e) {
      this.paint(e.target);
    },
    paint(element) {
      /*if (this.color === "transparent") {
        element.style.background = null;
      } else {
        element.style.background = `#${this.color}`;
      } */
      const x = parseInt(element.getAttribute("data-pos-x"));
      const y = parseInt(element.getAttribute("data-pos-y"));
      const color = this.color;
      const frame = this.frameSelected - 1;

      //M0,0 50,0 50,50 0,50;

      /*
      const coordinates = `M${(x - 1) * this.pixelWH},${
        (y - 1) * this.pixelWH
      } ${x * this.pixelWH},${(y - 1) * this.pixelWH} ${x * this.pixelWH},${
        y * this.pixelWH
      } ${(x - 1) * this.pixelWH},${y * this.pixelWH}`;
      //console.log(`${x} - ${y} - ${coordinates}`); */

      this.saveColor(x, y, color, frame);
    },
    saveColor(x, y, color, frame) {
      this.$store.commit("addPixel", { x, y, color, frame });
      this.loadDefaultData();
    },
    loadDefaultData() {
      this.clearData();
      const colors = this.frames[this.frameSelected - 1][0];

      Object.keys(colors).forEach((color, index) => {
        const pixels = this.frames[this.frameSelected - 1][0][color].pixels;
        pixels.forEach((ele) => {
          const x = ele.x;
          const y = ele.y;
          // if (this.x <= x && this.y <= y) {
          const element = document.querySelector(
            `[data-pos-x='${x}'][data-pos-y='${y}']`
          );
          element.style.background = `#${color}`;
          //}
        });
      });
    },
  },
};
</script>    
<style scoped>
.canvas {
  display: flex;
  max-width: 100%;
  min-height: 644px;
  max-height: 644px;
  overflow: auto;
  display: flex;
  align-items: center;
  align-content: center;
}
.boxBlock {
  /* border: 2px solid var(--bg);*/
  margin: auto;
}

.fileBlock {
  display: flex;
}
.pixelBlock {
  user-select: none;
  display: block;
  border: 0.3px solid var(--bg);
  background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% /
    20px 20px;
}


</style>