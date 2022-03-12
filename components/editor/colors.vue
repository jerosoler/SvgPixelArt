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
    <input type="color" class="inputcolor" :class="color == colorinput ? 'selected' : ''" :value="`#${inputcolor}`" @click="colorinput" @change="colorinput" >
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
      inputcolor: "FF1486",
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
    colorinput(event) {
      const c = event.target.value.substring(1);
      this.inputcolor = c;
      this.$store.commit("selectColor", c);
      
      console.log(this.inputcolor, this.color);
      if(this.inputcolor == this.color) {
        console.log("yes");
      }
    },
    selectColor(c) {
      this.$store.commit("selectColor", c);
    }
  },
};
</script>

<style scoped>
.inputcolor {
  width: 100%;
  height: 40px;
  border: 0px;
  margin: 0px;
  margin-top: 5px;
  padding: 0px;
  background: transparent;
  box-shadow: none;
  outline: none;
  cursor: url('/icons/Pointer.svg') 4 0, pointer;
}
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
  background: repeating-conic-gradient(var(--canvas-one) 0% 25%, var(--canvas-two) 0% 50%) 50% /
    20px 20px;
}

.selected {
  border: 3px dashed var(--color);
}
</style>
