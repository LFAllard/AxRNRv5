import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    imid: null,
  },
  reducers: {
    userIdentified: (user, action) => {
      const { imid } = action.payload;
      user.imid = imid;
    },
  },
});

export const { userIdentified } = slice.actions;
export default slice.reducer;

// export const selectImid = (state) => state.user.imid;
