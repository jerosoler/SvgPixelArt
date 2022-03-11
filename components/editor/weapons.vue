<template>
    <div class="weapons">
    
    <div
      v-for="w in weapons"
      :key="w"
      @click="selectWeapon(w)"
      class="weapon"
      :class="weapon === w ? `selected ` : ``"
      :style="`background-image: url(icons/${w}.svg);`"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    weapon() {
      return this.$store.state.weapon;
    }, 
  },
  data() {
      return {
          weapons: [
              'Pencil',
              'Paint',
          ]
      }
  },

  methods: {
    selectWeapon(w) {
      this.$store.commit("selectWeapon", w);
    },
  },
};
</script>

<style scoped>
.weapons {
  display: block;
  font-size: 0;
  
}
.weapon {
   display: inline-block;
   width: 25%;
   height: 40px;
   background-size: 30px;
   background-position: center center;
   background-repeat: no-repeat;
}
.weapon:hover {
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
}

.selected {
  border: 3px dashed var(--color);
}
</style>