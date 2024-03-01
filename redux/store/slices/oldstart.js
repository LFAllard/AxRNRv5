import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { selectUserId } from "../selectors";
// import { selectImid } from "./user";

const slice = createSlice({
  name: "start",
  initialState: {
    startData: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    startDataRequested: (start, action) => {
      start.loading = true;
    },

    startDataReceived: (start, action) => {
      start.startData = action.payload;
      start.loading = false;
      start.lastFetch = Date.now();
    },
    startDataRequestFailed: (start, action) => {
      start.loading = false;
    },
  },
});

const { startDataReceived, startDataRequested, startDataRequestFailed } =
  slice.actions;

export default slice.reducer;

// Action Creators

export const loadStartData = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  //   // const { lastFetch } = getState().entities.bugs;

  //   // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  //   // if (diffInMinutes < 10) return;

  if (!imid) {
    // handle the case where userId is null or undefined
    return;
  }

  const url = `/startAPIredux.php?imid=${imid}`;

  // const url = "startAPIredux.php";

  dispatch(
    apiCallBegan({
      url,
      onStart: startDataRequested.type,
      onSuccess: startDataReceived.type,
      onError: startDataRequestFailed.type,
    })
  );
};
