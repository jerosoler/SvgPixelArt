<template>
  <div class="editor">
    <div class="container">
      <div class="headerEditor">
        <EditorHeader />
      </div>
      <div class="bodyEditor">
        <div class="column-left">
          <EditorBox title="Frames">
            <EditorFrames />
          </EditorBox>
          <EditorBox title="Colors">
            <EditorColors />
          </EditorBox>
        </div>
        <div class="column-center">
          <EditorBox title="Canvas">
            <EditorCanvas />
          </EditorBox>

          <EditorBox title="Layers"> </EditorBox>
        </div>
        <div class="column-right">
          <EditorBox title="Preview">
            <EditorPreview />
          </EditorBox>
          <EditorBox title="Options">
            <EditorOptions />
          </EditorBox>
        </div>
      </div>
      <div class="footerEditor"></div>
    </div>
  </div>
</template>

<style scoped>
.editor {
  display: block;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
.container {
  display: block;
  position: relative;
  border-radius: 4px;

  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  background: var(--bg-editor);
}
.headerEditor {
  text-align: right;
  height: 24px;
}
.bodyEditor {
  display: flex;
  justify-content: space-between;
}

.column-left {
  max-width: 400px;
  display: flex;
}
.column-center {
  width: 100%;
}
.column-right {
  min-width: 250px;
  width: 250px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
}
</style>