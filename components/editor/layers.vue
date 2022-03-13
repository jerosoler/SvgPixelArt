<template>
  <ul>
    <li v-for="(f, index) in frames[frame-1]" :key="index"  :class="layer == index+1 ? `selected` : ``" @click="selectLayer(index+1)">{{f.name}}</li>
    <li class="layer add" @click="add()">+</li>
  </ul>
</template>
<script>
export default {
  computed: {  
    frame() {
      return this.$store.state.frameSelected;
    },
    frames() {
      return this.$store.state.frames;
    },
    layer() {
      return this.$store.state.layerSelected;
    },
  },
   methods: {
    add() {
      this.$store.commit("addLayer");
    },
    selectLayer(index) {
      this.$store.commit("selectLayer", index);
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin-top: 3px;
  margin-bottom: 3px;
  padding: 3px;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
}
.selected {
  border: 3px dashed var(--color);
}
.add {
 cursor: url('/icons/Pointer.svg') 4 0, pointer;
}
</style>