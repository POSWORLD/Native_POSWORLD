import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PhotoCard() {
  return (
    <View style={styles.block}>
      <View style={[styles.head, styles.paddingBlock]}>
        <Text style={styles.displayName}>제목</Text>
      </View>
      <Image
        source={require("../home/img/dog.jpg")}
        style={styles.image}
        resizeMethod="resize"
        resizeMode="cover"
      />
      <View style={styles.paddingBlock}>
        <Text style={styles.description}>설명</Text>
        <Text style={styles.date}>날짜</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  displayName: {
    lineHeight: 16,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
});

export default PhotoCard;
