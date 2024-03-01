import React from "react";
import { Dimensions, Text, StyleSheet, Platform } from "react-native";

import { normalisera } from "./NormaliseraStorlek";
import colors from "../konfig/colors";

export function BetygstextFF({ children }) {
  return <Text style={styles.betygstextff}>{children}</Text>;
}

export function BildtextFF({ children }) {
  return <Text style={styles.bildtextff}>{children}</Text>;
}

export function BildtextFG({ children }) {
  return <Text style={styles.bildtextfg}>{children}</Text>;
}

export function RubrikFF({ children }) {
  return <Text style={styles.rubrikff}>{children}</Text>;
}

export function RubrikFG({ children }) {
  return <Text style={styles.rubrikfg}>{children}</Text>;
}

export function TextKortFF({ children }) {
  return (
    <Text numberOfLines={4} style={styles.textff}>
      {children}
    </Text>
  );
}

export function TextFullFF({ children }) {
  return <Text style={styles.textff}>{children}</Text>;
}

export function TextFullFG({ children }) {
  return <Text style={styles.textfg}>{children}</Text>;
}

const windowBredd = Dimensions.get("window").width;
const skala = windowBredd / 375;

const styles = StyleSheet.create({
  betygstextff: {
    fontSize: normalisera(22),
    fontStyle: "normal",
    fontWeight: "600",
    color: colors.rubrikff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textAlign: "center",
  },
  bildtextff: {
    fontSize: normalisera(12),
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.textff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginTop: normalisera(4),
    marginBottom: normalisera(6),
  },
  bildtextfg: {
    fontSize: normalisera(14),
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.textff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginTop: normalisera(4),
    marginBottom: normalisera(6),
  },
  rubrikff: {
    fontSize: normalisera(17),
    fontStyle: "normal",
    fontWeight: "600",
    color: colors.rubrikff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  rubrikfg: {
    fontSize: normalisera(17),
    fontStyle: "normal",
    fontWeight: "600",
    color: colors.rubrikff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    marginLeft: normalisera(10),
  },
  textff: {
    fontSize: normalisera(12),
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.textff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textfg: {
    fontSize: normalisera(14),
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.textff,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
