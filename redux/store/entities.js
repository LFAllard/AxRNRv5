import { combineReducers } from "redux";
import openDataReducer from "./slices/openData";
// import bugsReducer from "./bugs";
// import projectsReducer from "./projects";
// import usersReducer from "./users";
import userReducer from "./slices/user";
import startReducer from "./slices/start";
import systemReducer from "./slices/system";
import languageReducer from "./slices/language";
import sessReducer from "./slices/sessor";

export default combineReducers({
  // bugs: bugsReducer,
  // projects: projectsReducer,
  // users: usersReducer,
  openData: openDataReducer,
  user: userReducer,
  start: startReducer,
  system: systemReducer,
  language: languageReducer,
  sessor: sessReducer,
});
