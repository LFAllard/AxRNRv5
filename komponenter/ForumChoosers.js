import React from "react";

import { StatusBar } from "expo-status-bar";

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import colors from "../konfig/colors";
import { normalisera } from "../komponenter/NormaliseraStorlek";
import { RubrikFF, TextKortFF, TextFullFF } from "../komponenter/AxelloText";
import styles from "../komponenter/Stilar";
import routes from "../navigation/routes";
// import Navigera from "../navigation/NavigeraMera";

function KlickForumChooser({}) {
  return (
    <View style={styles.forumyta2}>
      <View style={styles.kompensationsknapp2}></View>
      <RubrikFF>Global CONE</RubrikFF>
      <View style={styles.forumknapp2}>
        <MaterialCommunityIcons
          name="arrow-down"
          size={normalisera(26)}
          color={colors.textff}
        />
      </View>
    </View>
  );
}

function KlickadForumChooser({}) {
  return (
    <View style={styles.forumyta2klickad}>
      <View style={styles.kompensationsknapp2klickad}></View>
      <RubrikFF>Global CONE</RubrikFF>
      <View style={styles.forumknapp2klickad}>
        <MaterialCommunityIcons
          name="arrow-down"
          size={normalisera(26)}
          color={colors.textff}
        />
      </View>
    </View>
  );
}

export { KlickForumChooser };
export { KlickadForumChooser };

export const MyComponent = () => {};
