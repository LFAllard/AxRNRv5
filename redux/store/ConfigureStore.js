// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// export default function () {
//   return configureStore({
//     reducer,
//     middleware: [
//       ...getDefaultMiddleware(),
//       logger({ destination: "console" }),
//       toast,
//       api,
//     ],
//   });
// }

//Från ChatGPT funkar inte:XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const store = configureStore({
//   reducer,
//   middleware: [
//     ...getDefaultMiddleware(),
//     logger({ destination: "console" }),
//     toast,
//     api,
//   ],
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//DENNA FUNKAR MEN ÄR UTAN DEBUGGING...

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger({ destination: "console" }))
      .concat(toast)
      .concat(api),
});

export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "remote-redux-devtools";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     composeWithDevTools(
//       getDefaultMiddleware()
//         .concat(logger({ destination: "console" }))
//         .concat(toast)
//         .concat(api)
//     ),
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXX Nästa försök med @redux-devtools/extension 240304

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     composeWithDevTools(
//       getDefaultMiddleware()
//         .concat(logger({ destination: "console" }))
//         .concat(toast)
//         .concat(api)
//     ),
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Nästa försök 240304

// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(logger({ destination: "console" }))
//       .concat(toast)
//       .concat(api),
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/remote";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const composedEnhancer = composeWithDevTools({
//   realtime: true, //REMOVE IN PRODUCTION!!
//   hostname: "localhost", //REMOVE IN PRODUCTION!!
//   port: 8000, //REMOVE IN PRODUCTION!!
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(logger({ destination: "console" }))
//       .concat(toast)
//       .concat(api),
//   enhancers: [composedEnhancer],
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX nu 240306

// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/remote";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const composedEnhancer = composeWithDevTools({
//   realtime: true,
//   hostname: "localhost",
//   port: 8000,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware()
//       .concat(logger({ destination: "console" }))
//       .concat(toast)
//       .concat(api),
//   enhancers: (defaultEnhancers) => [composedEnhancer(...defaultEnhancers)],
// });

// export default store;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX Ännu ett försök 240306

// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@redux-devtools/remote";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// const composedEnhancer = composeWithDevTools({
//   realtime: true,
//   hostname: "localhost",
//   port: 8000,
// });

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(logger).concat(toast).concat(api),
//   enhancers: (defaultEnhancers) => [composedEnhancer(...defaultEnhancers)],
// });

// export default store;
