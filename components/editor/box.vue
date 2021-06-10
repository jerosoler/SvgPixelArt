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
  display: block;
  width: 100%;
  border-radius: 4px;
  background: var(--bg);
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
}
h4 {
  padding: 7px 10px;
  border-bottom: 1px solid var(--bg-editor);
}
.slot {
  padding: 10px;
}
</style>
