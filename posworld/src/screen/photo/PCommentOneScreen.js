import { Image, StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
function PCommentOneScreen(content, id, name, pid, wdate) {
  console.log("content", content);
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 0.4 }}>
        <Image
          source={{
            uri: "https://user-images.githubusercontent.com/46432606/172375796-6622bd79-2a06-4ea3-a170-f233e5bfde70.jpeg",
          }}
          style={{ width: 80, height: 80, marginRight: 10 }}
        ></Image>
      </View>
      <View style={StyleSheet.profileText}>
        <Text style={{ flex: 1 }}> {name}</Text>
        <Text style={{ flex: 1 }}> {content}</Text>
        <Text style={{ flex: 1, color: "#B0ACAC" }}>{wdate}</Text>
      </View>
      <AntDesign
        name="close"
        size={20}
        style={{
          margin: 10,
          textAlign: "right",
          alignContent: "flex-end",
          flex: 0.1,
        }}
      ></AntDesign>
      <View></View>
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
    flex: 0.8,
  },
});
export default PCommentOneScreen;
