import { selectAktsys, selectEpool } from "./systoPoolSelectors";
import { safeGet } from "./utilitySelectors";

const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];
const ENTITIES_SESSOR_SESSDATA_PATH = [
  "entities",
  "sessor",
  //   "sessData",
  //   "presstatdata",
];

// Select last viewed PS
export const selectLastViewedPs = (state) => {
  return safeGet(state, [...ENTITIES_START_STARTDATA_PATH, "lastviewedps"]);
};

// Select last reported PS
export const selectLastReportedPs = (state) => {
  return safeGet(state, [...ENTITIES_START_STARTDATA_PATH, "lastreportedps"]);
};

// Select presstatid
export const selectPresStatId = (state) => {
  const aktsys = selectAktsys(state);
  const epool = selectEpool(state, aktsys);

  return safeGet(state, [
    ...ENTITIES_SESSOR_SESSDATA_PATH,
    aktsys,
    "sessData",
    "presstatdata",
    epool,
    "presstatid",
  ]);
};
