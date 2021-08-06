<template>
    <div class="weapons">
    
    <div
      v-for="w in weapons"
      :key="w"
      @click="selectWeapon(w)"
      class="weapon"
      :class="weapon === w ? `selected ` : ``"
    >{{w}}</div>
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
  display: block;
  width: 100%;
  height: 40px;
  cursor: pointer;
  color: var(--color);
  font-size: 12px;
  line-height: 40px;
  /*border: 2px solid var(--bg);
  margin: 5px;*/
}

.selected {
  border: 3px dashed var(--color);
}
</style>