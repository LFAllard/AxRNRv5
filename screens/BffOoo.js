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
  const brodtext = sbpa.curwin?.brodtext || "Default Text";
  const poolwm = sbpa.curwin?.poolwm || null;
  const poolwmround = poolwm ? poolwm.toFixed(2) : null;
  const poolbetant = sbpa.curwin?.poolbetant || null;
  const repoffantal = sbpa.curwin?.repoffantal || null;
  const repantal = sbpa.curwin?.repantal || null;
  const bortfall = sbpa.curwin?.bortfall || null;

  let repkvotprocstring = null;
  if (
    typeof repantal === "number" &&
    typeof repoffantal === "number" &&
    repoffantal !== 0
  ) {
    const repkvotproc = (repantal / repoffantal) * 100;
    repkvotprocstring = repkvotproc.toFixed(2) + "%";
  }

  let bortfallskvotprocstring = null;
  if (
    typeof bortfall === "number" &&
    typeof poolbetant === "number" &&
    bortfall + poolbetant > 0
  ) {
    const bortfallskvotproc = (bortfall / (bortfall + poolbetant)) * 100;
    bortfallskvotprocstring = bortfallskvotproc.toFixed(2) + "%";
  }

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
                  <TextKortFF style={styles.textff}>{brodtext}</TextKortFF>
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
                  <TextFullFF>Score: {poolwmround ?? "N/A"}</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>BAR CHART</TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>
                    Number of ratings: {poolbetant ?? "N/A"}
                  </TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>
                    Report requests: {repoffantal ?? "N/A"}
                  </TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>
                    Reports: {repantal ?? "N/A"}{" "}
                    {repkvotprocstring ? `(${repkvotprocstring})` : ""}
                  </TextFullFF>
                </View>
                <View style={styles.rubrikbar}>
                  <TextFullFF>
                    Non responders: {bortfall ?? "N/A"}{" "}
                    {bortfallskvotprocstring
                      ? `(${bortfallskvotprocstring})`
                      : ""}
                  </TextFullFF>
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
