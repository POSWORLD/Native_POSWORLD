import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function WaveScreen() {
  const navigation = useNavigation();
  const wave = async () => {
    alert("wave!");
    navigation.navigate("home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginBtn} onPress={wave}>
          <Text style={styles.loginText}>{`🏖  파도타기  🏝`}</Text>
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
