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
import {
  RubrikFF,
  RubrikFG,
  TextKortFF,
  TextFullFF,
  TextFullFG,
} from "../komponenter/AxelloText";
import styles from "../komponenter/Stilar";

// const windowBredd = Dimensions.get("window").width;

function LfqhOoo({ navigation }) {
  return (
    <View style={styles.totalyta}>
      <SafeAreaView style={styles.safeyta}>
        <View style={styles.rotationsyta}>
          <View style={styles.paddinguppe}></View>
          <View style={styles.toppyta}>
            <View style={styles.toppruta}>
              <View style={styles.visanuyta}>
                <RubrikFF>Statistics</RubrikFF>
              </View>
            </View>
          </View>
          <View style={styles.emptybar}></View>
          <ScrollView contentContainerStyle={styles.scrollyta}>
            <View style={styles.contentrutanocolor}>
              <View style={styles.rubrikbar}>
                <RubrikFF>Mutual statement</RubrikFF>
              </View>

              <View style={styles.emptybar}></View>
              <View style={styles.emptybar}></View>

              <View style={styles.rubrikbar}>
                <TextFullFG>Score: 0.57</TextFullFG>
              </View>
              <View style={styles.rubrikbar}>
                <TextFullFG>BAR CHART</TextFullFG>
              </View>
              <View style={styles.rubrikbar}>
                <TextFullFG>Number of ratings: 78</TextFullFG>
              </View>
              <View style={styles.rubrikbar}>
                <TextFullFG>Report requests: 54</TextFullFG>
              </View>
              <View style={styles.rubrikbar}>
                <TextFullFG>Reports: 6 (11%)</TextFullFG>
              </View>
              <View style={styles.rubrikbar}>
                <TextFullFG>Non responders: 2 (4%)</TextFullFG>
              </View>
            </View>
          </ScrollView>
          <View style={styles.emptybar}></View>
          <View style={styles.bottenyta}>
            <Pressable
              style={({ pressed }) => [
                pressed ? styles.klickadbottenyta : styles.klickbottenyta,
              ]}
              onPress={() => navigation.goBack()}
            >
              {/* <View style={styles.closeikonbox}> */}
              <AntDesign
                name="closecircleo"
                size={normalisera(26)}
                color={colors.textff}
              />
              {/* </View> */}

              <RubrikFG>Close</RubrikFG>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}

export default LfqhOoo;
