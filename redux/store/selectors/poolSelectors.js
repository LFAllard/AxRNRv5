import { createSelector } from "@reduxjs/toolkit";

const safeGet = (obj, path, defaultValue = null) =>
  path.reduce(
    (xs, x) =>
      xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
    obj
  );

// Higher-order function to generate selector
const createPoolSelector = (poolName, defaultValue) => {
  return createSelector(
    [
      (state) => safeGet(state, ["entities", "start", "startData"]),
      (state) => safeGet(state, ["entities", "system", "aktsys"]),
    ],
    (startData, aktsys) => {
      let poolData = defaultValue;
      let error = null;

      if (!startData) {
        error = "startData is not available";
      }

      if (!aktsys) {
        error = "aktsys is not available";
      }

      if (!error && startData[poolName]) {
        poolData = startData[poolName][aktsys] || defaultValue;
      } else if (!error) {
        error = `${poolName} does not exist in startData`;
      }

      return error ? { error } : { [poolName]: poolData };
    }
  );
};

// Create your selectors using the higher-order function
export const selectSpool = createPoolSelector("spool", null);
export const selectEpool = createPoolSelector("epool", null);
