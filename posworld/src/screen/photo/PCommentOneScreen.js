import { render } from "react-dom";
import { Image, Text, View } from "react-native";

function PCommentOneScreen() {
  render(
    <View>
      <View>
        <Image
          source={{
            uri: "https://user-images.githubusercontent.com/46432606/172375796-6622bd79-2a06-4ea3-a170-f233e5bfde70.jpeg",
          }}
          style={{ width: 30, height: 30 }}
        ></Image>
      </View>
      <View>
        <Text> 포수빈</Text>
        <Text> 맛있어?</Text>
        <Text>2022.07.21 12-32-42</Text>
      </View>
      <View></View>
    </View>
  );
}

export default PCommentOneScreen;
