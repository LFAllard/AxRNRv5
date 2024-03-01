import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { selectUserId, selectStartData } from "../selectors";

const initialState = {};

const slice = createSlice({
  name: "sessor",
  initialState,
  reducers: {
    sessDataRequested: (sessor, action) => {
      const { aktsys } = action.meta;
      if (!sessor[aktsys]) {
        sessor[aktsys] = { sessData: {}, loading: false, lastFetch: null };
      }
      sessor[aktsys].loading = true;
    },
    sessDataReceived: (sessor, action) => {
      const { aktsys } = action.meta;
      sessor[aktsys].sessData = action.payload;
      sessor[aktsys].loading = false;
      sessor[aktsys].lastFetch = Date.now();
    },
    sessDataRequestFailed: (sessor, action) => {
      const { aktsys } = action.meta;
      if (sessor[aktsys]) {
        sessor[aktsys].loading = false;
      }
    },
    updatePsrepoffantal: (sessor, action) => {
      const { aktsys, epool, newCount } = action.payload;
      if (sessor[aktsys] && sessor[aktsys].sessData.presstatdata[epool]) {
        sessor[aktsys].sessData.presstatdata[epool].psrepoffantal = newCount;
      }
    },
    updatePsrepantal: (sessor, action) => {
      const { aktsys, epool, newCount } = action.payload;
      if (sessor[aktsys] && sessor[aktsys].sessData.presstatdata[epool]) {
        sessor[aktsys].sessData.presstatdata[epool].psrepantal = newCount;
      }
    },
  },
});

// Export updatePsrepoffantal for use in other modules
export const { updatePsrepoffantal } = slice.actions;
export const { updatePsrepantal } = slice.actions;

// Extract actions but do not export them
const { sessDataReceived, sessDataRequested, sessDataRequestFailed } =
  slice.actions;

export default slice.reducer;

// Action Creators
export const loadSessData = () => (dispatch, getState) => {
  const { spoolData, epoolData, aktsys } = selectStartData(getState());
  const imid = selectUserId(getState());

  const spool = spoolData ? spoolData.poolid : null;
  const epool = epoolData ? epoolData.poolid : null;
  const dsrbiSpool = spoolData ? spoolData.dsrbipropid : null;
  const dsrbiEpool = epoolData ? epoolData.dsrbipropid : null;
  const dsnegSpool = spoolData ? spoolData.dsnegpropid : null;
  const dsnegEpool = epoolData ? epoolData.dsnegpropid : null;
  const egenkand_aktivpropid = epoolData
    ? epoolData.egenkand_aktivpropid
    : null;

  const url = `/sessAPIredux.php?imid=${imid}&spool=${spool}&epool=${epool}&dsrbiSpool=${dsrbiSpool}&dsrbiEpool=${dsrbiEpool}&dsnegSpool=${dsnegSpool}&dsnegEpool=${dsnegEpool}&egenkand_aktivpropid=${egenkand_aktivpropid}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: sessDataRequested.type,
      onSuccess: sessDataReceived.type,
      onError: sessDataRequestFailed.type,
      meta: { aktsys },
    })
  );
};
