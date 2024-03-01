import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import {
  selectUserId,
  selectAktsys,
  selectEpool,
  safeGet,
  safeSet,
} from "../selectors";
import { updatePsrepoffantal, updatePsrepantal } from "./sessor";

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
      const { type, aktsys, epool, presstatid } = action.payload;
      start.startData[type] = safeSet(
        { ...start.startData[type] },
        [aktsys, epool],
        presstatid
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
    [
      "entities",
      "sessor",
      aktsys,
      "sessData",
      "presstatdata",
      epool,
      "presstatid",
    ],
    null
  );

  if (lastStatId !== presstatid) {
    const count =
      safeGet(
        getState(),
        [
          "entities",
          "sessor",
          aktsys,
          "sessData",
          "presstatdata",
          epool,
          counterType,
        ],
        0
      ) + 1;
    const updateAction =
      counterType === "psrepoffantal" ? updatePsrepoffantal : updatePsrepantal;

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

export default slice.reducer;
