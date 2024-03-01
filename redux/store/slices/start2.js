import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import {
  selectUserId,
  selectAktsys,
  selectPresStatId,
  safeGet,
  selectEpool,
} from "../selectors";
// import { selectAktsys, selectPresStatId } from "../presStatSelectors"; // Importing the required selectors
// import { safeGet } from "./utilitySelectors"; // Importing safeGet utility

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
    presStatViewed: (start, action) => {
      const { presstatid, aktsys, epool } = action.payload;
      const currentState = start.startData;
      const currentSessData = safeGet(
        currentState,
        [
          "entities",
          "sessor",
          aktsys,
          "sessData",
          "presstatdata",
          epool,
          "psrepoffantal",
        ],
        7
      );

      console.log("litepayload", action.payload);
      console.log("litesessdata", currentSessData);

      // Increment psrepoffantal by 1
      currentState.entities.sessor[aktsys].sessData.presstatdata[
        epool
      ].psrepoffantal = currentSessData + 1;

      // Set lastviewedps to presstatid
      currentState.sessor[aktsys].sessData.lastviewedps = presstatid;

      start.startData = currentState;
    },
  },
});

export const {
  startDataReceived,
  startDataRequested,
  startDataRequestFailed,
  presStatViewed,
} = slice.actions;

export default slice.reducer;

// Action Creators
export const loadStartData = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  if (!imid) return;

  const url = `/startAPIredux.php?imid=${imid}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: startDataRequested.type,
      onSuccess: startDataReceived.type,
      onError: startDataRequestFailed.type,
    })
  );
};

export const viewPresStat = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  const aktsys = selectAktsys(getState()); // Get aktsys from store
  const presstatid = selectPresStatId(getState()); // Get presstatid from store
  const epool = selectEpool(getState(), aktsys); // Get epool from store using aktsys

  console.log("Presstatid:", presstatid); // Log presstatid
  console.log("Aktsys:", aktsys); // Log aktsys
  console.log("Epool:", epool); // Log epool

  if (!imid || !aktsys || !presstatid || !epool) return;

  // Update the state first
  dispatch(presStatViewed({ presstatid, aktsys, epool }));

  // Then make the API call
  const url = `/anotherApiEndpoint.php?imid=${imid}&presstatid=${presstatid}`;
  // dispatch(
  //   apiCallBegan({
  //     url,
  //     // You can specify onStart, onSuccess, and onError as needed
  //   })
  // );
};
