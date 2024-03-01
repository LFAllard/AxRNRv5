import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";
import { selectUserId, selectStartData, safeSet } from "../selectors";

const initialState = {
  callCenter: {},
  callCenterLog: {},
};

const setAktsysData = (sessor, aktsys, key, value) => {
  safeSet(sessor, [aktsys, key], value, initialState);
};

const slice = createSlice({
  name: "sessor",
  initialState,
  reducers: {
    sessDataRequested: (sessor, action) => {
      const { aktsys } = action.meta;
      setAktsysData(sessor, aktsys, "sessData", {});
      setAktsysData(sessor, aktsys, "loading", true);
      setAktsysData(sessor, aktsys, "lastFetch", null);
    },
    sessDataReceived: (sessor, action) => {
      const { aktsys } = action.meta;
      setAktsysData(sessor, aktsys, "sessData", action.payload);
      setAktsysData(sessor, aktsys, "loading", false);
      setAktsysData(sessor, aktsys, "lastFetch", Date.now());
    },

    sessDataRequestFailed: (sessor, action) => {
      const { aktsys } = action.meta;
      setAktsysData(sessor, aktsys, "loading", false);
    },
    // updatePsrepoffantal: (sessor, action) => {
    //   const { aktsys, epool, newCount } = action.payload;
    //   safeSet(
    //     sessor,
    //     [aktsys, "sessData", "presstatdata", epool, "psrepoffantal"],
    //     newCount
    //   );
    // },
    // updatePsrepantal: (sessor, action) => {
    //   const { aktsys, epool, newCount } = action.payload;
    //   safeSet(
    //     sessor,
    //     [aktsys, "sessData", "presstatdata", epool, "psrepantal"],
    //     newCount
    //   );
    // },
    updatePsrepoffantal: (sessor, action) => {
      const { aktsys, epool, newCount } = action.payload;
      safeSet(
        sessor,
        [aktsys, "sessData", epool, "presstdata", "psrepoffantal"],
        newCount
      );
    },
    updatePsrepantal: (sessor, action) => {
      const { aktsys, epool, newCount } = action.payload;
      safeSet(
        sessor,
        [aktsys, "sessData", epool, "presstdata", "psrepantal"],
        newCount
      );
    },
    viewedPresStatUpdated: (sessor, action) => {
      const { aktsys, epool, presstatid } = action.payload;
      if (!sessor.callCenter[aktsys]) sessor.callCenter[aktsys] = {};
      if (!sessor.callCenter[aktsys][epool])
        sessor.callCenter[aktsys][epool] = {};
      sessor.callCenter[aktsys][epool].viewedPresStat = presstatid;
    },
    reportedPresStatUpdated: (sessor, action) => {
      const { aktsys, epool, presstatid } = action.payload;
      if (!sessor.callCenter[aktsys]) sessor.callCenter[aktsys] = {};
      if (!sessor.callCenter[aktsys][epool])
        sessor.callCenter[aktsys][epool] = {};
      sessor.callCenter[aktsys][epool].reportedPresStat = presstatid;
    },
  },
});

export const {
  updatePsrepoffantal,
  updatePsrepantal,
  viewedPresStatUpdated,
  reportedPresStatUpdated,
} = slice.actions;
const { sessDataReceived, sessDataRequested, sessDataRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
// Action Creators
// export const loadSessData = () => (dispatch, getState) => {
//   const { spoolData, epoolData, aktsys } = selectStartData(getState());
//   const imid = selectUserId(getState());

//   const spool = spoolData ? spoolData.poolid : null;
//   const epool = epoolData ? epoolData.poolid : null;
//   const dsrbiSpool = spoolData ? spoolData.dsrbipropid : null;
//   const dsrbiEpool = epoolData ? epoolData.dsrbipropid : null;
//   const dsnegSpool = spoolData ? spoolData.dsnegpropid : null;
//   const dsnegEpool = epoolData ? epoolData.dsnegpropid : null;
//   const egenkand_aktivpropid = epoolData
//     ? epoolData.egenkand_aktivpropid
//     : null;

//   console.log("spoolData:", spoolData, "stoppanu");
//   console.log("spoolData:", spoolData.dsrbipropid.spool, "stoppanu");

//   const url = `/sessAPIredux.php?imid=${imid}&spool=${spool}&epool=${epool}&dsrbiSpool=${dsrbiSpool}&dsrbiEpool=${dsrbiEpool}&dsnegSpool=${dsnegSpool}&dsnegEpool=${dsnegEpool}&egenkand_aktivpropid=${egenkand_aktivpropid}`;

//   dispatch(
//     apiCallBegan({
//       url,
//       onStart: sessDataRequested.type,
//       onSuccess: sessDataReceived.type,
//       onError: sessDataRequestFailed.type,
//       meta: { aktsys },
//     })
//   );
// };

// export const loadSessData = () => (dispatch, getState) => {
//   const { spoolData, epoolData, aktsys } = selectStartData(getState());
//   const imid = selectUserId(getState());

//   const payload = {
//     imid,
//     spool: spoolData ? spoolData.poolid : null,
//     epool: epoolData ? epoolData.poolid : null,
//     dsrbiSpool: spoolData ? spoolData.dsrbipropid : null,
//     dsrbiEpool: epoolData ? epoolData.dsrbipropid : null,
//     dsnegSpool: spoolData ? spoolData.dsnegpropid : null,
//     dsnegEpool: epoolData ? epoolData.dsnegpropid : null,
//     egenkand_aktivpropid: epoolData ? epoolData.egenkand_aktivpropid : null,
//   };

//   console.log("Payload från sessor gamla versionen: ", payload);

//   dispatch(
//     apiCallBegan({
//       // url: "/sessAPIredux.php",
//       // url: "/sessAPIredux231025aa.php",
//       // url: "/sessAPIredux231102aa.php",
//       url: "/sessAPIredux231025ac.php",
//       method: "POST",
//       data: payload,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       onStart: sessDataRequested.type,
//       onSuccess: sessDataReceived.type,
//       onError: sessDataRequestFailed.type,
//       meta: { aktsys },
//     })
//   );
// };

// ny variant börjar jobba med den 231102:

export const loadSessData =
  (statement = false, election = false) =>
  (dispatch, getState) => {
    const { spoolData, epoolData, aktsys } = selectStartData(getState());
    const imid = selectUserId(getState());

    let payload = { imid };

    if (statement) {
      payload = {
        ...payload,
        spool: spoolData ? spoolData.poolid : null,
        dsrbiSpool: spoolData ? spoolData.dsrbipropid : null,
        dsnegSpool: spoolData ? spoolData.dsnegpropid : null,
      };
    }

    if (election) {
      payload = {
        ...payload,
        epool: epoolData ? epoolData.poolid : null,
        dsrbiEpool: epoolData ? epoolData.dsrbipropid : null,
        dsnegEpool: epoolData ? epoolData.dsnegpropid : null,
        egenkand_aktivpropid: epoolData ? epoolData.egenkand_aktivpropid : null,
      };
    }

    console.log("Payload från sessor nya versionen: ", payload);

    dispatch(
      apiCallBegan({
        url: "/sessAPIredux231124.php",
        // url: "/sessAPIredux231025ac.php",
        // url: "/sessAPIredux231102aa.php",
        method: "POST",
        data: payload,
        headers: {
          "Content-Type": "application/json",
        },
        onStart: sessDataRequested.type,
        onSuccess: sessDataReceived.type,
        onError: sessDataRequestFailed.type,
        meta: { aktsys },
      })
    );
  };
