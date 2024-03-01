// import { createSelector } from "@reduxjs/toolkit";

// // Selector to get epool value based on aktsys
// export const selectEpool = createSelector(
//   (state, aktsys) => state.entities.start.startdata.epool[aktsys],
//   (epool) => epool
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectEpoolByAktSys = createSelector(
//   // Select pieces of state you need
//   [
//     (state) => state.entities.start.startData,
//     (state) => state.entities.system.aktsys,
//   ],
//   (startData, aktsys) => {
//     if (startData && startData.epool && startData.epool[aktsys] !== undefined) {
//       return startData.epool[aktsys];
//     } else {
//       return "sapa";
//     }
//     // Compute derived data based on state
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constants
// const DEFAULT_EPOOL_VALUE = null;

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectEpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     let epoolData = DEFAULT_EPOOL_VALUE; // Default value

//     // Check if startData and epool exist
//     if (startData && startData.epool) {
//       // Check if aktsys exists in epool
//       if (aktsys in startData.epool) {
//         epoolData = startData.epool[aktsys];
//       }
//     }

//     return epoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constant for default epool value
// const DEFAULT_EPOOL_VALUE = null;

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// // Selector to get the 'epool' data based on 'aktsys'
// export const selectEpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     // Initialize epoolData with a default value
//     let epoolData = DEFAULT_EPOOL_VALUE;

//     // Check if 'startData' and 'epool' exist
//     if (!startData) {
//       throw new Error("startData is not available");
//     }

//     if (!aktsys) {
//       throw new Error("aktsys is not available");
//     }

//     if (startData && startData.epool) {
//       if (aktsys in startData.epool) {
//         epoolData = startData.epool[aktsys];
//       }
//     } else {
//       throw new Error("epool does not exist in startData");
//     }

//     return epoolData;
//   }
// );
