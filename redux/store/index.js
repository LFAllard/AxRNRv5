// import { compose, pipe } from "lodash/fp";
import configureStore from "ConfigureStore";
import { loadOpenData } from "slices/openData";
import { userIdentified } from "slices/user";
import {
  loadStartData,
  viewPresStat,
  reportPresStat,
  updatePssss,
} from "slices/start";
import { systemChosen } from "slices/system";
import { languageChosen } from "slices/language";
import { loadSessData } from "slices/sessor";

const store = configureStore();

//UI layer

// store.dispatch(loadBugs());

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

const dispatchActions = async () => {
  store.dispatch(loadOpenData());
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(userIdentified({ imid: 48 }));
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(loadStartData());
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(systemChosen({ aktsys: "stmb" }));
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(languageChosen({ aktlang: "sv" }));
  await sleep(2000); // Pause for 5 seconds

  // store.dispatch(loadSessData());
  // await sleep(2000); // Pause for 5 seconds

  store.dispatch(loadSessData(true, true));
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(viewPresStat());
  await sleep(2000); // Pause for 5 seconds

  store.dispatch(reportPresStat());
  await sleep(2000); // Pause for 5 seconds

  // store.dispatch(updatePssss({ sysid: "stmb", poolid: "sbpa" }));
  // await sleep(2000); // Pause for 5 seconds
};

dispatchActions();
