;(async function() {
    if (CSS['paintWorklet'] === undefined){
      await import('https://unpkg.com/css-paint-polyfill')
    }
    CSS.registerProperty({
      name: "--pixelbox-border",
      syntax: "<length>",
      initialValue: "2px",
      inherits: false,
    });
  
    CSS.registerProperty({
      name: "--pixelbox-border-radius",
      syntax: "<length>",
      initialValue: "0px",
      inherits: false,
    });
  
    CSS.registerProperty({
      name: "--pixelbox-border-color",
      syntax: "<color>",
      initialValue: "#000000",
      inherits: false,
    });
  
    CSS.registerProperty({
      name: "--pixelbox-background-color",
      syntax: "<color>",
      initialValue: "#ffffff",
      inherits: false,
    });
  
    CSS.registerProperty({
      name: "--pixelbox-background-shadow-border",
      syntax: "<length>",
      initialValue: "0px",
      inherits: false,
    });
  
    CSS.registerProperty({
      name: "--pixelbox-background-shadow-color",
      syntax: "<color>",
      initialValue: "#adafbc",
      inherits: false,
    });
    CSS.paintWorklet.addModule('pixelbox.js')
  })()