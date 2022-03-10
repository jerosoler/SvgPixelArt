<template>
  <div>
    <button class="success" @click="exportSvg">Download</button>
  </div>
</template>
<script>
export default {
    computed: {
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
            Object.keys(item[0]).forEach((colorlist) => {
            colors.push(colorlist);
            });
        });
        colors = [...new Set(colors)];
        return colors;
        },
    },
  methods: {
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
        console.log(color);
      let svg_moveto = "";
      this.frames.forEach((frame, index) => {
        if (this.frames[index][0][color] !== undefined) {
          const data = this.frames[index][0][color].pixels;
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
            Object.keys(this.frames[0][0]).forEach((c) => {    
                svgData += `<path d="${this.transformToSvg(this.frames[0][0][c].pixels)}" fill="#${c}"></path>`;
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