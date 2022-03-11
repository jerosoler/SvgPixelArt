<template>
  <div class="colors">
    <div
      v-for="c in colors"
      :key="c"
      @click="selectColor(c)"
      class="color"
      :class="color === c ? `selected ${c}` : `${c}`"
      :style="`background: #${c};`"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    color() {
      return this.$store.state.colorSelected;
    },
  },
  data() {
    return {
      colors: [
        "transparent",'ffffff', 'b8b5b9', '868188',
        '646365', '45444f', '313038', '000000',
        'fffba6','f9ec00','b9af00','958d00',
        'ffb775','ff8c24','e86f00','bf5b00',
        'ff9c8a','ff5c40','f02400','b91c00',
        'ff95e4','ff4ad2','ec00b1','a6007c',
        'e19bff','d166ff','af00fb','7b00b0',
        'c6bfff','8b82ff','4435ff','1100df',
        '6cdeff','1acbff','009ecc','006b8a',
        '9dffd6','0dff98','00c672','008a50',
        'd29f93','c78676','b96753','a35643',
        'a67340','845b33','654627','513920',
        
      ],
    };
  },
 
  methods: {
    selectColor(c) {
      this.$store.commit("selectColor", c);
    }
  },
};
</script>

<style scoped>
.colors {
  display: block;
  font-size: 0;
}
.color {
  display: inline-block;
  width: 25%;
  height: 40px;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
  /*border: 2px solid var(--bg);
  margin: 5px;*/
}

.color.transparent {
  background: repeating-conic-gradient(#4c4c4c 0% 25%, #555555 0% 50%) 50% /
    20px 20px;
}

.selected {
  border: 3px dashed var(--color);
}
</style>
