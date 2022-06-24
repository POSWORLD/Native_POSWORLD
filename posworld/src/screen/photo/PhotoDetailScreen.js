import { Link } from "@react-navigation/native";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderScreen from "../HeaderScreen";
import PhotoCard from "./PhotoCard";

function PhotoDetailScreen({ img }) {
  console.log("img", img);
  return (
    <>
      <HeaderScreen />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <PhotoCard></PhotoCard>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  block: { flex: 1 },
  contentContainer: {
    paddingBottom: 40,
  },
});
export default PhotoDetailScreen;
