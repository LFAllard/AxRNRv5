import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import {
  selectUserId,
  selectAktsys,
  selectEpool,
  safeGet,
  safeSet,
} from "../selectors";
import {
  viewedPresStatUpdated,
  reportedPresStatUpdated,
  updatePsrepoffantal,
  updatePsrepantal,
} from "./sessor";

const slice = createSlice({
  name: "start",
  initialState: {
    startData: {
      lastviewedps: {},
      lastreportedps: {},
    },
    loading: false,
    lastFetch: null,
  },
  reducers: {
    startDataRequested: (start) => {
      start.loading = true;
    },
    startDataReceived: (start, action) => {
      start.startData = action.payload;
      start.loading = false;
      start.lastFetch = Date.now();
    },
    startDataRequestFailed: (start) => {
      start.loading = false;
    },
    updateGenericStat: (start, action) => {
      const { type, aktsys, presstatid } = action.payload;

      // Using safeSet with an initial object
      start.startData[type] = safeSet(
        start.startData[type], // Object to update
        [aktsys], // Path
        presstatid, // Value to set
        {} // Initial object, could be more specific if needed
      );
    },
    // updatePssss: (start, action) => {
    //   const { sysid, poolid } = action.payload;

    //   // Using safeSet with an initial object
    //   start.startData.pssss = safeSet(
    //     start.startData.pssss, // Object to update
    //     [sysid, poolid], // Path
    //     true, // Value to set
    //     {} // Initial object
    //   );
    // },
    updatePssss: (start, action) => {
      const { sysid, poolid } = action.payload;

      // Update the pssss object without overwriting it
      start.startData.pssss = safeSet(
        start.startData.pssss,
        [sysid, poolid],
        true
      );
    },
  },
});

const {
  startDataReceived,
  startDataRequested,
  startDataRequestFailed,
  updateGenericStat,
} = slice.actions;

export const { updatePssss } = slice.actions;

const genericDispatch = (
  type,
  counterType,
  apiEndpoint,
  safePath,
  dispatch,
  getState
) => {
  const imid = selectUserId(getState());
  const aktsys = selectAktsys(getState());
  const epool = selectEpool(getState(), aktsys);
  const lastStatId = safeGet(getState(), safePath, null);
  const presstatid = safeGet(
    getState(),
    // [
    //   "entities",
    //   "sessor",
    //   aktsys,
    //   "sessData",
    //   "presstatdata",
    //   epool,
    //   "presstatid",
    // ],
    [
      "entities",
      "sessor",
      aktsys,
      "sessData",
      epool,
      "presstdata",
      "presstatid",
    ],
    null
  );

  if (lastStatId !== presstatid) {
    const count =
      safeGet(
        getState(),
        // [
        //   "entities",
        //   "sessor",
        //   aktsys,
        //   "sessData",
        //   "presstatdata",
        //   epool,
        //   counterType,
        // ],
        [
          "entities",
          "sessor",
          aktsys,
          "sessData",
          epool,
          "presstdata",
          counterType,
        ],
        0
      ) + 1;

    let updateAction, updateCallCenterAction;
    if (counterType === "psrepoffantal") {
      updateAction = updatePsrepoffantal;
      updateCallCenterAction = viewedPresStatUpdated;
    } else {
      updateAction = updatePsrepantal;
      updateCallCenterAction = reportedPresStatUpdated;
    }

    dispatch(
      updateAction({
        aktsys,
        epool,
        newCount: count,
      })
    );

    dispatch(
      updateGenericStat({
        type,
        aktsys,
        epool,
        presstatid,
      })
    );

    dispatch(
      updateCallCenterAction({
        aktsys,
        epool,
        presstatid,
      })
    );

    // Uncomment below for API call
    // const url = `${apiEndpoint}?imid=${imid}&presstatid=${presstatid}`;
    // dispatch(
    //   apiCallBegan({
    //     url,
    //     // specify onStart, onSuccess, and onError as needed
    //   })
    // );
  }
};

export const viewPresStat = () => (dispatch, getState) => {
  genericDispatch(
    "lastviewedps",
    "psrepoffantal",
    "/apiEndpoint.php",
    [
      "entities",
      "start",
      "startData",
      "lastviewedps",
      selectAktsys(getState()),
      selectEpool(getState(), selectAktsys(getState())),
    ],
    dispatch,
    getState
  );
};

export const reportPresStat = () => (dispatch, getState) => {
  genericDispatch(
    "lastreportedps",
    "psrepantal",
    "/apiEndpointPresstatReport.php",
    [
      "entities",
      "start",
      "startData",
      "lastreportedps",
      selectAktsys(getState()),
      selectEpool(getState(), selectAktsys(getState())),
    ],
    dispatch,
    getState
  );
};

export const loadStartData = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  if (!imid) return;

  // const url = `/startAPIredux.php?imid=${imid}`;
  const url = `/startAPIredux240115.php?imid=${imid}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: startDataRequested.type,
      onSuccess: startDataReceived.type,
      onError: startDataRequestFailed.type,
    })
  );
};

export default slice.reducer;
