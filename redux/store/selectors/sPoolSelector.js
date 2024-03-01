// import { createSelector } from "@reduxjs/toolkit";

// // Selector to get epool value based on aktsys
// export const selectSpool = createSelector(
//   (state, aktsys) => state.entities.start.startdata.spool[aktsys],
//   (spool) => spool
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectSpool = createSelector(
//   // Select pieces of state you need
//   [
//     (state) => state.entities.start.startData,
//     (state) => state.entities.system.aktsys,
//   ],
//   // Compute derived data based on state
//   (startData, aktsys) => {
//     return startData?.epool?.[aktsys] || null;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectSpool = createSelector(
//   // Select pieces of state you need
//   [
//     (state) => state.entities.start.startData,
//     (state) => state.entities.system.aktsys,
//   ],
//   // Compute derived data based on state
//   (startData, aktsys) => {
//     return startData?.spool?.[aktsys] || null;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectSpool = createSelector(
//   // Select pieces of state you need
//   [
//     (state) => state.entities.start.startData,
//     (state) => state.entities.system.aktsys,
//   ],
//   // Compute derived data based on state
//   (startData, aktsys) => {
//     if (startData && startData.spool && startData.spool[aktsys] !== undefined) {
//       return startData.spool[aktsys];
//     } else {
//       return "sapa";
//     }
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectSpool = createSelector(
//   [
//     (state) => {
//       if (state.entities && state.entities.start) {
//         return state.entities.start.startData;
//       }
//       return null;
//     },
//     (state) => state.entities.system.aktsys,
//   ],
//   (startData, aktsys) => {
//     if (startData && startData.spool && aktsys in startData.spool) {
//       return startData.spool[aktsys];
//     } else {
//       return "sapa";
//     }
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constants
// const DEFAULT_SPOOL_VALUE = "sapa";

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce((xs, x) => (xs && xs[x] !== null ? xs[x] : defaultValue), obj);

// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     // Check if spool and aktsys exist
//     const spoolData = startData?.spool?.[aktsys] ?? DEFAULT_SPOOL_VALUE;

//     return spoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constants
// const DEFAULT_SPOOL_VALUE = "hoppla";

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     let spoolData = DEFAULT_SPOOL_VALUE; // Default value

//     // Check if startData and spool exist
//     if (startData && startData.spool) {
//       // Check if aktsys exists in spool
//       if (aktsys in startData.spool) {
//         spoolData = startData.spool[aktsys];
//       }
//     }
//     console.log("Data:", startData);
//     return spoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// export const selectUserId = createSelector(
//   (state) => state.entities.user.imid,
//   (imid) => imid

// // Constants
// const DEFAULT_SPOOL_VALUE = "hoppla";

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "user", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     let spoolData = DEFAULT_SPOOL_VALUE; // Default value

//     // Check if startData and spool exist
//     if (startData && startData.spool) {
//       // Check if aktsys exists in spool
//       if (aktsys in startData.spool) {
//         spoolData = startData.spool[aktsys];
//       }
//     }
//     console.log("Data:", spoolData);
//     return spoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constants
// const DEFAULT_SPOOL_VALUE = null;

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     let spoolData = DEFAULT_SPOOL_VALUE; // Default value

//     // Check if startData and spool exist
//     if (startData && startData.spool) {
//       // Check if aktsys exists in spool
//       if (aktsys in startData.spool) {
//         spoolData = startData.spool[aktsys];
//       }
//     }
//     console.log("Data:", spoolData);
//     return spoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// // Constant for default spool value
// const DEFAULT_SPOOL_VALUE = null;

// // Utility function to safely navigate deeply nested objects
// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// // Selector to get the 'spool' data based on 'aktsys'
// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     // Initialize spoolData with a default value
//     let spoolData = DEFAULT_SPOOL_VALUE;

//     // Check if 'startData' and 'spool' exist
//     if (!startData) {
//       throw new Error("startData is not available");
//     }

//     if (!aktsys) {
//       throw new Error("aktsys is not available");
//     }

//     if (startData && startData.spool) {
//       if (aktsys in startData.spool) {
//         spoolData = startData.spool[aktsys];
//       }
//     } else {
//       throw new Error("spool does not exist in startData");
//     }

//     return spoolData;
//   }
// );

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { createSelector } from "@reduxjs/toolkit";

// const DEFAULT_SPOOL_VALUE = null;

// const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectSpool = createSelector(
//   [
//     (state) => safeGet(state, ["entities", "start", "startData"]),
//     (state) => safeGet(state, ["entities", "system", "aktsys"]),
//   ],
//   (startData, aktsys) => {
//     let spoolData = DEFAULT_SPOOL_VALUE;
//     let error = null;

//     // Check if 'startData' and 'aktsys' exist
//     if (!startData) {
//       error = "startData is not available";
//     }

//     if (!aktsys) {
//       error = "aktsys is not available";
//     }

//     // If no errors, continue
//     if (!error) {
//       const spool = startData.spool;
//       if (spool) {
//         spoolData = spool[aktsys] || DEFAULT_SPOOL_VALUE;
//       } else {
//         error = "spool does not exist in startData";
//       }
//     }

//     return error ? { error } : { spoolData };
//   }
// );
