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
