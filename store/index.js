import Vue from "vue";

export const state = () => ({
  clickValue: false,
  clickButton: null,
  weapon: 'Pencil',
  colorSelected: "000000",
  frameSelected: 1,
  width: 32,
  height: 32,
  pixelWH: 1,
  seconds: 1,
  frames: [
    [ {} ]
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
  importFile(state, {file}) {
    state.frameSelected = 1;
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
    const colors = state.frames[state.frameSelected - 1][0];

    if(state.clickButton === 2) {
      color = 'transparent';
    }
    switch (state.weapon) {
      case 'Pencil':
        // Search if exist object
        Object.keys(colors).forEach(colorlist => {
          const pixels = state.frames[state.frameSelected - 1][0][colorlist].pixels;
          const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);

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
          state.frames[state.frameSelected - 1][0][color].pixels.push({ x, y });
        }
        break;
      case 'Paint':
         // Search if exist object
         
         let ColorClick = null;
         Object.keys(colors).forEach(colorlist => {
           const pixels = state.frames[state.frameSelected - 1][0][colorlist].pixels;
           const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);
 
           if (indexSlice > -1) {
              ColorClick = colorlist;
           }
         }); 
         
         function paintPixel(x,y) {
          let colorSearch = null;
          Object.keys(colors).forEach(colorlist => {
            const pixels = state.frames[state.frameSelected - 1][0][colorlist].pixels;
            const indexSlice = pixels.findIndex(ele => ele.x === x && ele.y === y);
  
            if (indexSlice > -1) {
              colorSearch = colorlist;
            }
            
          }); 
          return colorSearch;
         }
         if(ColorClick === null) {
           // Only add color
           if(color !== "transparent") {
            if (state.frames[state.frameSelected - 1][0][color] === undefined) {
              Vue.set(state.frames[state.frameSelected - 1][0], color, {
                pixels: []
              });
            }
            // Search and paint
            
            const pixelstopaint = [];
            (async ()=>{
              let pos_x = x;
              let pos_y = y;
              while (pos_y) {
                const colorSearch = paintPixel(pos_x,pos_y)
                if(colorSearch == ColorClick) {
                  pixelstopaint.push({x: pos_x, y: pos_y });
                  let pos_yx = pos_x;
                  while (pos_yx) {
                    const colorSearch = paintPixel(pos_yx,pos_y)
                    if(colorSearch == ColorClick) {
                      pixelstopaint.push({ x: pos_yx, y: pos_y });
                      pos_yx++;
                    } else {
                      break;
                    }
                    if(pos_yx > state.width) {
                      break;
                    }
                  }
                  pos_y++;
                } else {
                  break;
                }
                if(pos_y > state.height) {
                  break;
                }
              }
              })();

              (async ()=>{
              let pos_x = x;
              let pos_y = y;
              while (pos_y) {
                const colorSearch = paintPixel(pos_x,pos_y)
                if(colorSearch == ColorClick) {
                  pixelstopaint.push({x: pos_x, y: pos_y });
                  let pos_yx = pos_x;
                  while (pos_yx) {
                    const colorSearch = paintPixel(pos_yx,pos_y)
                    if(colorSearch == ColorClick) {
                      pixelstopaint.push({ x: pos_yx, y: pos_y });
                      pos_yx--;
                    } else {
                      break;
                    }
                    if(pos_yx == 0) {
                      break;
                    }
                    
                  }
                  pos_y--;
                } else {
                  break;
                }
                if(pos_y == 0) {
                  break;
                }
              }
            })();

            (async ()=>{
              let pos_x = x;
              let pos_y = y;
              while (pos_y) {
                const colorSearch = paintPixel(pos_x,pos_y)
                if(colorSearch == ColorClick) {
                  pixelstopaint.push({x: pos_x, y: pos_y });
                  let pos_yx = pos_x;
                  while (pos_yx) {
                    const colorSearch = paintPixel(pos_yx,pos_y)
                    if(colorSearch == ColorClick) {
                      pixelstopaint.push({ x: pos_yx, y: pos_y });
                      pos_yx--
                    } else {
                      break;
                    }
                    if(pos_yx == 0) {
                      break;
                    }
                  }
                  pos_y++;
                } else {
                  break;
                }
                if(pos_y > state.height) {
                  break;
                }
              }
              })();

              (async ()=>{
              let pos_x = x;
              let pos_y = y;
              while (pos_y) {
                const colorSearch = paintPixel(pos_x,pos_y)
                if(colorSearch == ColorClick) {
                  pixelstopaint.push({x: pos_x, y: pos_y });
                  let pos_yx = pos_x;
                  while (pos_yx) {
                    const colorSearch = paintPixel(pos_yx,pos_y)
                    if(colorSearch == ColorClick) {
                      pixelstopaint.push({ x: pos_yx, y: pos_y });
                      pos_yx++
                    } else {
                      break;
                    }
                    if(pos_yx > state.width) {
                      break;
                    }
                    
                  }
                  pos_y--;
                } else {
                  break;
                }
                if(pos_y == 0) {
                  break;
                }
              }
            })();
            /*
            pixelstopaint.forEach((item) => {
              state.frames[state.frameSelected - 1][0][color].pixels.push({ x: item.x, y: item.y });
            }) */
            
            state.frames[state.frameSelected - 1][0][color].pixels = state.frames[state.frameSelected - 1][0][color].pixels.concat(pixelstopaint);

           }
         } else {
           // Remove color

           if(color !== "transparent") {
            //Add Color 
            if (state.frames[state.frameSelected - 1][0][color] === undefined) {
              /*Vue.set(state.frames[state.frameSelected - 1][0], color, {
                pixels: []
              });*/
            }
            // Search and paint
            

           }
         }


      
      break;
    
      default:
        break;
    }
    
  }
};


