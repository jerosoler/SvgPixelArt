<template>
  <div>
    <button class="success" @click="exportSvg">Download SVG</button>
    <button class="info" @click="exportPixelArt">Save</button>
    <button class="info" @click="importPixelArt">Import</button>
    <input type="file" id="importPixelArt" accept=".svgpixelart" @change="importPixelArtFile" style="display:none;">
  </div>
</template>
<script>
export default {
    computed: {
        state() {
          return this.$store.state;
        },
        width() {
            return this.$store.state.width;
        },
        height() {
            return this.$store.state.height;
        },
        pixelWH() {
            return this.$store.state.pixelWH;
        },
        frames() {
            return this.$store.state.frames;
        },
        seconds() {
            return this.$store.state.seconds;
        },
         colors() {
        let colors = [];
        this.$store.state.frames.forEach((item) => {
            Object.keys(item[0].colors).forEach((colorlist) => {
            colors.push(colorlist);
            });
        });
        colors = [...new Set(colors)];
        return colors;
        },
    },
  methods: {
    importPixelArt() {
      const buttonimport = document.getElementById("importPixelArt");
      buttonimport.click();
    },
    importPixelArtFile(event) {
         const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsText(file, "UTF-8");
          reader.onload = (evt) => {
            this.$store.commit("importFile", { file: JSON.parse(evt.target.result)});
            //this.$store.commit("importFile", 'testaaaa');
            const buttonimport = document.getElementById("importPixelArt");
            buttonimport.value = "";
          }

    },
    exportPixelArt() {
        const state = {};
        /*state.frames = file.frames;
          state.width = file.width;
          state.height = file.height;
          state.seconds = file.seconds;*/
        state.frames = this.state.frames;
        state.width = this.state.width;
        state.height = this.state.height;
        state.seconds = this.state.seconds;
        const jsonData = JSON.stringify(state);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(jsonData);
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUri;
        downloadLink.download = `${Date.now()}.svgpixelart`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    },
    transformToSvg(data) {
      let svg_moveto = "";
      data.forEach((pos) => {
        const x = pos.x;
        const y = pos.y;
        const pixelWH = this.pixelWH;

        const coordinates = `M${(x - 1) * pixelWH},${(y - 1) * pixelWH} ${
          x * pixelWH
        },${(y - 1) * pixelWH} ${x * pixelWH},${y * pixelWH} ${
          (x - 1) * pixelWH
        },${y * pixelWH} `;
        svg_moveto += coordinates;
      });
      return svg_moveto;
    },

    transformToSvgColor(color) {
      
      let svg_moveto = "";
      this.frames.forEach((frame, index) => {
        if (this.frames[index][0].colors[color] !== undefined) {
          const data = this.frames[index][0].colors[color].pixels;
          data.forEach((pos) => {
            const x = pos.x;
            const y = pos.y;
            const pixelWH = this.pixelWH;

            const coordinates = `M${(x - 1) * pixelWH},${(y - 1) * pixelWH} ${
              x * pixelWH
            },${(y - 1) * pixelWH} ${x * pixelWH},${y * pixelWH} ${
              (x - 1) * pixelWH
            },${y * pixelWH}`;
            svg_moveto += coordinates;
          });
          svg_moveto += `;`;
        } else {
          svg_moveto += `M;`;
        }
      });

      return svg_moveto;
    },
    exportSvg() {
       let typeExport = "static";
       if(this.frames.length === 1) {
           typeExport = "static";
       } else {
           typeExport = "animated";
       }
       const name = `SvgPixelArt-${typeExport}-${Date.now()}`;
       this.saveSvg(name);
    },
    saveSvg(name) {
       let svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}" viewBox="0 0 ${this.width * this.pixelWH} ${this.height * this.pixelWH}">`;
        if(this.frames.length === 1) {
            // Not animation
            Object.keys(this.frames[0][0].colors).forEach((c) => {    
                svgData += `<path d="${this.transformToSvg(this.frames[0][0].colors[c].pixels)}" fill="#${c}"></path>`;
            });            
        } else {
            // Animation
            this.colors.forEach((c) => { 
                const animatePath = this.transformToSvgColor(c)
                const separatePaths = animatePath.split(";");
                svgData += `<path d="${separatePaths[0]}" fill="#${c}"><animate attributeName="d" dur="${this.seconds}s" repeatCount="indefinite" calcMode="discrete" values="${animatePath}"/></path>`;
            });
        }
        svgData += `</svg>`;
        const svgBlob = new Blob([svgData], {type:"image/svg+xml;charset=utf-8"});
        const svgUrl = URL.createObjectURL(svgBlob);
        const downloadLink = document.createElement("a");
        downloadLink.href = svgUrl;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
  },
};
</script>