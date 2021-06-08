<template>
  <div>
    <div>
      Canvas - {{ width }} - {{ height }} - {{ pixelWH }} - {{ x }} - {{ y }} -
      {{ clickElement }}
    </div>
    <div class="canvas">
      <div class="boxBlock">
        <div class="fileBlock" v-for="indexx in x" :key="`x-${indexx}`">
          <div
            class="pixelBlock"
            v-for="indexy in y"
            :key="`y-${indexy}`"
            :style="`width:${pixelWH}px; height:${pixelWH}px;`"
            :data-pos-x="indexy"
            :data-pos-y="indexx"
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
    x() {
      return this.height / this.pixelWH;
    },
    y() {
      return this.width / this.pixelWH;
    },
  },
  data() {
    return {
      elements: null,
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
  },
  methods: {
    start() {
      this.elements = document.getElementsByClassName("pixelBlock");
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].addEventListener("mouseenter", (e) => {
          if (this.clickElement) {
            e.target.style.background = `#${this.color}`;
          }
        });
        this.elements[i].addEventListener("mousedown", (e) => {
          e.target.style.background = `#${this.color}`;
        });
      }
    },
  },
};
</script>    
<style scoped>
.canvas {
  display: flex;
}
.boxBlock {
  border: 2px solid var(--bg);
  margin: auto;
}

.fileBlock {
  display: flex;
}
.pixelBlock {
  display: block;
  border: 1px solid var(--bg);
}
</style>