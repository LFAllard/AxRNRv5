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
} from "../komponenter/AxelloText";
import styles from "../komponenter/Stilar";
import routes from "../navigation/routes";
// import Navigera from "../navigation/NavigeraMera";

import { KlickForumChooser } from "../komponenter/ForumChoosers";
import { KlickadForumChooser } from "../komponenter/ForumChoosers";

// import QfKfLf from "./swipeScreens/QfKfLf";

function IfOoo({ navigation }) {
  return (
    <View style={styles.totalyta}>
      <SafeAreaView style={styles.safeyta}>
        <View style={styles.rotationsyta}>
          <ScrollView contentContainerStyle={styles.scrollyta}>
            <View style={styles.paddinguppe}></View>
            <View style={styles.toppyta}>
              <View style={styles.flankruta}>
                <View style={styles.ikonbox}>
                  <View style={styles.toppknapp2}>
                    <MaterialCommunityIcons
                      name="format-list-bulleted"
                      size={normalisera(26)}
                      color={colors.textff}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.mittruta}>
                <View style={styles.forumyta2}>
                  <RubrikFF>Qcone</RubrikFF>
                </View>
              </View>
              <View style={styles.flankruta}>
                <View style={styles.ikonbox}>
                  <View style={styles.toppknapp2}>
                    <AntDesign
                      name="logout"
                      size={normalisera(26)}
                      color={colors.textff}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>

            <View style={styles.sidfinnarbar}>
              <View style={styles.forummenyknapp}>
                <Pressable
                  style={({ pressed }) => [
                    pressed
                      ? styles.klickadforummenyknapp
                      : styles.klickforummenyknapp,
                  ]}
                  onPress={() => navigation.goBack()}
                >
                  <RubrikFF>Global cone (English)</RubrikFF>
                </Pressable>
              </View>
            </View>

            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>

            <View style={styles.sidfinnarbar}>
              <View style={styles.forummenyknapp}>
                <Pressable
                  style={({ pressed }) => [
                    pressed
                      ? styles.klickadforummenyknapp
                      : styles.klickforummenyknapp,
                  ]}
                  onPress={() => navigation.goBack()}
                >
                  <RubrikFF>Swedish cone (Svenska)</RubrikFF>
                </Pressable>
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
              <AntDesign
                name="closecircleo"
                size={normalisera(26)}
                color={colors.textff}
              />

              <RubrikFG>Close</RubrikFG>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}

export default IfOoo;
