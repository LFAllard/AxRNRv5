// import axios from "axios";
// import * as actions from "../api";

// const api =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== actions.apiCallBegan.type) return next(action);

//     const { url, method, data, onStart, onSuccess, onError } = action.payload;

//     if (onStart) dispatch({ type: onStart });

//     next(action);

//     try {
//       const response = await axios.request({
//         // baseURL: "http://localhost:9001/api", //In a real app probably in a config file!!
//         baseURL: "http://localhost/pmapsd/mapp230812/phpfiler", //In a real app probably in a config file!!
//         url,
//         method,
//         data,
//       });
//       // General
//       dispatch(actions.apiCallSuccess(response.data));
//       //Specific
//       if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
//     } catch (error) {
//       //General
//       dispatch(actions.apiCallFailed(error.message));
//       //Specific
//       if (onError) dispatch({ type: onError, payload: error.message });
//     }
//   };

// export default api;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import axios from "axios";
// import * as actions from "../api";
// import { updatePssss } from "../slices/start";

// const api =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== actions.apiCallBegan.type) return next(action);

//     const { url, method, data, onStart, onSuccess, onError, meta } =
//       action.payload;

//     if (onStart) dispatch({ type: onStart, meta }); // Include meta here

//     next(action);

//     try {
//       const response = await axios.request({
//         //baseURL: "http://localhost:9001/api", //In a real app probably in a config file!!
//         baseURL: "http://localhost/pmapsd/mapp231021/phpfiler", //In a real app probably in a config file!!
//         url,
//         method,
//         data,
//       });

//       if (response.data && response.data.poolsessorsatta) {
//         Object.entries(response.data.poolsessorsatta).forEach(
//           ([poolid, value]) => {
//             if (value === true) {
//               dispatch(
//                 updatePssss({
//                   sysid: meta.aktsys, // Use the aktsys from the meta
//                   poolid,
//                 })
//               );
//             }
//           }
//         );
//       }

//       // General
//       dispatch(actions.apiCallSuccess(response.data));
//       // Specific
//       if (onSuccess)
//         dispatch({ type: onSuccess, payload: response.data, meta }); // Include meta here
//     } catch (error) {
//       // General
//       dispatch(actions.apiCallFailed(error.message));
//       // Specific
//       if (onError) dispatch({ type: onError, payload: error.message, meta }); // Include meta here
//     }
//   };

// export default api;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

import axios from "axios";
import * as actions from "../api";
import { updatePssss } from "../slices/start";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError, meta } =
      action.payload;

    if (onStart) dispatch({ type: onStart, meta });

    next(action);

    try {
      const response = await axios.request({
        // baseURL: "http://localhost/pmapsd/mapp231122/phpfiler", //In a real app probably in a config file!! Bytt fr 1021 till 1122 240110
        // baseURL: "http://localhost/pmapsd/mapp240207/phpfiler", //In a real app probably in a config file!! Bytt fr 1021 till 1122 240110
        baseURL: "http://192.168.1.140/pmapsd/mapp240207/phpfiler", //In a real app probably in a config file!! Bytt fr 1021 till 1122 240110
        url,
        method,
        data,
        // headers: {
        //   "Cache-Control": "no-cache",
        // },
      });

      // Check if data exists in the response and destructure lyckadleverans and poolsessorsatta
      if (response.data) {
        const { lyckadleverans, poolsessorsatta, ...restData } = response.data;

        // Handle lyckadleverans if it's present
        if (lyckadleverans) {
          // Perform any specific actions required for lyckadleverans
          console.log("Successful delivery:", lyckadleverans);
        }

        // Handle poolsessorsatta if it's present
        if (poolsessorsatta) {
          Object.entries(poolsessorsatta).forEach(([poolid, value]) => {
            if (value === true) {
              dispatch(
                updatePssss({
                  sysid: meta.aktsys,
                  poolid,
                })
              );
            }
          });
        }

        // Dispatch the rest of the data to the store
        dispatch(actions.apiCallSuccess(restData));
        if (onSuccess) dispatch({ type: onSuccess, payload: restData, meta });
      } else {
        // Handle the case where there is no data in the response
        console.error("Response did not contain any data");
      }
    } catch (error) {
      dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message, meta });
    }
  };

export default api;

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// import axios from "axios";
// import * as actions from "../api";

// const api =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== actions.apiCallBegan.type) return next(action);

//     const { url, method, data, onStart, onSuccess, onError, meta, headers } =
//       action.payload;

//     if (onStart) dispatch({ type: onStart, meta });

//     next(action);

//     try {
//       const response = await axios.request({
//         baseURL: "http://localhost/pmapsd/mapp230812/phpfiler", // Configurable
//         url,
//         method,
//         data,
//         headers: {
//           "Content-Type": "application/json",
//           ...headers, // Include any other headers passed in action payload
//         },
//       });

//       // General success
//       dispatch(actions.apiCallSuccess(response.data));
//       // Specific success
//       if (onSuccess)
//         dispatch({ type: onSuccess, payload: response.data, meta });
//     } catch (error) {
//       // General error
//       dispatch(actions.apiCallFailed(error.message));
//       // Specific error
//       if (onError) dispatch({ type: onError, payload: error.message, meta });
//     }
//   };

// export default api;
