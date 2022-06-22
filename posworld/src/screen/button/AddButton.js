import { Pressable, StyleSheet, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

function AddButton() {
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.circle}>
        <AntDesign name="plus" size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    elevation: 10,
    borderRadius: 27,
    height: 54,
    width: 54,
    position: "absolute",
    right: "10%",
    bottom: 0,
    justifyContent: "flex-end",
    flex: 1,
  },
  circle: {
    backgroundColor: "#4897C9",
    borderRadius: 27,
    height: 54,
    width: 54,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddButton;
