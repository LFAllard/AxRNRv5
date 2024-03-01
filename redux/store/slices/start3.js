import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { selectUserId } from "../selectors";
import { selectAktsys, selectEpool } from "../selectors";
import { safeGet } from "../selectors";
import { updatePsrepoffantal, updatePsrepantal } from "./sessor"; // Import the new action

const slice = createSlice({
  name: "start",
  initialState: {
    startData: {
      lastviewedps: {}, // Initialize as an empty object
      lastreportedps: {},
    },
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
    updateLastviewedps: (start, action) => {
      const { aktsys, epool, presstatid } = action.payload;

      // Copy the existing state for lastviewedps
      const updatedLastviewedps = { ...start.startData.lastviewedps };

      // Check if aktsys key exists, if not create an empty object for it
      if (!updatedLastviewedps[aktsys]) {
        updatedLastviewedps[aktsys] = {};
      }

      // Update the value for epool under aktsys
      updatedLastviewedps[aktsys][epool] = presstatid;

      // Update the state
      start.startData.lastviewedps = updatedLastviewedps;
    },
    updateLastreportedps: (start, action) => {
      const { aktsys, epool, presstatid } = action.payload;

      // Copy the existing state
      const updatedLastreportedps = { ...start.startData.lastreportedps };

      // Check if aktsys key exists, if not create an empty object for it
      if (!updatedLastreportedps[aktsys]) {
        updatedLastreportedps[aktsys] = {};
      }

      // Update the value for epool under aktsys
      updatedLastreportedps[aktsys][epool] = presstatid;

      // Update the state
      start.startData.lastreportedps = updatedLastreportedps;
    },
  },
});

const {
  startDataReceived,
  startDataRequested,
  startDataRequestFailed,
  updateLastviewedps,
  updateLastreportedps,
} = slice.actions;

export const viewPresStat = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  const aktsys = selectAktsys(getState());
  const epool = selectEpool(getState(), aktsys);

  const lastviewedpsPath = [
    "entities",
    "start",
    "startData",
    "lastviewedps",
    aktsys,
    epool,
  ];

  const lastviewedps = safeGet(getState(), lastviewedpsPath, null);

  const presstatidPath = [
    "entities",
    "sessor",
    aktsys,
    "sessData",
    "presstatdata",
    epool,
    "presstatid",
  ];
  const presstatid = safeGet(getState(), presstatidPath, null);

  if (lastviewedps !== presstatid) {
    const psrepoffantalPath = [
      "entities",
      "sessor",
      aktsys,
      "sessData",
      "presstatdata",
      epool,
      "psrepoffantal",
    ];
    const psrepoffantal = safeGet(getState(), psrepoffantalPath, 0) + 1;

    // Dispatch action to update psrepoffantal in another slice
    dispatch(
      updatePsrepoffantal({
        aktsys,
        epool,
        newCount: psrepoffantal,
      })
    );

    // Update lastviewedps to presstatid
    // Update lastviewedps to presstatid
    dispatch(
      updateLastviewedps({
        aktsys,
        epool,
        presstatid,
      })
    );

    // Make API call
    const url = `/apiEndpoint.php?imid=${imid}&presstatid=${presstatid}`;
    // dispatch(
    //   apiCallBegan({
    //     url,
    //     // specify onStart, onSuccess, and onError as needed
    //   })
    // );
  }
};

export const reportPresStat = () => (dispatch, getState) => {
  const imid = selectUserId(getState());
  const aktsys = selectAktsys(getState());
  const epool = selectEpool(getState(), aktsys);

  const lastreportedpsPath = [
    "entities",
    "start",
    "startData",
    "lastreportedps",
    aktsys,
    epool,
  ];

  const lastreportedps = safeGet(getState(), lastreportedpsPath, null);

  const presstatidPath = [
    "entities",
    "sessor",
    aktsys,
    "sessData",
    "presstatdata",
    epool,
    "presstatid",
  ];
  const presstatid = safeGet(getState(), presstatidPath, null);

  if (lastreportedps !== presstatid) {
    const psrepantalPath = [
      "entities",
      "sessor",
      aktsys,
      "sessData",
      "presstatdata",
      epool,
      "psrepantal",
    ];
    const psrepantal = safeGet(getState(), psrepantalPath, 0) + 1;

    // Dispatch action to update psrepoffantal in another slice
    dispatch(
      updatePsrepantal({
        aktsys,
        epool,
        newCount: psrepantal,
      })
    );

    // Update lastreportedps to presstatid
    dispatch(
      updateLastreportedps({
        aktsys,
        epool,
        presstatid,
      })
    );

    // Make API call
    const url = `/apiEndpointPresstatReport.php?imid=${imid}&presstatid=${presstatid}`;
    // dispatch(
    //   apiCallBegan({
    //     url,
    //     // specify onStart, onSuccess, and onError as needed
    //   })
    // );
  }
};

export const loadStartData = () => (dispatch, getState) => {
  const imid = selectUserId(getState());

  if (!imid) {
    return;
  }

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
