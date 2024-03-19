// import React from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store/ConfigureStore";
// import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./navigation/AppNavigator";

// function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <StackNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

//Försök med dispatch av load open dataXXXXXXXXXXXXXXXXXXXXXXXX

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store/ConfigureStore";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/AppNavigator";
import { loadOpenData } from "./redux/store/slices/openData";

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

function AppContent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadOpenData()); // Dispatch your action
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
