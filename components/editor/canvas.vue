<template>
  <div class="beforecanvas">
    <div class="canvas" >
      <div class="precanvas">
       <canvas
        @click="paintMouseDown"
        class="canvasMouse"
        ref="canvasMouse"
        :width="width * scale"
        :height="height * scale"
        :style="`background: transparent;`"
      />
      <canvas
        @click="paintMouseDown"
        @click.right="paintMouseDown"
        @mouseleave="clearMouseShadow"
        ref="canvas"
        :width="width * scale"
        :height="height * scale"
        :class="weapon"
        :style="`background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% / ${scale}px ${scale}px;`"
      />
      </div>
    </div>
    <div class="footer">
      <span>Frame: {{frameSelected}} / {{frames.length}}</span>
      <span>Scale: {{scale}}</span>
      <span>Weapon: {{weapon}}</span>
      <span>Color:
        <span v-if="color !='transparent'" :style="`color: #${color};`">#{{color}}</span>
        <span v-else>Transparent</span>
      </span>
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
    weapon() {
      return this.$store.state.weapon;
    }, 
    clickButton() {
      return this.$store.state.clickButton;
    }, 
  },
  watch: {
    clickElement(value) {
      if (value) {
        //this.paintMouseDown();
      } else {
        this.paintMouseUp();
      }
    },
    width() {
      this.$nextTick(() => {
        this.clearData();
        this.loadDefaultData();
      });
    },
    height() {
      this.$nextTick(() => {
        this.clearData();
        this.loadDefaultData();
      });
    },
    frameSelected() {
      this.clearData();
      this.loadDefaultData();
    },
    frames() {
      this.clearData();
      this.loadDefaultData();
    },
  },
  data() {
    return {
      elements: null,
      scale: 20,
      ctx: null,
      ctxMouse: null,
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
    this.ctxMouse = this.$refs.canvasMouse.getContext("2d");
    this.$nextTick(() => {
      this.loadDefaultData();
    });
  },
  methods: {
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
    paintMouseEnter: function (e) {
      this.paintMouseShadow();
      this.pos.x = e.layerX;
      this.pos.y = e.layerY;
      if (this.clickElement) {
        this.paint();
      }
    },
    paintMouseDown: function (e) {
      //this.ctx.moveTo(e.clientX, e.clientY);
      this.paint();
    },
    paintMouseUp: function (e) {
      //this.ctx.closePath();
    },
    clearMouseShadow() {
      this.ctxMouse.clearRect(0,0,this.width*this.scale,this.height*this.scale);
    },
    paintMouseShadow() {
      const x = parseInt(this.pos.x / this.scale) + 1;
      const y = parseInt(this.pos.y / this.scale) + 1;
      this.clearMouseShadow();
     
      this.ctxMouse.beginPath();
      this.ctxMouse.strokeStyle = "#000";
      this.ctxMouse.fillStyle = "transparent" ;
      this.ctxMouse.lineWidth = 1;
      this.ctxMouse.rect(
        (x - 1) * this.scale,
        (y - 1) * this.scale,
        this.scale,
        this.scale
      );
      this.ctxMouse.stroke();
      this.ctxMouse.fill();

    },
    paint() {
      const x = parseInt(this.pos.x / this.scale) + 1;
      const y = parseInt(this.pos.y / this.scale) + 1;
      let color = this.color;
      const frame = this.frameSelected - 1;
      if(this.clickButton === 2) {
        color = "transparent";
      }
      if (color === "transparent" || this.clickButton === 2) {
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
        //element.style.background = `#${color}`;
        this.ctx.beginPath();

        //this.ctx.strokeStyle = "#" + color;
        this.ctx.strokeStyle = "transparent";
        this.ctx.fillStyle = "#" + color;

        this.ctx.lineWidth = 0;
        //this.ctx.lineTo(e.layerX, e.layerY);
        this.ctx.rect(
          (x - 1) * this.scale,
          (y - 1) * this.scale,
          this.scale,
          this.scale
        );
        this.ctx.stroke();
        this.ctx.fill();
      }

      this.saveColor(x, y, color, frame);
    },
    saveColor(x, y, color, frame) {
      this.$store.commit("addPixel", { x, y, color, frame });
    },
    loadDefaultData() {
      const colors = this.frames[this.frameSelected - 1][0];

      Object.keys(colors).forEach((color, index) => {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "transparent";
        this.ctx.fillStyle = "#" + color;
        this.ctx.lineWidth = 0;
        const pixels = this.frames[this.frameSelected - 1][0][color].pixels;
        pixels.forEach((ele) => {
          const x = ele.x;
          const y = ele.y;
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
.beforecanvas {
  display: block;
  position:relative;
  height: 100%;
}
.canvas {
  position: relative;
  /*min-height: 644px;
  max-height: 644px;*/
  width: 100%;
  height: calc(100% - 70px);
  overflow: auto;
  margin: 0 auto;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.precanvas {
   position: relative;
  margin: auto;
  display: block;
}
.canvasMouse {
  position: absolute; 
  z-index: 3;
  pointer-events: none;
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
canvas:hover {
  cursor: crosshair;
  
}
canvas.Pencil:hover {
  cursor: url('/icons/Pencil.svg') 0 128, crosshair;
  
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

.pixelBlock:hover {
  border: 1px solid;
}
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-top: 5px;
   background-image: paint(pixelbox);
  --pixelbox-border: 3px;
  --pixelbox-border-radius: 1px;
  --pixelbox-border-color: var(--color);
  --pixelbox-background-color: var(--bg);
  --pixelbox-background-shadow-border: 0px;
  --pixelbox-background-shadow-color: var(--color);
  --pixelbox-background-shadow-position: bottom-right;
}

</style>