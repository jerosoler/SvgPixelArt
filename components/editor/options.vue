<template>
  <div>
    <label for="optionsfilex">Files x:</label>
    <input id="optionsfilex" type="range" name="filex" v-model="widthX" min="2" max="100" /> {{ widthX }}
    
    <label for="optionsfiley">Files y:</label>
    <input id="optionsfiley" type="range" name="filey"  v-model="heightY" min="2" max="100" /> {{ heightY }}
    
    <label for="optionsseconds">Seconds:</label>
    <input id="optionsseconds" type="range" name="seconds" v-model="sec" min="0.1" max="50" step="0.10" />
    {{ sec }}s
    <button @click="update">Update</button>
  </div>
</template>
<script>
export default {
  computed: {
    pixelWH() {
      return this.$store.state.pixelWH;
    },
    width() {
      return this.$store.state.width;
    },
    height() {
      return this.$store.state.height;
    },
    seconds() {
      return this.$store.state.seconds;
    },
  },
  watch: {
    width() {
      this.widthX = this.width;
    },
    height() {
      this.heightY = this.height;
    },
    seconds() {
      this.sec = this.seconds;
    }
  },
  data() {
    return {
      pixel: this.pixelWH,
      widthX: this.width,
      heightY: this.height,
      sec: this.seconds,
    };
  },
  mounted() {
    this.pixel = this.pixelWH;
    this.widthX = this.width;
    this.heightY = this.height;
    this.sec = this.seconds;
  },
  methods: {
    update() {
      this.$store.commit("updateLayout", {
        pixel: parseInt(this.pixel),
        width: parseInt(this.widthX),
        height: parseInt(this.heightY),
        seconds: parseFloat(this.sec),
      });
    },
  },
};
</script>