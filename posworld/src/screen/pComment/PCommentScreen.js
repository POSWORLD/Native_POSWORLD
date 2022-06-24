import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import HeaderScreen from "../HeaderScreen";

import PCommentOneScreen from "./PCommentOneScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { createPcomment, selectPcomment } from "../../store/pComments";
import { useIsFocused } from "@react-navigation/native";
function PCommentScreen() {
  const dispatch = useDispatch();
  const pComments = useSelector((state) => state.pComments);
  const commentList = useSelector((state) => state.pComments.comments);
  const photoid = useSelector((state) => state.photos.pid);
  console.log("commentList", commentList);
  const isFocused = useIsFocused();

  const [message, setMessage] = useState({
    pid: photoid,
    content: "",
    userid: "1",
  });

  const commentPatch = () => {
    dispatch(selectPcomment());
  };

  const onChangeTextHandler = (name, value) => {
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const onSubmit = () => {
    dispatch(createPcomment(message));
  };

  useEffect(() => {
    console.log("select");
    commentPatch();
  }, [isFocused]);
  return (
    <>
      <HeaderScreen name="댓글" />
      <View style={styles.message}>
        <AntDesign name="message1" size={18}></AntDesign>
        <Text style={styles.messageText}>
          <Text style={{ fontWeight: "bold" }}> {commentList.length}개</Text>의
          댓글이 있어요.
        </Text>
      </View>
      <View style={{ flex: 10, top: 0 }}>
        {pComments.loading ? (
          <ActivityIndicator></ActivityIndicator>
        ) : (
          <FlatList
            data={Object.keys(commentList)}
            renderItem={(key) => (
              <PCommentOneScreen
                commentItem={commentList[key.index]}
                commentList={commentList}
              />
            )}
            keyExtractor={(key) => key}
          />
        )}
      </View>
      <View style={styles.textInputDiv}>
        <TextInput
          mode="outlined"
          placeholder="따뜻한 댓글을 남겨주세요"
          onChangeText={(value) => onChangeTextHandler("content", value)}
          style={styles.textInput}
        ></TextInput>
        <View style={styles.touchButton}>
          <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
            <Feather name="send" style={styles.featherIcon} size={30}></Feather>
          </TouchableOpacity>
        </View>
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
    margin: 3,
    textAlign: "center",
    justifyContent: "space-between",
  },
  textInputDiv: {
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    padding: 1,
    margin: 5,
    alignItems: "center",
  },
  touchButton: {
    flex: 0.2,
    textAlign: "right",
  },
  button: {
    alignItems: "center",
  },
});

export default PCommentScreen;
