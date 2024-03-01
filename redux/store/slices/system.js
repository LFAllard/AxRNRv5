import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "system",
  initialState: {
    aktsys: "stma",
  },
  reducers: {
    systemChosen: (system, action) => {
      const { aktsys } = action.payload;
      system.aktsys = aktsys;
    },
  },
});

export const { systemChosen } = slice.actions;
export default slice.reducer;

// export const selectImid = (state) => state.user.imid;
