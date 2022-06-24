import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { signUp } from "../store/user";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const dispath = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState({
    userid: "",
    pw: "",
    name: "",
    gender: "m",
  });
  const onChangeTextHandler = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onSubmit = async () => {
    await dispath(signUp(user));
    await navigation.navigate("login");
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

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="닉네임"
          placeholderTextColor="#808080"
          onChangeText={(value) => onChangeTextHandler("name", value)}
        />
      </View>

      <View style={styles.radio}>
        <Text>남</Text>
        <RadioButton
          value="m"
          status={user.gender === "m" ? "checked" : "unchecked"}
          onPress={() => onChangeTextHandler("gender", "m")}
        />
        <Text>{`      여`}</Text>
        <RadioButton
          value="f"
          status={user.gender === "f" ? "checked" : "unchecked"}
          onPress={() => onChangeTextHandler("gender", "f")}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginBtn} onPress={onSubmit}>
          <Text style={styles.loginText}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          로그인
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  radio: {
    flexDirection: "row",
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
