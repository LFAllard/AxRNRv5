import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { selectUserId } from "./user";

const slice = createSlice({
  name: "sessor",
  initialState: {
    sessData: {},
    loading: false,
    lastFetch: null,
  },
  reducers: {
    sessDataRequested: (sessor, action) => {
      sessor.loading = true;
    },

    sessDataReceived: (sessor, action) => {
      // Assuming the payload has a structure like { poolA: ..., poolB: ... }
      const pool = action.meta.pool; // Use the pool parameter
      sessor.sessData[pool] = action.payload[pool]; // Update the specific pool data
      sessor.loading = false;
      sessor.lastFetch = Date.now();
    },

    sessDataRequestFailed: (sessor, action) => {
      sessor.loading = false;
    },
  },
});

const { sessDataReceived, sessDataRequested, sessDataRequestFailed } =
  slice.actions;

export default slice.reducer;

// Action Creators

export const loadSessData = (pool) => (dispatch, getState) => {
  const imid = selectUserId(getState());

  if (!imid || !pool) {
    // handle the case where userId or pool is null or undefined
    return;
  }

  const url = `/sessAPIredux.php?imid=${imid}&pool=${pool}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: sessDataRequested.type,
      onSuccess: sessDataReceived.type,
      onError: sessDataRequestFailed.type,
      meta: { pool }, // Pass pool as metadata to the action
    })
  );
};
