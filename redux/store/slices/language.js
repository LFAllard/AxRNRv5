import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "language",
  initialState: {
    aktlang: "en",
  },
  reducers: {
    languageChosen: (language, action) => {
      const { aktlang } = action.payload;
      language.aktlang = aktlang;
    },
  },
});

export const { languageChosen } = slice.actions;
export default slice.reducer;

export const selectaktlang = createSelector(
  (state) => state.entities.language.aktlang,
  (aktlang) => aktlang
);

// export const selectImid = (state) => state.user.imid;
