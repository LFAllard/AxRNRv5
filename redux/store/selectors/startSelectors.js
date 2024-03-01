// // dynamicSelectors.js

// // export const safeGetDynamic = (obj, pathArray) => {
// //   return pathArray.reduce(
// //     (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
// //     obj
// //   );
// // };

// export const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectStartData = (state) => {
//   const aktsys = safeGet(state, ["entities", "system", "aktsys"]);
//   const spool = safeGet(state, [
//     "entities",
//     "start",
//     "startData",
//     "spool",
//     aktsys,
//   ]);
//   const epool = safeGet(state, [
//     "entities",
//     "start",
//     "startData",
//     "epool",
//     aktsys,
//   ]);

//   const dsrbiSpoolPath = [
//     "entities",
//     "start",
//     "startData",
//     "deadshowrbi",
//     aktsys,
//     spool,
//     "propid",
//   ];
//   const dsrbiEpoolPath = [
//     "entities",
//     "start",
//     "startData",
//     "deadshowrbi",
//     aktsys,
//     epool,
//     "propid",
//   ];
//   const dsnegSpoolPath = [
//     "entities",
//     "start",
//     "startData",
//     "deadshowneg",
//     aktsys,
//     spool,
//     "propid",
//   ];
//   const dsnegEpoolPath = [
//     "entities",
//     "start",
//     "startData",
//     "deadshowneg",
//     aktsys,
//     epool,
//     "propid",
//   ];
//   const egenkand_aktivpropidEpoolPath = [
//     "entities",
//     "start",
//     "startData",
//     "egenkand_aktivpropid",
//     aktsys,
//     epool,
//   ];

//   const spoolData = {
//     poolid: spool,
//     dsrbipropid: safeGet(state, dsrbiSpoolPath),
//     dsnegpropid: safeGet(state, dsnegSpoolPath),
//   };
//   const epoolData = {
//     poolid: epool,
//     dsrbipropid: safeGet(state, dsrbiEpoolPath),
//     dsnegpropid: safeGet(state, dsnegEpoolPath),
//     egenkand_aktivpropid: safeGet(state, egenkand_aktivpropidEpoolPath),
//   };
//   return { spoolData, epoolData, aktsys };
// };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];
// const ENTITIES_SYSTEM_AKTSYS_PATH = ["entities", "system", "aktsys"];

// const createDynamicPathSelector = (path) => {
//   return (state) => safeGet(state, [...ENTITIES_START_STARTDATA_PATH, ...path]);
// };

// export const safeGet = (obj, path, defaultValue = null) =>
//   path.reduce(
//     (xs, x) =>
//       xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : defaultValue,
//     obj
//   );

// export const selectStartData = (state) => {
//   const aktsys = safeGet(state, ENTITIES_SYSTEM_AKTSYS_PATH);

//   const getPoolData = createDynamicPathSelector(["deadshowrbi", aktsys]);
//   const getSpool = createDynamicPathSelector(["spool", aktsys]);
//   const getEpool = createDynamicPathSelector(["epool", aktsys]);

//   const spool = getSpool(state);
//   const epool = getEpool(state);

//   const getSpoolData = (propid) => getPoolData(state, [spool, "propid"]);
//   const getEpoolData = (propid) => getPoolData(state, [epool, "propid"]);

//   const spoolData = {
//     poolid: spool,
//     dsrbipropid: getSpoolData("dsrbi"),
//     dsnegpropid: getSpoolData("dsneg"),
//   };

//   const epoolData = {
//     poolid: epool,
//     dsrbipropid: getEpoolData("dsrbi"),
//     dsnegpropid: getEpoolData("dsneg"),
//   };

//   return { spoolData, epoolData, aktsys };
// };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { selectAktsys, selectSpool, selectEpool } from "./systoPoolSelectors";

// import { safeGet } from "./utilitySelectors";

// const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];

// const createDynamicPathSelector = (path, aktsys) => {
//   return (state) =>
//     safeGet(state, [...ENTITIES_START_STARTDATA_PATH, ...path, aktsys]);
// };

// export const selectStartData = (state) => {
//   const aktsys = selectAktsys(state);

//   const spool = selectSpool(state, aktsys);
//   const epool = selectEpool(state, aktsys);

//   const getPoolData = createDynamicPathSelector(["deadshowrbi"], aktsys);

//   const getSpoolData = (propid) => getPoolData(state, [spool, "propid"]);
//   const getEpoolData = (propid) => getPoolData(state, [epool, "propid"]);

//   const spoolData = {
//     poolid: spool,
//     dsrbipropid: getSpoolData("dsrbi"),
//     dsnegpropid: getSpoolData("dsneg"),
//   };

//   const epoolData = {
//     poolid: epool,
//     dsrbipropid: getEpoolData("dsrbi"),
//     dsnegpropid: getEpoolData("dsneg"),
//   };

//   console.log("spoolDatafromSelector", spoolData);
//   console.log("aktsys", aktsys);
//   console.log("spool", spool);
//   console.log("epool", epool);

//   return { spoolData, epoolData, aktsys };
// };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { selectAktsys, selectSpool, selectEpool } from "./systoPoolSelectors";

// import { safeGet } from "./utilitySelectors";

// const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];

// const createDynamicPathSelector = (path, aktsys) => {
//   return (state, additionalPath = []) =>
//     safeGet(state, [
//       ...ENTITIES_START_STARTDATA_PATH,
//       ...path,
//       aktsys,
//       ...additionalPath,
//     ]);
// };

// export const selectStartData = (state) => {
//   const aktsys = selectAktsys(state);

