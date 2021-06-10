<template>
  <ul>
    <li
      class="frame"
      v-for="(f, index) in frames"
      :key="index"
      :class="frame === index + 1 ? 'selected' : ''"
      @click="selectFrame(index + 1)"
    >
      <EditorSvgview :doc="index" />
    </li>

    <li class="frame add" @click="add()">+</li>
  </ul>
</template>

<script>
import svgview from "./svgview.vue";
export default {
  components: { svgview },
  computed: {
    frame() {
      return this.$store.state.frameSelected;
    },
    frames() {
      return this.$store.state.frames;
    },
  },
  methods: {
    add() {
      this.$store.commit("addFrame");
    },
    selectFrame(f) {
      this.$store.commit("selectFrame", f);
    },
  },
};
</script>    

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.frame {
  display: inline-block;

  border: 2px solid var(--color);
  cursor: pointer;
  margin: 5px;
}

.selected {
  border: 2px dashed var(--color);
}

.add {
  display: inline-block;
  width: 50px;
  height: 50px;
  cursor: pointer;

  border: 2px solid transparent;
  font-size: 30px;

  text-align: center;
}
</style>