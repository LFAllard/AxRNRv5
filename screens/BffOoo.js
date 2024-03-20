import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { StatusBar } from "expo-status-bar";

import {
  FlatList,
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
// import Navigera from "../navigation/NavigeraMera";
// import getCurwin from "../bffenAPIcurwin";
// import bffenAPIcurwin from "../api/bffenAPIcurwin";

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { StatusBar } from "expo-status-bar";
// import { ScrollView, Pressable, View, SafeAreaView } from "react-native";
// import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

// import { fetchCurwin } from "../redux/actions"; // Adjust the path as per your structure
// import colors from "../konfig/colors";
// import { normalisera } from "../komponenter/NormaliseraStorlek";
// import { RubrikFF, TextKortFF, TextFullFF } from "../komponenter/AxelloText";
// import styles from "../komponenter/Stilar";

function BffOoo({ navigation }) {
  // const entities = useSelector((state) => state.entities);
  // console.log(entities);

  const sbpa = useSelector((state) => state.entities.openData.info.stmb.sbpa);

  // Conditional rendering based on the availability of `sbpa`
  if (!sbpa) {
    // Render a loading indicator or placeholder content if `sbpa` is not available
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text> {/* Customize as needed */}
      </View>
    );
  }

  const rubrik = sbpa.curwin?.rubrik || "Default Title";

  // const dispatch = useDispatch();
  // const curwin = useSelector((state) => state.curwinReducer.curwin);
  // const loading = useSelector((state) => state.curwinReducer.loading);

  // useEffect(() => {
  //   dispatch(fetchCurwin());
  // }, [dispatch]);

  // // Placeholder content if data is loading or unavailable
  // if (loading || !curwin) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <TextFullFF>Loading...</TextFullFF>
  //     </View>
  //   );
  // }

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
                    <Pressable
                      style={({ pressed }) => [
                        pressed
                          ? styles.klickadtoppknapp2
                          : styles.klicktoppknapp2,
                      ]}
                      onPress={() => navigation.navigate("BhfOoo")}
                    >
                      <AntDesign
                        name="login"
                        size={normalisera(26)}
                        color={colors.textff}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={styles.mittruta}>
                <Pressable
                  style={({ pressed }) => [
                    pressed ? styles.forumyta2klickad : styles.forumyta2,
                  ]}
                  onPress={() => navigation.navigate("BffxOoo")}
                >
                  <View style={styles.kompensationsknapp2} />
                  <RubrikFF>Global cone</RubrikFF>
                  <View style={styles.forumknapp2}>
                    <MaterialCommunityIcons
                      name="arrow-down"
                      size={normalisera(26)}
                      color={colors.textff}
                    />
                  </View>
                </Pressable>
              </View>
              <View style={styles.flankruta}>
                <View style={styles.ikonbox}>
                  <View style={styles.toppknapp2}>
                    <Pressable
                      style={({ pressed }) => [
                        pressed
                          ? styles.klickadtoppknapp2
                          : styles.klicktoppknapp2,
                      ]}
                      onPress={() => navigation.navigate("BgfOoo")}
                    >
                      <AntDesign
                        name="infocirlceo"
                        size={normalisera(26)}
                        color={colors.textff}
                      />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.poolfinnarbar}>
              <View style={styles.statementknappAkt}>
                <RubrikFF>Statement</RubrikFF>
              </View>
              <View style={styles.presidentknappPass}>
                <Pressable
                  style={({ pressed }) => [
                    pressed
                      ? styles.klickadpresidentknapp
                      : styles.klickpresidentknapp,
                  ]}
                  onPress={() => navigation.navigate("LgOoo")}
                >
                  <RubrikFF>President</RubrikFF>
                </Pressable>
              </View>
            </View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>

            {/* <FlatList data={prelcurwin} /> */}

            {/* <View style={styles.infotextbar}>
            <TextFullFF>({curwin.rubrik})</TextFullFF>
          </View> */}

            <View style={styles.infotextbar}>
              <TextFullFF>Mutual statement:</TextFullFF>
            </View>

            <View style={styles.contentruta}>
              <Pressable
                style={({ pressed }) => [
                  pressed ? styles.klickadcontentruta : styles.klickcontentruta,
                ]}
                onPress={() => navigation.navigate("BffqgOoo")}
              >
                <View style={styles.rubrikbar}>
                  {/* <RubrikFF>{curwin.rubrik}</RubrikFF> */}
                  {/* <RubrikFF>DETTA ÄR RUBRIK</RubrikFF> */}
                  <RubrikFF>{rubrik}</RubrikFF>
                </View>
                <View style={styles.textruta}>
                  <TextKortFF style={styles.textff}>
                    The nicest word in the English language is holidays, said
                    Dick, helping himself to a large spoonful of marmelade. Pass
                    the toast, Anne. Mother, do you feel down-hearted to have us
                    all tearing about the place again? Of course not, said his
                    mother.
                  </TextKortFF>
                </View>
              </Pressable>
            </View>

            <View style={styles.emptybar}></View>
            <View style={styles.infotextbar}>
              <TextFullFF>Published 7 hours 18 minutes ago.</TextFullFF>
            </View>
            <View style={styles.infotextbar}>
              <TextFullFF>
                Next scheduled update in 16 hours 42 minutes.
              </TextFullFF>
            </View>

            <View style={styles.emptybar}></View>
            <View style={styles.emptybar}></View>
            <View style={styles.infotextbar}>
              <TextFullFF>Statistics:</TextFullFF>
            </View>

            <View style={styles.contentruta}>
              <Pressable
                style={({ pressed }) => [
                  pressed ? styles.klickadcontentruta : styles.klickcontentruta,
                ]}
                onPress={() => navigation.navigate("BffqhOoo")}
              >
                <View style={styles.rubrikbar}>
                  <TextFullFF>Score: 0.57</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>BAR CHART</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>Number of ratings: 78</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>Report requests: 54</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>Reports: 6 (11%)</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>Non responders: 2 (4%)</TextFullFF>
                </View>
              </Pressable>
            </View>

            <View style={styles.paddingnere}></View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <StatusBar style="light" />
    </View>
  );
}

export default BffOoo;
