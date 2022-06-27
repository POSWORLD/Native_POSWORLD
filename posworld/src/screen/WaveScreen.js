import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { countUserApi } from "../store/usersApi";

function WaveScreen() {
  const navigation = useNavigation();
  const wave = async () => {
    const userNum = await countUserApi();
    const rand = Math.floor(Math.random() * userNum) + 1;
    const id = await AsyncStorage.getItem("myId");

    if (rand != id) {
      alert(rand + "로 파도타기");
      AsyncStorage.setItem("homeId", `${rand}`);
      navigation.navigate("Photo");
    }
  };

  const home = async () => {
    const id = await AsyncStorage.getItem("myId");
    AsyncStorage.setItem("homeId", `${id}`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginBtn} onPress={wave}>
          <Text style={styles.loginText}>{`❤  파도타기 ❤`}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginBtn} onPress={home}>
          <Text style={styles.loginText}>{`❤  마이홈  ❤`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default WaveScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#29b6f6",
    flex: 0.72,
  },
  loginText: {
    color: "white",
  },
  buttonView: {
    flexDirection: "row",
    borderRadius: 15,
    height: 50,
    marginBottom: 20,
    alignItems: "center",
  },
});
