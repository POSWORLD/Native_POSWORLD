import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { IMG_PATH } from "../../http/CustomAxios";

function PhotoGridItem({ img, id }) {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const size = (dimensions.width - 3) / 3;
  return (
    <Pressable
      onPress={() => navigation.navigate("PhotoDetail")}
      style={({ pressed }) => [
        { opacity: pressed ? 0.6 : 1, width: size, height: size },
        styles.block,
      ]}
    >
      <Image
        style={styles.image}
        source={{ uri: `${IMG_PATH}${img}` }}
        resizeMethod="resize"
        resizeMode="cover"
      ></Image>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  block: { margin: 1 },
  image: {
    backgroundColor: "#bdbdbd",
    width: "100%",
    height: "100%",
  },
});

export default PhotoGridItem;
