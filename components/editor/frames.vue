<template>
  <ul>
    <li
      class="frame"
      v-for="(f, index) in frames"
      :key="index"
      :class="frame === index + 1 ? 'selected' : ''"
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
  },
};
</script>    

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 100%;
}
.frame {
  border: 2px solid var(--color);
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
  margin-bottom: 10px;
}

.selected {
  border: 2px dashed var(--color);
}

.add {
  display: block;
  width: 50px;
  height: 50px;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
  border: none;
  line-height: 50px;
  font-size: 24px;

  text-align: center;
  margin-bottom: 0px;
}
</style>