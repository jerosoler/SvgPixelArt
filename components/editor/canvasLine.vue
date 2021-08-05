<template>
  <div>
    <div class="canvas">
      <canvas
        @click="paintMouseDown"
        ref="canvas"
        :width="width * scale"
        :height="height * scale"
        :style="`background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% / ${scale}px ${scale}px;`"
      />
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
    clickElement(value) {
      if (value) {
        this.paintMouseDown();
      } else {
        this.paintMouseUp();
      }
    },
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
      scale: 20,
      ctx: null,
      pos: {
        x: 0,
        y: 0,
      },
    };
  },
  mounted() {
    this.$refs.canvas.addEventListener(
      "mousemove",
      this.paintMouseEnter,
      false
    );
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
    this.ctx = this.$refs.canvas.getContext("2d");
    //this.ctx.scale(this.scale, this.scale);
    /*
    this.$refs.svg.addEventListener(
      "mouseenter",
      function (e) {
        console.log(e);
      },
      false
    ); */
    this.$nextTick(() => {
      this.start();
      this.loadDefaultData();
    });
  },
  methods: {
    clickValue(value) {
      this.$store.commit("clickState", value);
    },
    zoomIn() {
      if (this.scale < 40) {
        this.scale++;
        this.$nextTick(() => {
          this.loadDefaultData();
        });
      }
    },
    zoomOut() {
      if (this.scale > 1) {
        this.scale--;
        this.$nextTick(() => {
          this.loadDefaultData();
        });
      }
    },
    clearData() {
      this.ctx.clearRect(
        0,
        0,
        this.width * this.scale,
        this.height * this.scale
      );
    },
    start() {},
    paintMouseEnter: function (e) {
      this.pos.x = e.layerX;
      this.pos.y = e.layerY;
      if (this.clickElement) {
        this.paint();
      }
    },
    paintMouseDown: function (e) {
      this.ctx.beginPath();
      //this.ctx.moveTo(e.clientX, e.clientY);
      this.paint();
    },
    paintMouseUp: function (e) {
      this.ctx.closePath();
    },
    paint() {
      const x = parseInt(this.pos.x / this.scale) + 1;
      const y = parseInt(this.pos.y / this.scale) + 1;
      const color = this.color;
      const frame = this.frameSelected - 1;
      /*
      if (this.color === "transparent") {
        //element.style.background = null;
        this.ctx.strokeStyle = "transparent";
        this.ctx.fillStyle = "transparent";
        this.ctx.lineWidth = 0;
        this.ctx.clearRect(
          (x - 1) * this.scale,
          (y - 1) * this.scale,
          this.scale,
          this.scale
        );
      } else {
        //element.style.background = `#${this.color}`;
        //this.ctx.beginPath();

        this.ctx.strokeStyle = "#" + this.color;
        //this.ctx.strokeStyle = "transparent";

        //this.ctx.lineWidth = this.scale;
        this.ctx.lineWidth = this.scale;
        

     
        this.ctx.moveTo(
          (x - 1) * this.scale + this.scale / 2,
          (y - 1) * this.scale + this.scale / 2
        );
        this.ctx.lineTo(
          (x - 1) * this.scale - this.scale / 2,
          (y - 1) * this.scale + this.scale / 2
        );
        //console.log(x, y, this.scale);

        this.ctx.stroke();
      }
      */

      this.saveColor(x, y, color, frame);
    },
    saveColor(x, y, color, frame) {
      this.$store.commit("addPixel", { x, y, color, frame });
      this.loadDefaultData();
    },
    loadDefaultData() {
      const colors = this.frames[this.frameSelected - 1][0];

      Object.keys(colors).forEach((color, index) => {
        this.ctx.beginPath();
        //this.ctx.strokeStyle = "#" + color;
        this.ctx.strokeStyle = "transparent";
        this.ctx.fillStyle = "#" + color;
        this.ctx.lineWidth = 0;
        const pixels = this.frames[this.frameSelected - 1][0][color].pixels;
        pixels.forEach((ele) => {
          const x = ele.x;
          const y = ele.y;

          //this.ctx.moveTo(x - 1 * this.scale, y - 1 * this.scale);

          this.ctx.rect(
            (x - 1) * this.scale,
            (y - 1) * this.scale,
            this.scale,
            this.scale
          );
        });
        this.ctx.stroke();
        this.ctx.fill();
      });
    },
  },
};
</script>    
<style scoped>
.canvas {
  position: relative;
  min-height: 644px;
  max-height: 644px;
  width: 100%;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

canvas {
  position: relative;
  margin: auto;
  display: block;
}
/*.canvas {
  display: flex;
  max-width: 100%;
  min-height: 644px;
  max-height: 644px;
  overflow: auto;
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;
}

canvas {
  background: white;
  background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% / 1px
    1px;
} */
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

.pixelBlock:hover {
  border: 1px solid;
}
</style>