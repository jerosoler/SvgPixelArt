<template>
  <div class="editor">
    <div class="container">
      <div class="headerEditor">
        <EditorHeader />
      </div>
      <div class="bodyEditor">
        <div class="column-pre-left">
          <EditorBox title="Frames">
            <EditorFrames />
          </EditorBox>
        </div>
        <div class="column-left">
          <EditorBox title="Colors">
            <EditorColors />
          </EditorBox>
          <EditorBox title="Frame Colors">
            <EditorColorsFrame />
          </EditorBox>
          <EditorBox title="Layers">
            <EditorLayers />
          </EditorBox>
        </div>
        <div class="column-center">
          <EditorBox title="Canvas">
            <EditorCanvas />
          </EditorBox>
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
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;

  background: var(--bg-editor);
}
.headerEditor {
  text-align: right;
  height: 24px;
}
.bodyEditor {
  /*display: flex;
  justify-content: space-between;*/

  display: grid;
  grid-template-columns: 120px 180px minmax(300px, 1fr) 240px;

  gap: 0px 20px;
  grid-auto-flow: row;
}
.column-pre-left {
  display: block;
  /*max-height: 500px;*/
}
.column-right {
  display: flex;
  flex-direction: column;
}
</style>