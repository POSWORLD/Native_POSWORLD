import { StyleSheet, Text, View } from "react-native";
import HeaderScreen from "../HeaderScreen";
import PCommentOneScreen from "./PCommentOneScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
function PCommentScreen() {
  return (
    <>
      <HeaderScreen name="댓글" />
      <View style={styles.message}>
        <AntDesign name="message1" size={18}></AntDesign>
        <Text style={styles.messageText}>
          <Text style={{ fontWeight: "bold" }}> 1개</Text>의 댓글이 있어요.
        </Text>
      </View>
      <View style={{ flex: 10, top: 0 }}>
        <PCommentOneScreen />
      </View>
      <View style={styles.textInputDiv}>
        <TextInput
          mode="outlined"
          placeholder="따뜻한 댓글을 남겨주세요"
          style={styles.textInput}
        ></TextInput>
        <Feather name="send" style={styles.featherIcon} size={30}></Feather>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  message: {
    margin: 15,
    flex: 0.5,
    flexDirection: "row",
  },
  messageText: {
    fontSize: 15,
  },
  textInput: {
    fontSize: 20,
    flex: 0.8,
    bottom: 3,
    margin: 5,
    justifyContent: "center",
  },
  featherIcon: {
    flex: 0.2,
    margin: 3,
    textAlign: "center",
    justifyContent: "space-between",
  },
  textInputDiv: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    flex: 0,
    justifyContent: "center",
    padding: 1,
    margin: 5,
    alignItems: "center",
  },
});

export default PCommentScreen;
