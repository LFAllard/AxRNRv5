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

function LfqgOoo({ navigation }) {
  return (
    <View style={styles.totalyta}>
      <SafeAreaView style={styles.safeyta}>
        <View style={styles.rotationsyta}>
          <View style={styles.paddinguppe}></View>
          <View style={styles.toppyta}>
            <View style={styles.toppruta}>
              <View style={styles.visanuyta}>
                <RubrikFF>Mutual statement</RubrikFF>
              </View>
            </View>
          </View>
          <View style={styles.emptybar}></View>
          <ScrollView contentContainerStyle={styles.scrollyta}>
            <View style={styles.contentrutanocolor}>
              <View style={styles.rubrikbar}>
                <RubrikFF>James Cook was a famous sailor</RubrikFF>
              </View>
              <View style={styles.textruta}>
                <TextFullFG>
                  The nicest word in the English language is holidays, said
                  Dick, helping himself to a large spoonful of marmelade. Pass
                  the toast, Anne. Mother, do you feel down-hearted to have us
                  all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.The nicest word in the English language is holidays,
                  said Dick, helping himself to a large spoonful of marmelade.
                  Pass the toast, Anne. Mother, do you feel down-hearted to have
                  us all tearing about the place again? Of course not, said his
                  mother.
                </TextFullFG>
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

export default LfqgOoo;
