//XXXXXXXXXXX Boilerplate från react native

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//XXXXXXXXXXXXX Principskiss från ChatGPT

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/ConfigureStore";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/AppNavigator";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

//XXXXXXXXXXXXXXX Från Fixmapp

// import * as React from "react";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // import Kf from "./app/screens/KfOoo";

// import StackNavigator from "./navigation/AppNavigator";

// function App() {
//   return (
//     <NavigationContainer>
//       <StackNavigator />
//     </NavigationContainer>
//   );
// }

// export default App;
