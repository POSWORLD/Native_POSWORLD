import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeaderScreen from "../HeaderScreen";
import { ActivityIndicator, FAB } from "react-native-paper";
import { selectPhoto } from "../../store/photos";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import PhotoGridItem from "./PhotoGridItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
function PhotoScreen({ navigation }) {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const photolist = useSelector((state) => state.photos.photo);
  const isFocused = useIsFocused();
  const getPhotolist = async () => {
    const homeid = await AsyncStorage.getItem("homeId");
    dispatch(selectPhoto(homeid));
  };

  useEffect(() => {
    getPhotolist();
  }, [isFocused]);

  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen style={{ flex: 1 }} name="사진첩" />
      <View style={{ flex: 5 }}>
        {photos.loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <FlatList
            data={Object.keys(photolist)}
            renderItem={(key) => renderItem(photolist[key.index])}
            numColumns={3}
            keyExtractor={(key) => key}
          />
        )}
      </View>
      <View style={{ flex: 1.2 }}>
        <FAB
          position="right"
          style={styles.fab}
          color="#ffffff"
          icon="plus"
          onPress={() => navigation.navigate("PhotoAdd")}
          size="small"
        />
      </View>
    </View>
  );
}
const renderItem = ({ img, id }) => <PhotoGridItem img={img} id={id} />;

const styles = StyleSheet.create({
  fabButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  fab: {
    position: "absolute",
    backgroundColor: "#29b6f6",
    margin: 16,
    right: 0,
    flex: 1,
  },
});
export default PhotoScreen;
