import Vue from "vue";

export const state = () => ({
  clickValue: false,
  clickButton: null,
  weapon: 'Pencil',
  colorSelected: "000000",
  frameSelected: 1,
  layerSelected: 1,
  width: 32,
  height: 32,
  pixelWH: 1,
  seconds: 1,
  frames: [
    [ {name: 'Background', colors: {} } ]
  ]
  
});

export const mutations = {
  importFile(state, {file}) {
    state.frameSelected = 1;
    state.layerSelected = 1;
    state.frames = file.frames;
    state.width = file.width;
    state.height = file.height;
    state.seconds = file.seconds;
    
  },
  selectWeapon(state, weapon) {
    state.weapon = weapon;
  },
  selectColor(state, color) {
    state.colorSelected = color;
  },
  addFrame(state) {
    const frame =  [ {name: 'Background', colors: {} } ];
    state.frames.push(frame);
  },
  addLayer(state) {
    const layer =  {name: 'Layer', colors: {} };
    state.frames[state.frameSelected-1].push(layer);
  },
  delFrame(state, frame) {
    let isZero = false;
    if (frame + 1 == state.frameSelected) {
      // EQUAL FRAME
      //console.log("es el mismo frame");
      if (frame === 0) {
        // FRAME 0
        //console.log("Es el frame 0");
        state.frameSelected = 1;
        isZero = true;
      } else {
        // OTHER FRAME
        //console.log("NO ES el frame 0");
        state.frameSelected = state.frameSelected - 1;
      }
    } else {
      //console.log("NO ES EL MISMO FRAME");
      if (state.frames.length === state.frameSelected) {
        state.frameSelected = state.frameSelected - 1;
      }
    }
    //Vue.delete(state.frames, frame);
    state.frames.splice(frame, 1);
    if (isZero === true) {
      state.frameSelected = 1;
    }
  },
  duplicateFrame(state, frame) {
    const frameCopy = JSON.parse(JSON.stringify(state.frames[frame]));
    state.frames.splice(frame, 0, frameCopy);
    state.frameSelected = frame + 2;
  },
  selectFrame(state, frame) {
    state.frameSelected = frame;
    state.layerSelected = 1;
  },
  selectLayer(state, layer) {
    state.layerSelected = layer;
  },
  clickState(state, {clickValue, clickButton}) {
    state.clickValue = clickValue;
    state.clickButton = clickButton;
  },
  updateLayout(state, { pixel, width, height, seconds }) {
    state.pixelWH = pixel;
    if (state.width > width || state.height > height) {
      // Remove elements in frames
      const frames = state.frames;
      frames.forEach((frame, index) => {
        const colors = state.frames[index][0].colors;
        Object.keys(colors).forEach(colorlist => {
          const pixels = state.frames[index][0].colors[colorlist].pixels;
          const filterPixels = pixels.filter(
            p => p.x <= width && p.y <= height
          );
          if (filterPixels.length > 0) {
            Vue.set(state.frames[index][0].colors[colorlist], "pixels", filterPixels);
          } else {
            Vue.delete(state.frames[index][0].colors, colorlist);
          }
        });
      });
    }
    state.width = width;
    state.height = height;
    state.seconds = seconds;
  },
  addPixel(state, { x, y, color }) {
    const colors = state.frames[state.frameSelected - 1][0].colors;

    if(state.clickButton === 2) {
      color = 'transparent';
    }
    switch (state.weapon) {
      case 'Pencil':
        // Search if exist object
        Object.keys(colors).forEach(colorlist => {
          const pixels = state.frames[state.frameSelected - 1][0].colors[colorlist].pixels;
          const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);

          if (indexSlice > -1) {
            if (pixels.length > 1) {
              // Remove Object
              state.frames[state.frameSelected - 1][0].colors[colorlist].pixels.splice(
                indexSlice,
                1
              );
            } else {
              // Remove Color
              //delete state.frames[state.frameSelected - 1][0].colors[colorlist];
              Vue.delete(state.frames[state.frameSelected - 1][0].colors, colorlist);
            }
          }
        }); 

        if (color !== "transparent") {
          // Create color
          if (state.frames[state.frameSelected - 1][0].colors[color] === undefined) {
            //state.frames[state.frameSelected - 1][0][color] = { pixels: [] };
            Vue.set(state.frames[state.frameSelected - 1][0].colors, color, {
              pixels: []
            });
          }
          // Add Color
          state.frames[state.frameSelected - 1][0].colors[color].pixels.push({ x, y });
        }
        break;
      case 'Paint':
        
      break;
    
      default:
        break;
    }
    
  }
};


