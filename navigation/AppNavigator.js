import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BffOoo from "../screens/BffOoo";
import BffqgOoo from "../screens/BffqgOoo";
import BffqhOoo from "../screens/BffqhOoo";
import BffxOoo from "../screens/BffxOoo";
// import BgfOoo from "../screens/BgfOoo";
// import BhfOoo from "../screens/BhfOoo";
// import BhnOoo from "../screens/BhnOoo";
// import IfOoo from "../screens/IfOoo";
// import KfOoo from "../screens/KfOoo";
// import LfOoo from "../screens/LfOoo";
// import LfqgOoo from "../screens/LfqgOoo";
// import LfqhOoo from "../screens/LfqhOoo";
// import LgOoo from "../screens/LgOoo";
// import LgqfOoo from "../screens/LgqfOoo";
// import LgqgOoo from "../screens/LgqgOoo";
// import LgqhOoo from "../screens/LgqhOoo";
// import LhOoo from "../screens/LhOoo";
// import NfOoo from "../screens/NfOoo";
// import OfOoo from "../screens/OfOoo";
// import PfOoo from "../screens/PfOoo";
// import QfOoo from "../screens/QfOoo";
// import QgOoo from "../screens/QgOoo";
// import TfOoo from "../screens/TfOoo";
// import UfOoo from "../screens/UfOoo";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      gestureEnabled: false,
      animation: "none",
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="BffOoo"
      component={BffOoo}
      options={{ title: "Dynamic content" }}
    />

    <Stack.Screen
      name="BffqgOoo"
      component={BffqgOoo}
      options={{ title: "Dynamic content statement" }}
    />

    <Stack.Screen
      name="BffqhOoo"
      component={BffqhOoo}
      options={{ title: "Dynamic content statistics" }}
    />

    <Stack.Screen
      name="BffxOoo"
      component={BffxOoo}
      options={{ title: "ForumChooserUtloggad" }}
    />

    {/* <Stack.Screen
      name="BgfOoo"
      component={BgfOoo}
      options={{ title: "Static content" }}
    />

    <Stack.Screen
      name="BhfOoo"
      component={BhfOoo}
      options={{ title: "Member" }}
    />

    <Stack.Screen
      name="BhnOoo"
      component={BhnOoo}
      options={{ title: "Login" }}
    />

    <Stack.Screen name="KfOoo" component={KfOoo} options={{ title: "Write" }} />
    <Stack.Screen name="IfOoo" component={IfOoo} options={{ title: "Qcone" }} />
    <Stack.Screen
      name="LfOoo"
      component={LfOoo}
      options={{ title: "ReadStat" }}
    />
    <Stack.Screen
      name="LfqgOoo"
      component={LfqgOoo}
      options={{ title: "MutStatHela" }}
    />
    <Stack.Screen
      name="LfqhOoo"
      component={LfqhOoo}
      options={{ title: "Stastistics" }}
    />
    <Stack.Screen
      name="LgOoo"
      component={LgOoo}
      options={{ title: "ReadPres" }}
    />
    <Stack.Screen
      name="LgqfOoo"
      component={LgqfOoo}
      options={{ title: "PresStatHela" }}
    />
    <Stack.Screen
      name="LgqgOoo"
      component={LgqgOoo}
      options={{ title: "PresHela" }}
    />
    <Stack.Screen
      name="LgqhOoo"
      component={LgqhOoo}
      options={{ title: "PresStatistics" }}
    />
    <Stack.Screen
      name="LhOoo"
      component={LhOoo}
      options={{ title: "ReporPresStat" }}
    />
    <Stack.Screen name="NfOoo" component={NfOoo} options={{ title: "Rate" }} />
    <Stack.Screen
      name="NfOooBetyg"
      component={NfOoo}
      options={{ title: "RateRunda", animation: "slide_from_bottom" }}
    />
    <Stack.Screen name="OfOoo" component={OfOoo} options={{ title: "State" }} />
    <Stack.Screen name="PfOoo" component={PfOoo} options={{ title: "Stand" }} />
    <Stack.Screen
      name="QfOoo"
      component={QfOoo}
      options={{ title: "NegotiateStat" }}
    />
    <Stack.Screen
      name="QgOoo"
      component={QgOoo}
      options={{ title: "NegotiatePres" }}
    />

    <Stack.Screen
      name="TfOoo"
      component={TfOoo}
      options={{ title: "LogOut" }}
    />
    <Stack.Screen
      name="UfOoo"
      component={UfOoo}
      options={{ title: "Records" }}
    /> */}
  </Stack.Navigator>
);

export default StackNavigator;
