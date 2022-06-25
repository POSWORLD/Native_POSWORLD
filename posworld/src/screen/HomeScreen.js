import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import HomeBodyScreen from "./home/HomeBodyScreen";
import HomeCommentScreen from "./home/HomeCommentScreen";
import HomeHeaderScreen from "./home/HomeHeaderScreen";
import HomeMiniroomScreen from "./home/HomeMiniroomScreen";

function HomeScreen() {
  return (
    <>
      <View style={styles.homeBg}>
        <View style={styles.header}>
          <HomeHeaderScreen></HomeHeaderScreen>
        </View>
        <View style={styles.title}>
          <Text>양현민님의 미니홈피</Text>
        </View>
        <View style={styles.body}>
          <HomeBodyScreen></HomeBodyScreen>
        </View>
        <View style={styles.miniroom}>
          <HomeMiniroomScreen></HomeMiniroomScreen>
        </View>
        <View style={styles.footer}>
          <HomeCommentScreen></HomeCommentScreen>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  homeBg: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    flex: 1,
  },
  title: {
    flex: 0.3,
  },
  body: {
    flex: 2,
  },
  miniroom: {
    flex: 4,
  },
  footer: {
    flex: 2,
  },
});
export default HomeScreen;
