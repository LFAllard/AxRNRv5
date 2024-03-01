import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { selectUserId } from "./user";

const slice = createSlice({
  name: "sessor",
  initialState: {
    sessData: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    sessDataRequested: (sessor, action) => {
      sessor.loading = true;
    },

    sessDataReceived: (sessor, action) => {
      sessor.sessData = action.payload;
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

export const loadSessData = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  //   // const { lastFetch } = getState().entities.bugs;

  //   // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  //   // if (diffInMinutes < 10) return;

  if (!imid) {
    // handle the case where userId is null or undefined
    return;
  }

  const url = `/sessAPIredux.php?imid=${imid}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: sessDataRequested.type,
      onSuccess: sessDataReceived.type,
      onError: sessDataRequestFailed.type,
    })
  );
};
