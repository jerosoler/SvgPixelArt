<template>
<div>
  <ul>
    <li v-for="(f, index) in frames[frame-1]" :key="index" class="layer"  :class="layer == index+1 ? `selected` : ``" @click="selectLayer(index+1)">
      <input type="name" :value="f.name" @input="updateName(index,$event)">
      <div class="options">
        <div class="duplicate" @click="duplicate(index)"></div>
        <div class="del" @click="del(index)" v-if="frames[frame-1].length > 1"></div>
      </div>
    </li>
  </ul>
  <ul>
    <li class="add" @click="add()">+</li>
  </ul>
  </div>
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
    updateName(layer,e) {
      const value = e.target.value;
      console.log(value);
      this.$store.commit("renameLayer", {layer, value})
    },
    add() {
      this.$store.commit("addLayer");
    },
    selectLayer(index) {
      this.$store.commit("selectLayer", index);
    },
    duplicate(layer) {
      this.$store.commit("duplicateLayer", layer);
    },
    del(layer) {
      this.$store.commit("delLayer", layer);
    },
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
   display: flex;
  flex-direction: column-reverse;
}
li {
  margin-top: 3px;
  margin-bottom: 3px;
  height: 28px;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
  border: 2px solid var(--color);

}
.selected {
  border: 2px dashed var(--color);
}
.add {
 margin-top: 5px;
 font-size: 24px;
 text-align:center;
 cursor: url('/icons/Pointer.svg') 4 0, pointer;
 border: none;
}

input, input:focus {
  background: transparent;
  border: 0px;
  margin: 0px;
  padding: 0px;
  padding-left: 3px;
  height: 24px;
  line-height: 24px;
  width: 100%;
  outline: none;
  color: var(--color);
}
.del,
.duplicate {
  background: var(--color);
  color: var(--bg);
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center center;
}
.del {
  background-image: url('/icons/Delete.svg');
}
.duplicate {
  background-image: url('/icons/Duplicate.svg');
}
.layer {
  position:relative;
}
.options {
  opacity: 0;
  position:absolute;
   display: flex;
  justify-content: flex-end;
  align-items: center;
  top: 0px;
  right: 0px;
}
.layer:hover .options {
  opacity: 1;
}

</style>