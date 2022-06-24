import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { login, loginCheck } from "../store/user";

const LoginScreen = () => {
  const dispath = useDispatch();
  const [user, setUser] = useState({
    userid: "",
    pw: "",
  });
  const onChangeTextHandler = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    await dispath(login(user));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./img/logo.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="아이디"
          placeholderTextColor="#808080"
          onChangeText={(value) => onChangeTextHandler("userid", value)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="비밀번호"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          onChangeText={(value) => onChangeTextHandler("pw", value)}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={onSubmit}>
            로그인
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>회원가입</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#E0E0E0",
    flexDirection: "row",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },

  buttonView: {
    flexDirection: "row",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 0.7,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    color: "#202020",
    marginTop: 10,
    marginBottom: 30,
  },

  loginBtn: {
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#C0C0C0",
    flex: 0.72,
  },
  loginText: {
    color: "#404040",
  },
});
