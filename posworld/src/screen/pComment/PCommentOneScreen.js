import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";
import changeTime from "../photo/changeTime";
function PCommentOneScreen({ commentItem, commentList }) {
  const onDelete = (id) => {};
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 0.4, marginRight: 10 }}>
        <Image
          source={{
            uri: "https://user-images.githubusercontent.com/46432606/172375796-6622bd79-2a06-4ea3-a170-f233e5bfde70.jpeg",
          }}
          style={{ width: 80, height: 80, marginRight: 10 }}
        ></Image>
      </View>
      <View style={StyleSheet.profileText}>
        <Text style={{ flex: 1 }}> {commentItem.name}</Text>
        <Text style={{ flex: 1 }}> {commentItem.content}</Text>
        <Text style={{ flex: 1, color: "#B0ACAC" }}>
          {changeTime(commentItem.wdate)}
        </Text>
      </View>
      <View style={{ flex: 0.2, textAlign: "end" }}>
        <TouchableOpacity onPress={onDelete(id)}>
          <AntDesign
            name="close"
            size={20}
            style={{
              margin: 10,
              textAlign: "right",
              alignContent: "flex-end",
              flex: 0.2,
            }}
          ></AntDesign>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    margin: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#B0ACAC",
    alignItems: "center",
  },
  profileText: {
    margin: 10,
    flex: 0.5,
    padding: 10,
  },
});
export default PCommentOneScreen;
