<template>
  <div>
    Filex x:<br />
    <input type="range" v-model="widthX" min="2" max="1000" /> {{ widthX }}
    <br />
    Files y:<br />
    <input type="range" v-model="heightY" min="2" max="1000" /> {{ heightY }}
    <br />
    Seconds:<br />
    <input type="range" v-model="sec" min="0.1" max="50" step="0.10" />
    {{ sec }}s
    <br />
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
  data() {
    return {
      pixel: 0,
      widthX: 0,
      heightY: 0,
      sec: 0,
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