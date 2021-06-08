<template>
  <div class="editor">
    <div class="container">
      <div class="column-left">
        <EditorColors />
      </div>
      <div class="column-center">
        <EditorCanvas />
        <EditorFrames />
      </div>
      <div class="column-right">
        <EditorPreview />
        <EditorOptions />
      </div>
    </div>
  </div>
</template>

<style scoped>
.editor {
  border-radius: 4px;
  border: 1px solid red;
  padding: 10px;
}
.container {
  display: flex;
  justify-content: space-between;
}
.column-left {
  width: 150px;
  background: red;
  padding: 0px 10px;
}
.column-center {
  width: 100%;
  background: green;
  padding: 0px 50px;
}
.column-right {
  width: 400px;
  background: blue;
  padding: 0px 10px;
}
</style>