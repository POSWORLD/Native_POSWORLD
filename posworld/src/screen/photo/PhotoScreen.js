import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import HeaderScreen from "../HeaderScreen";
import { Dimensions } from "react-native";
import { FAB } from "react-native-paper";
function PhotoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderScreen style={{ flex: 1 }} name="사진첩" />
      <View style={{ flex: 5 }}>
        <FlatList renderItem={(item) => renderItem(item)}></FlatList>
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

const renderItem = ({ item }) => {
  return (
    //todo

    <View style={{ margin: 10, borderColor: "gray", borderWidth: 1 }}>
      <Link to={{ screen: "PostDetail", params: item }}>
        <Text>{item.userName}</Text>
        <Text>{`${IMG_PATH}${item.img}`}</Text>
        <Image
          source={{ uri: `${IMG_PATH}${item.img}` }}
          style={{ width: 100, height: 100 }}
        ></Image>
        <View>
          <Text>{item.content}</Text>
        </View>
      </Link>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
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
