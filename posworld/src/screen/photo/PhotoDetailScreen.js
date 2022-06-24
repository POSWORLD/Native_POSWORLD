import { Link } from "@react-navigation/native";
import { Image, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderScreen from "../HeaderScreen";

function PhotoDetailScreen({ img }) {
  console.log("img", img);
  return (
    <>
      <HeaderScreen />
      <ScrollView contentContainerStyle={StyleSheet.contentContainer}>
        <View>
          <Text>title</Text>
          <Image
            source={{
              uri: "https://user-images.githubusercontent.com/46432606/172374912-bf603007-2b29-420a-a031-1f55d350b4cf.jpg",
            }}
            style={{
              width: "100%",
              aspectRatio: 1,
              marginBottom: 10,
              marginTop: 10,
            }}
            resizeMode={"contain"}
          ></Image>
          <Text>content</Text>
          <Text>wdate</Text>
          <Link to={"/PComment"}>댓글</Link>
        </View>
      </ScrollView>
    </>
  );
}

export default PhotoDetailScreen;
