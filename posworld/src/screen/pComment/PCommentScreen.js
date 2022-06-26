import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import HeaderScreen from "../HeaderScreen";
import * as Notifications from "expo-notifications";
import PCommentOneScreen from "./PCommentOneScreen";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { TextInput } from "react-native-paper";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  createPcomment,
  selectPcomment,
  deletePcomment,
} from "../../store/pComments";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function PCommentScreen() {
  const dispatch = useDispatch();
  const pComments = useSelector((state) => state.pComments);
  const myId = useSelector((state) => state.user.myId);
  const commentList = useSelector((state) => state.pComments.comments);
  const photoid = useSelector((state) => state.photos.pid);
  const isFocused = useIsFocused();

  const onDelete = (id) => {
    const myId = getId();
    dispatch(deletePcomment(id, myId));
    commentPatch();
  };

  const [message, setMessage] = useState({
    pid: photoid,
    content: "",
    userid: myId,
  });

  const getId = async () => {
    const myId = await AsyncStorage.getItem("myId");
    return myId;
  };

  const [text, setText] = useState("");

  const commentPatch = () => {
    dispatch(selectPcomment(photoid));
  };

  const onChangeTextHandler = (name, value) => {
    setText(value);
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const onSubmit = async () => {
    await dispatch(createPcomment(message));
    await dispatch(selectPcomment(photoid));
    setText("");
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Times up!",
        body: message.content,
      },
      trigger: 20,
    });
  };

  useEffect(() => {
    commentPatch();
  }, []);
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
                onDelete={onDelete}
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
          value={text}
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
