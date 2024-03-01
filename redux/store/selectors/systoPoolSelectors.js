import { safeGet } from "./utilitySelectors";

const ENTITIES_SYSTEM_AKTSYS_PATH = ["entities", "system", "aktsys"];
const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];

export const selectAktsys = (state) =>
  safeGet(state, ENTITIES_SYSTEM_AKTSYS_PATH);
export const selectSpool = (state, aktsys) =>
  safeGet(state, [...ENTITIES_START_STARTDATA_PATH, aktsys, "spool"]);
export const selectEpool = (state, aktsys) =>
  safeGet(state, [...ENTITIES_START_STARTDATA_PATH, aktsys, "epool"]);
