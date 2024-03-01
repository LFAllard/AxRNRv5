import { set, get } from "lodash";

export const safeGet = (obj, path, defaultValue = null) =>
  get(obj, path, defaultValue);

// utilitySelectors.js
// export const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const safeSet = (obj, path, value) => {
//   let temp = obj;
//   for (let i = 0; i < path.length - 1; i++) {
//     if (!temp[path[i]]) {
//       temp[path[i]] = {};
//     }
//     temp = temp[path[i]];
//   }
//   temp[path[path.length - 1]] = value;
//   return obj;
// };

// export const safeSet = (obj, path, value, initialObj = {}) => {
//   let temp = obj || initialObj;
//   for (let i = 0; i < path.length - 1; i++) {
//     if (!temp[path[i]]) {
//       temp[path[i]] = {};
//     }
//     temp = temp[path[i]];
//   }
//   temp[path[path.length - 1]] = value;
//   return temp;
// };

// export const safeSet = (obj, path, value, initialObj = {}) => {
//   if (!path || path.length === 0) return value;

//   let temp = { ...obj }; // Create a shallow copy to avoid mutating the original object directly
//   let current = temp;

//   for (let i = 0; i < path.length - 1; i++) {
//     if (!current[path[i]]) {
//       current[path[i]] = {};
//     }
//     current = current[path[i]];
//   }

//   current[path[path.length - 1]] = value;
//   return temp;
// };

export const safeSet = (obj, path, value) => set(obj, path, value);
