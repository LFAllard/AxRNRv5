import { createSelector } from "@reduxjs/toolkit";

export const selectUserId = createSelector(
  (state) => state.entities.user.imid,
  (imid) => imid
);

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// const DEFAULT_USER_ID = null; // or any default value that makes sense in your context

// export const selectUserId = createSelector((state) => {
//   const userId = state.entities?.user?.imid || DEFAULT_USER_ID;
//   let error = null;

//   if (!userId) {
//     error = "User ID is not available";
//   }

//   return error ? { error } : { userId };
// });

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
