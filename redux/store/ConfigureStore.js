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

//XXXXXXXXXXXXXXXXXX 240308 uppdaterade bibliotek här @reduxjs/toolkit

// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";
// import logger from "./middleware/logger";
// import toast from "./middleware/toast";
// import api from "./middleware/api";

// export default function () {
//   return configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware().concat(
//         logger({ destination: "console" }),
//         toast,
//         api
//       ),
//   });
// }

//240320 version från GPT efter konaultation av stackoverflow, för merge rn/redux

// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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

//240320 ny version åter till function export fixar själv, snarlik två upp men import av getDefaultMiddleware:

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";

export default function () {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        logger({ destination: "console" }),
        toast,
        api
      ),
  });
}
