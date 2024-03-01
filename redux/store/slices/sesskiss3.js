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
  },
});

// Export the new action for use in the Thunk from the other slice
export const { updatePsrepoffantal } = slice.actions;
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

  console.log("spool:", spool);
  console.log("epool:", epool);
  console.log("dsrbiSpool:", dsrbiSpool);
  console.log("dsrbiEpool:", dsrbiEpool);
  console.log("dsnegSpool:", dsnegSpool);
  console.log("dsnegEpool:", dsnegEpool);
  console.log("egenkand_aktivpropid:", egenkand_aktivpropid);
  console.log("imid:", imid);
  console.log("spoolData:", spoolData);
  console.log("epoolData:", epoolData);
  console.log("aktsys:", aktsys);

  const url = `/sessAPIredux.php?imid=${imid}&spool=${spool}&epool=${epool}&dsrbiSpool=${dsrbiSpool}&dsrbiEpool=${dsrbiEpool}&dsnegSpool=${dsnegSpool}&dsnegEpool=${dsnegEpool}&egenkand_aktivpropid=${egenkand_aktivpropid}`;

  dispatch(
    apiCallBegan({
      url,
      onStart: slice.actions.sessDataRequested.type,
      onSuccess: slice.actions.sessDataReceived.type,
      onError: slice.actions.sessDataRequestFailed.type,
      meta: { aktsys },
    })
  );
};
