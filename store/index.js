export const state = () => ({
  clickValue: false,
  colorSelected: "ff0000",
  frameSelected: 1,
  width: 500,
  height: 400,
  pixelWH: 50,
  seconds: 1,
  frames: [[{ color: "ff0000", pixels: "M0,0 50,0 50,50 0,50;" }]]
  /*  Example complet frames
        frames: [
            [{
                color: 'ff0000',
                pixels: 'M0,0 50,0 50,50 0,50; M200,200 250,200 250,250 200,250'
            },
            {
                color: 'ff9900',
                pixels: 'M0,0 50,0 50,50 0,50; M200,200 250,200 250,250 200,250'
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
    const frame = [];
    state.frames.push(frame);
  },
  selectFrame(state, frame) {
    state.frameSelected = frame;
  },
  clickState(state, clickValue) {
    state.clickValue = clickValue;
  }
};
