import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import HeaderScreen from "../HeaderScreen";
import { FAB } from "react-native-paper";
function PhotoScreen() {
  return (
    <View>
      <HeaderScreen name="사진첩" />
      <View>
        <FlatList renderItem={(item) => renderItem(item)}></FlatList>
      </View>
      <FAB
        position="right"
        style={styles.fab}
        icon="plus"
        onPress={() => console.log("Pressed")}
        size="small"
      />
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

const styles = StyleSheet.create({
  fabButton: {
    position: "absolute",
    bottom: 0,
    right: 10,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
export default PhotoScreen;
