import { createSlice } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

// import { selectAktSys } from "../selectors";

// import { selectImid } from "./user";

// import { selectUserId } from "../selectors";
// import { selectEpool } from "../selectors";
// import { selectSpool } from "../selectors";

import {
  selectUserId,
  selectSpool,
  selectEpool,
  safeGetDynamic,
  getInformation,
} from "../selectors";

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
  const spoolResult = selectSpool(getState());
  const epoolResult = selectEpool(getState());
  const imid = selectUserId(getState());

  // Extract the actual spool and epool data or handle the errors
  const spool = spoolResult.spoolData || null;
  const epool = epoolResult.spoolData || null;

  //   // const { lastFetch } = getState().entities.bugs;

  //   // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  //   // if (diffInMinutes < 10) return;

  // console.log("aktsys:", aktsys);
  console.log("spool:", spool);
  console.log("epool:", epool);
  console.log("imid:", imid);

  if (spoolResult.error || epoolResult.error || !imid) {
    // Handle these cases, perhaps by dispatching an error action
    console.error("Error:", spoolResult.error || epoolResult.error);
    return;
  }

  // const url = `/sessAPIredux.php?imid=${imid}&spool=${spool}&epool=${epool}`;
  const url = `/mockAPIredux.php?imid=${imid}&spool=${spool}&epool=${epool}`;

  // const url = "startAPIredux.php";

  dispatch(
    apiCallBegan({
      url,
      onStart: sessDataRequested.type,
      onSuccess: sessDataReceived.type,
      onError: sessDataRequestFailed.type,
    })
  );
};
