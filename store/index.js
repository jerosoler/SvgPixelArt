import Vue from "vue";

export const state = () => ({
  clickValue: false,
  colorSelected: "ff0000",
  frameSelected: 1,
  width: 32,
  height: 32,
  pixelWH: 1,
  seconds: 1,
  frames: [
    [
      {
        ff0000: { pixels: [{ x: 1, y: 1 }] },
        ff9900: { pixels: [{ x: 2, y: 2 }] }
      }
    ],
    [
      {
        ff0000: { pixels: [{ x: 3, y: 3 }] },
        ff9900: { pixels: [{ x: 4, y: 4 }] }
      }
    ]
  ]
  //frames: [[{ color: "ff0000", pixels: ["M0,0 50,0 50,50 0,50"] }]]
  /*  Example complet frames
        frames: [
            [{
                color: 'ff0000',
                pixels: ['M0,0 50,0 50,50 0,50', 'M200,200 250,200 250,250 200,250']
            },
            {
                color: 'ff9900',
                pixels: ['M0,0 50,0 50,50 0,50', 'M200,200 250,200 250,250 200,250']
            },...],
            [...],...
        ]
  */
});

export const mutations = {
  selectColor(state, color) {
    state.colorSelected = color;
  },
  addFrame(state) {
    const frame = [{}];
    state.frames.push(frame);
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
  },
  clickState(state, clickValue) {
    state.clickValue = clickValue;
  },
  updateLayout(state, { pixel, width, height, seconds }) {
    state.pixelWH = pixel;
    if (state.width > width || state.height > height) {
      // Remove elements in frames
      const frames = state.frames;
      frames.forEach((frame, index) => {
        const colors = state.frames[index][0];
        Object.keys(colors).forEach(colorlist => {
          const pixels = state.frames[index][0][colorlist].pixels;
          const filterPixels = pixels.filter(
            p => p.x <= width && p.y <= height
          );
          if (filterPixels.length > 0) {
            Vue.set(state.frames[index][0][colorlist], "pixels", filterPixels);
          } else {
            Vue.delete(state.frames[index][0], colorlist);
          }
        });
      });
    }
    state.width = width;
    state.height = height;
    state.seconds = seconds;
  },
  addPixel(state, { x, y, color }) {
    // Search if exist object
    const colors = state.frames[state.frameSelected - 1][0];

    Object.keys(colors).forEach(colorlist => {
      const pixels = state.frames[state.frameSelected - 1][0][colorlist].pixels;
      const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);

      //if (colorlist !== color) {
      if (indexSlice > -1) {
        if (pixels.length > 1) {
          // Remove Object
          state.frames[state.frameSelected - 1][0][colorlist].pixels.splice(
            indexSlice,
            1
          );
        } else {
          // Remove Color
          //delete state.frames[state.frameSelected - 1][0][colorlist];
          Vue.delete(state.frames[state.frameSelected - 1][0], colorlist);
        }
      }
      // }
    });

    if (color !== "transparent") {
      // Create color
      if (state.frames[state.frameSelected - 1][0][color] === undefined) {
        //state.frames[state.frameSelected - 1][0][color] = { pixels: [] };
        Vue.set(state.frames[state.frameSelected - 1][0], color, {
          pixels: []
        });
      }
      // Add Color
      const coodenats = { x, y };
      state.frames[state.frameSelected - 1][0][color].pixels.push({ x, y });
      //Vue.set(state.frames[state.frameSelected - 1][0][color], "pixels", coodenats);
    }
  }
};
