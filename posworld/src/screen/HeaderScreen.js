import { StyleSheet, Text, Touchable, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
function HeaderScreen({ name }) {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <View style={styles.block}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => navigation.goBack}
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <View style={styles.item1}>
              <AntDesign name="left" size={24}></AntDesign>
            </View>
          </TouchableOpacity>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: "#29b6f6",
  },
  block: {
    padding: 16,
    borderBottomWidth: 1,
    backgroundColor: "#29b6f6",
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
  item1: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
export default HeaderScreen;
