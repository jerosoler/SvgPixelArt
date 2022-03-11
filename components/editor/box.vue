<template>
  <div class="div">
    <h4>{{ title }}</h4>
    <div class="slot">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
.div {
  /*display: block;
  width: 100%;
  border-radius: 4px;
  background: var(--bg);
  margin-bottom: 20px;*/
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 3px  3px 3px  0px;
  margin-bottom: 20px;
  color: var(--color);
  background-image: paint(pixelbox);
  --pixelbox-border: 3px;
  --pixelbox-border-radius: 1px;
  --pixelbox-border-color: var(--color);
  --pixelbox-background-color: var(--bg);
  --pixelbox-background-shadow-border: 3px;
  --pixelbox-background-shadow-color: var(--color);
  --pixelbox-background-shadow-position: bottom-right;
}
h4 {
  padding: 10px 15px;
  border-bottom: 3px solid var(--color);
}
.slot {
  position:relative;
  display:block;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
}
</style>
