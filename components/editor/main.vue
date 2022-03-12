<template>
  <div id="editor" class="editor">
    <div class="container">
      <!--<div class="headerEditor">
        <EditorHeader />
      </div>-->
      <div class="bodyEditor">
        <div class="column-pre-left">
          <EditorBox title="Frames">
            <EditorFrames />
          </EditorBox>
        </div>
        <div class="column-left">
          <EditorBox title="Weapons">
            <EditorWeapons />
          </EditorBox>
          <EditorBox title="Colors">
            <EditorColors />
          </EditorBox>
          
          <!--<EditorBox title="Layers">
            <EditorLayers />
          </EditorBox>-->
        </div>
        <div class="column-center">
          

          <!--<EditorBox title="Canvas">
            <EditorCanvasBlock />
          </EditorBox> -->

          <!--<EditorBox title="Canvas">
            <EditorCanvasLine />
          </EditorBox>-->

          <EditorBox title="Canvas" class="canvas">
            <EditorCanvas />
          </EditorBox>
        </div>

        <div class="column-pre-right">
          <EditorBox title="Fr. Options" >

          </EditorBox>
          <EditorBox title="Fr. Colors" v-if="colors.length > 0">
            <EditorColorsFrame />
          </EditorBox>
        </div>

        <div class="column-right">
          <EditorBox title="Minimap">
            <EditorPreview />
          </EditorBox>
          <EditorBox title="Options">
            <EditorOptions />
          </EditorBox>
          <EditorBox title="Export">
            <EditorExport />
          </EditorBox>
        </div>
      </div>
      <div class="footerEditor"></div>
    </div>
  </div>
</template>
<script>

export default {
  computed: { 
    frame() {
      return this.$store.state.frameSelected - 1;
    },
    colors() {
      let colors = [];
      Object.keys(this.$store.state.frames[this.frame][0]).forEach(
        (colorlist) => {
          colors.push(colorlist);
        }
      );
      colors = [...new Set(colors)];
      return colors;
    },
  },
}
</script>

<style scoped>
.editor {
  display: block;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  
  margin-left: -50vw;
  margin-right: -50vw;
  background: var(--bg);
}
.editor:fullscreen {
  padding: 15px;
}
.container {
  display: block;
  position: relative;
  /*border-radius: 4px;*/
  height: calc(100vh - 100px);
  margin-left: 20px;
  margin-right: 20px;
  /*
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 0px;

  /*background: var(--bg-editor); */
}
.headerEditor {
  text-align: right;
  height: 24px;
}
.bodyEditor {
  /*display: flex;
  justify-content: space-between;*/

  display: grid;
  grid-template-columns: 120px 180px minmax(300px, 1fr) 180px 240px;

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
.column-center {
  height: calc(100vh - 100px);
}
.column-right, .column-pre-left, .column-left, .column-pre-right {
  max-height: calc(100vh - 100px);
  overflow-y: auto;
}
.canvas {
  height: 100%;
}
</style>