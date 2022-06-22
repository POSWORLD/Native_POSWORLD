import { Text, View } from "react-native";
import HeaderScreen from "../HeaderScreen";
import PCommentOneScreen from "./PCommentOneScreen";

function PCommentScreen() {
  return (
    <>
      <HeaderScreen name="댓글" />
      <View>
        <Text>1개의 댓글이 있어요.</Text>
      </View>
      <PCommentOneScreen />
    </>
  );
}

export default PCommentScreen;
