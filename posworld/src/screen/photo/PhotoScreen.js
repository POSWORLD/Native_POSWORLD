import { Image, StyleSheet, Text, View } from "react-native";
import AddButton from "../button/AddButton";
import HeaderScreen from "../HeaderScreen";
function PhotoScreen() {
  return (
    <View>
      <HeaderScreen name="사진첩" />
      <View>
        <Image
          source={{
            uri: "https://post-phinf.pstatic.net/MjAxNzA4MDVfMTQz/MDAxNTAxOTE2MzMzOTI0.X0P-issPTorlZUgj6b7R6hV00t-x2eyiHWJSeCd3ABgg.Od4aW4_e5facHW4WjXaMCeOaYBE6FEdC76UQotMwwPYg.JPEG/mug_obj_201708051558543048.jpg?type=w1080",
          }}
          style={{ width: 128, height: 128 }}
          resizeMode="cover"
        ></Image>
        <Image
          source={{
            uri: "https://post-phinf.pstatic.net/MjAxNzA4MDVfMTQz/MDAxNTAxOTE2MzMzOTI0.X0P-issPTorlZUgj6b7R6hV00t-x2eyiHWJSeCd3ABgg.Od4aW4_e5facHW4WjXaMCeOaYBE6FEdC76UQotMwwPYg.JPEG/mug_obj_201708051558543048.jpg?type=w1080",
          }}
          style={{ width: 128, height: 128 }}
          resizeMode="cover"
        ></Image>
      </View>
      <View>
        <AddButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
export default PhotoScreen;