//   const spool = selectSpool(state, aktsys);
//   const epool = selectEpool(state, aktsys);

//   const getRbiPoolData = createDynamicPathSelector(["deadshowrbi"], aktsys);
//   const getNegPoolData = createDynamicPathSelector(["deadshowneg"], aktsys); // Add this line if "deadshowneg" is the correct path

//   const getSpoolData = (propid) => getRbiPoolData(state, [spool, propid]);
//   const getEpoolData = (propid) => getRbiPoolData(state, [epool, propid]);

//   const getSpoolNegData = (propid) => getNegPoolData(state, [spool, propid]); // Add this line
//   const getEpoolNegData = (propid) => getNegPoolData(state, [epool, propid]); // Add this line

//   const spoolData = {
//     poolid: spool,
//     dsrbipropid: getSpoolData("propid"),
//     dsnegpropid: getSpoolNegData("propid"), // Use getSpoolNegData instead
//   };

//   const epoolData = {
//     poolid: epool,
//     dsrbipropid: getEpoolData("propid"),
//     dsnegpropid: getEpoolNegData("propid"), // Use getEpoolNegData instead
//   };

//   console.log("Mina epooldata för debugging:", epoolData);
//   return { spoolData, epoolData, aktsys };
// };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { selectAktsys, selectSpool, selectEpool } from "./systoPoolSelectors";
// import { safeGet } from "./utilitySelectors";

// const ENTITIES_START_STARTDATA_PATH = ["entities", "start", "startData"];

// const createDynamicPathSelector = (path, aktsys) => {
//   return (state, dynamicValues = [], additionalPath = []) =>
//     safeGet(state, [
//       ...ENTITIES_START_STARTDATA_PATH,
//       ...path,
//       aktsys,
//       ...dynamicValues,
//       ...additionalPath,
//     ]);
// };

// export const selectStartData = (state) => {
//   const aktsys = selectAktsys(state);

//   const spool = selectSpool(state, aktsys);
//   const epool = selectEpool(state, aktsys);

//   const getRbiPoolData = createDynamicPathSelector(["deadshowrbi"], aktsys);
//   const getNegPoolData = createDynamicPathSelector(["deadshowneg"], aktsys);

//   const getSpoolData = (propid) => getRbiPoolData(state, [spool], [propid]);
//   const getEpoolData = (propid) => getRbiPoolData(state, [epool], [propid]);

//   const getSpoolNegData = (propid) => getNegPoolData(state, [spool], [propid]);
//   const getEpoolNegData = (propid) => getNegPoolData(state, [epool], [propid]);

//   const spoolData = {
//     poolid: spool,
//     dsrbipropid: getSpoolData("propid"),
//     dsnegpropid: getSpoolNegData("propid"),
//   };

//   const epoolData = {
//     poolid: epool,
//     dsrbipropid: getEpoolData("propid"),
//     dsnegpropid: getEpoolNegData("propid"),
//     egenkand_aktivpropid:
//   };

//   console.log("Mina epooldata för debugging:", epoolData);
//   console.log("Mina spooldata för debugging:", spoolData);
//   console.log("Aktsys för debugging:", aktsys);
//   return { spoolData, epoolData, aktsys };
// };

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

import { selectAktsys, selectSpool, selectEpool } from "./systoPoolSelectors";
import { safeGet } from "./utilitySelectors";

export const selectStartData = (state) => {
  // Step 3: Retrieve dynamic values
  const aktsys = selectAktsys(state);
  const spool = selectSpool(state, aktsys);
  const epool = selectEpool(state, aktsys);

  console.log("aktsys:", aktsys, "spool:", spool, "epool:", epool);

  // Step 4: Access data structure for spoolData
  const spoolDeadShowRbiPropId = safeGet(state, [
    "entities",
    "start",
    "startData",
    aktsys,
    spool,
    "deadshowrbi",
    "propid",
  ]);
  const spoolDeadShowNegPropId = safeGet(state, [
    "entities",
    "start",
    "startData",
    aktsys,
    spool,
    "deadshowneg",
    "propid",
  ]);

  console.log(
    "spoolDeadShowRbiPropId:",
    spoolDeadShowRbiPropId,
    "spoolDeadShowNegPropId:",
    spoolDeadShowNegPropId
  );

  // Construct spoolData
  const spoolData = {
    poolid: spool,
    dsrbipropid: spoolDeadShowRbiPropId,
    dsnegpropid: spoolDeadShowNegPropId,
  };

  // Step 4: Access data structure for epoolData
  const epoolDeadShowRbiPropId = safeGet(state, [
    "entities",
    "start",
    "startData",
    aktsys,
    epool,
    "deadshowrbi",
    "propid",
  ]);
  const epoolDeadShowNegPropId = safeGet(state, [
    "entities",
    "start",
    "startData",
    aktsys,
    epool,
    "deadshowneg",
    "propid",
  ]);
  const egenKandAktivPropId = safeGet(state, [
    "entities",
    "start",
    "startData",
    aktsys,
    epool,
    "egenkand_aktivpropid",
  ]);

  // Construct epoolData
  const epoolData = {
    poolid: epool,
    dsrbipropid: epoolDeadShowRbiPropId,
    dsnegpropid: epoolDeadShowNegPropId,
    egenkand_aktivpropid: egenKandAktivPropId,
  };

  // Step 6: Return the data
  console.log("Mina epooldata för debugging:", epoolData);
  console.log("Mina spooldata för debugging:", spoolData);
  console.log("Aktsys för debugging:", aktsys);
  return { spoolData, epoolData, aktsys };
};
