import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import moment from "moment";

const initialState = {
  info: {
    uppdint: null,
    urgent_uppdint: null,
    systemtabell: [],
    stma: {
      sapa: {
        curwin: {
          vinnartid: null,
          rubrik: null,
          brodtext: null,
          fname: null,
          lname: null,
          bildnamn: null,
          poolwm: null,
          poolbetant: null,
          flatmean: null,
          repoffantal: null,
          repantal: null,
          bortfall: null,
        },
        distr: [],
        presstatdata: null,
      },
      sapb: {
        curwin: {
          vinnartid: null,
          rubrik: null,
          brodtext: null,
          fname: null,
          lname: null,
          bildnamn: null,
          poolwm: null,
          poolbetant: null,
          flatmean: null,
          repoffantal: null,
          repantal: null,
          bortfall: null,
        },
        distr: [],
        presstatdata: {
          presstattid: null,
          psrubrik: null,
          psbrodtext: null,
          psrepoffantal: null,
          psrepantal: null,
        },
      },
    },
    stmb: {
      sbpa: {
        curwin: {
          vinnartid: null,
          rubrik: "Loading laddar...",
          lname: null,
          bildnamn: null,
          poolwm: null,
          poolbetant: null,
          flatmean: null,
          repoffantal: null,
          repantal: null,
          bortfall: null,
        },
        distr: [],
        presstatdata: null,
      },
      sbpb: {
        curwin: {
          vinnartid: null,
          rubrik: null,
          brodtext: null,
          fname: null,
          lname: null,
          bildnamn: null,
          poolwm: null,
          poolbetant: null,
          flatmean: null,
          repoffantal: null,
          repantal: null,
          bortfall: null,
        },
        distr: [],
        presstatdata: {
          presstattid: null,
          psrubrik: null,
          psbrodtext: null,
          psrepoffantal: null,
          psrepantal: null,
        },
      },
    },
  },
  loading: null,
  lastFetch: null,
};

// let lastId = 0;

const slice = createSlice({
  name: "openData",
  initialState,
  reducers: {
    openDataRequested: (openData, action) => {
      openData.loading = true;
    },

    openDataReceived: (openData, action) => {
      openData.info = action.payload;
      openData.loading = false;
      openData.lastFetch = Date.now();
    },
    openDataRequestFailed: (openData, action) => {
      openData.loading = false;
    },
  },
});

const { openDataReceived, openDataRequested, openDataRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bffenAPIredux.php"; // potentially in a config file in a real application...

export const loadOpenData = () => (dispatch, getState) => {
  const cacheBuster = new Date().getTime();
  const urlWithCacheBuster = `${url}?t=${cacheBuster}`;
  // const { lastFetch } = getState().entities.bugs;

  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;

  // refactor ovanstående för use in multiple places. Och spara 10 min i en config-fil istället...

  dispatch(
    apiCallBegan({
      url: urlWithCacheBuster,
      onStart: openDataRequested.type,
      onSuccess: openDataReceived.type,
      onError: openDataRequestFailed.type,
    })
  );
};
