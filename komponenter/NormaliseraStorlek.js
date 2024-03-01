import React from "react";
import { Dimensions, PixelRatio, Platform } from "react-native";

const windowBredd = Dimensions.get("window").width;
const skala = windowBredd / 375;

export function normalisera(storlek) {
  const nyStorlek = storlek * skala;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(nyStorlek));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(nyStorlek)) - 2;
  }
}
