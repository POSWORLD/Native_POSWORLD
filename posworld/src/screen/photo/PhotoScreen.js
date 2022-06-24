import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import HeaderScreen from "../HeaderScreen";
import { IMG_PATH } from "../../http/CustomAxios";
import { ActivityIndicator, FAB } from "react-native-paper";
import { selectPhoto } from "../../store/photos";
import { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import PhotoGridItem from "./PhotoGridItem";
function PhotoScreen() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const photolist = useSelector((state) => state.photos.photo);
  console.log(photolist);
  const isFocused = useIsFocused();
  const getPhotolist = () => {
    console.log("하냐");
    dispatch(selectPhoto());
  };

  useEffect(() => {
    console.log("시작");
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
      <View style={{ flex: 1 }}>
        <FAB
          position="right"
          style={styles.fab}
          icon="plus"
          onPress={() => console.log("Pressed")}
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
    margin: 16,
    right: 0,
    flex: 1,
  },
});
export default PhotoScreen;
