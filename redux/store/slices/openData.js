import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import moment from "moment";

// let lastId = 0;

const slice = createSlice({
  name: "openData",
  initialState: {
    info: [],
    loading: false,
    lastFetch: null,
  },
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
  // const { lastFetch } = getState().entities.bugs;

  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;

  // refactor ovanstående för use in multiple places. Och spara 10 min i en config-fil istället...

  dispatch(
    apiCallBegan({
      url,
      onStart: openDataRequested.type,
      onSuccess: openDataReceived.type,
      onError: openDataRequestFailed.type,
    })
  );
};
