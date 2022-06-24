import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { createboard } from "../store/boards";
import { useIsFocused } from "@react-navigation/native";

const BoardAddScreen = ({ navigation }) => {
  const { top } = useSafeAreaInsets();

  const [form, setForm] = useState({
    content: "",
    userId: 1,
    homeId: 1,
  });
  const dispatch = useDispatch();
  const onChangeTextHandler = (name, value) => {
    setForm({ ...form, [name]: value });
  };
  console.log(form);
  const onsubmit = () => {
    alert("등록");
    dispatch(createboard(form));
    navigation.goBack();
  };
  return (
    <View>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <View style={styles.block}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.item1}>취소</Text>
          </TouchableOpacity>

          <Text style={styles.nameText}>방명록 남기기</Text>
          <TouchableOpacity onPress={() => onsubmit()}>
            <Text style={styles.item2}>작성</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        placeholder="방명록을 작성해주세요"
        style={styles.input}
        value={form.content}
        onChangeText={(value) => onChangeTextHandler("content", value)}
      ></TextInput>
    </View>
  );
};

export default BoardAddScreen;
const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: "#26a69a",
  },
  block: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#B0ACAC",
  },
  nameText: {
    fontSize: 24,
    textAlign: "center",
    color: "black",
    flex: 1,
  },
  container: {
    flexDirection: "row",
  },
  text1: {
    fontSize: 24,
    textAlign: "left",
    color: "black",
    flex: 1,
  },
  text2: {
    fontSize: 24,
    textAlign: "right",
    color: "black",
    flex: 1,
  },
  input: {
    fontSize: 20,
    paddingVertical: 30,
  },
});
