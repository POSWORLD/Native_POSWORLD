import { Link, useIsFocused, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import changeTime from "./changeTime";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderScreen from "../HeaderScreen";
import { delPhoto, selectPhoto, selectPhotoById } from "../../store/photos";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { IMG_PATH } from "../../http/CustomAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";
function PhotoDetailScreen() {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const pid = useSelector((state) => state.photos.pid);
  const photo = useSelector((state) => state.photos.photoDetail);
  const photoget = () => {
    dispatch(selectPhotoById(pid));
  };
  useEffect(() => {
    photoget();
  }, [isFocused]);

  const getId = async () => {
    return await AsyncStorage.getItem("myId");
  };

  const onSubmit = async () => {
    const myId = await getId();

    dispatch(delPhoto(pid, myId));
    navigation.goBack();
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.block}>
          <View style={[styles.head, styles.paddingBlock]}>
            <Text style={styles.displayName}>{photo.title}</Text>
          </View>
          <Image
            source={{ uri: `${IMG_PATH}${photo.img}` }}
            style={styles.image}
            resizeMethod="resize"
            resizeMode="cover"
          />
          <View style={styles.paddingBlock}>
            <Text style={styles.date}>{changeTime(photo.wdate)}</Text>
            <Text style={styles.description}>{photo.content}</Text>
          </View>
          <View style={styles.btnview}>
            <TouchableOpacity onPress={onSubmit} style={styles.btn}>
              <Text>삭제</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("PComment")}
          >
            <View style={styles.commentBtn}>
              <AntDesign name="message1" size={18}></AntDesign>
              <Text> 댓글</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 20,
  },
  block: {
    marginTop: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
  paddingBlock: {
    paddingHorizontal: 16,
    flex: 2,
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 16,
  },
  displayName: {
    marginTop: 4,
    lineHeight: 16,
    fontSize: 15,
    marginLeft: 8,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    flex: 2,
  },
  image: {
    backgroundColor: "#bdbdbd",
    width: "100%",
    aspectRatio: 1,
    marginBottom: 16,
  },
  commentBtn: {
    flexDirection: "row",
  },
  touchable: {
    marginLeft: 10,
  },
  btnview: {
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight: 21,
  },
  btn: {
    width: 60,
    height: 35,
    backgroundColor: "#D8D8D8",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PhotoDetailScreen;
