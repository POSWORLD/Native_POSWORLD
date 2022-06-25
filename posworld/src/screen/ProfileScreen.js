import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import HomeHeaderScreen from "./home/HomeHeaderScreen";
import { logout, updateUser } from "../store/user";


function ProfileScreen({}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.me);
  console.log("ProfileScreen");
  console.log(user);

  const [form, setForm] = useState({
    userid: user.userid,
    prophoto: user.prophoto,
    file: "",
    name: user.name,
  });

  const [previewImg, setPreviewImg] = useState("");
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      base64: true,
    });

    const splitUri = pickerResult.uri.split("/");
    const prophoto = `${splitUri[splitUri.length - 1]}`;
    const splitUriType = pickerResult.uri.split(".");
    const type = `image/${splitUriType[splitUriType.length - 1]}`;
    const file = {
      uri: pickerResult.uri.replace("file:/data", "file:///data"),
      name: prophoto,
      type,
    };
    setForm({
      ...form,
      prophoto,
      file,
    });
    setPreviewImg(pickerResult.uri);
  };

  const onSubmit = () => {
    dispatch(updateUser(form));
    // navigation.goBack();
  };

  const logoutBtn = () => {
    dispatch(logout());
  };

  // const withdrawal = () => {
  //   dispatch(deleteUser(user.id));
  // };

  return (
    <View style={styles.container}>
      <HomeHeaderScreen></HomeHeaderScreen>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={openImagePickerAsync}>
            {previewImg ? (
              <Image source={{ uri: previewImg }} style={styles.avatar}></Image>
            ) : (
              <Image
                style={styles.avatar}
                source={require("./img/minimi.png")}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <TextInput
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          ></TextInput>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.profileBtn} onPress={onSubmit}>
            <Text style={styles.profileText}>프로필 편집</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.profileBtn} onPress={logoutBtn}>
            <Text style={styles.profileText}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity style={styles.profileBtn} onPress={logoutBtn}>
            <Text style={styles.profileText}>회원탈퇴</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },
  item: {
    margin: 2,
    flexDirection: "row",
  },
  profileBtn: {
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#29b6f6",
    flex: 0.72,
  },
  profileText: {
    color: "white",
  },
});
export default ProfileScreen;
