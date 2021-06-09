import Vue from "vue";

export const state = () => ({
  clickValue: false,
  colorSelected: "ff0000",
  frameSelected: 1,
  width: 500,
  height: 400,
  pixelWH: 50,
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

/*export const getters = {
  getFrame(state) {
    return id => {
      return state.frames[id][0];
    };
  }
};*/

export const mutations = {
  selectColor(state, color) {
    state.colorSelected = color;
  },
  addFrame(state) {
    const frame = [{}];
    state.frames.push(frame);
  },
  selectFrame(state, frame) {
    state.frameSelected = frame;
  },
  clickState(state, clickValue) {
    state.clickValue = clickValue;
  },
  addPixel(state, { x, y, color }) {
    // Search if exist object
    const colors = state.frames[state.frameSelected - 1][0];

    Object.keys(colors).forEach(colorlist => {
      const pixels = state.frames[state.frameSelected - 1][0][colorlist].pixels;
      const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);

      if (colorlist !== color) {
        if (indexSlice > -1) {
          if (pixels.length > 1) {
            // Remove Object
            const RemoveObject = pixels.splice(indexSlice, 1);
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
      }
    });

    // Create color
    if (state.frames[state.frameSelected - 1][0][color] === undefined) {
      //state.frames[state.frameSelected - 1][0][color] = { pixels: [] };
      Vue.set(state.frames[state.frameSelected - 1][0], color, { pixels: [] });
    }
    // Add Color
    const coodenats = { x, y };
    state.frames[state.frameSelected - 1][0][color].pixels.push({ x, y });
    //Vue.set(state.frames[state.frameSelected - 1][0][color], "pixels", coodenats);
  }
};
