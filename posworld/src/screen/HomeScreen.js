
import { useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginCheck } from '../store/user';


import HomeBodyScreen from "./home/HomeBodyScreen";
import HomeCommentScreen from "./home/HomeCommentScreen";
import HomeHeaderScreen from "./home/HomeHeaderScreen";
import HomeMiniroomScreen from "./home/HomeMiniroomScreen";

function HomeScreen() {

    const dispatch = useDispatch();
    
    const isFocused = useIsFocused();
    const user = useSelector((state)=>state.user.me);
    useEffect(() => {
        
        
        dispatch(loginCheck(user));
    }, [isFocused]);
    return (
        <>
            <View style={styles.homeBg}>
                <View style={styles.header}>
                    <HomeHeaderScreen></HomeHeaderScreen>
                </View>
                <View style={styles.title}>
                    <Text>{`${user.name}님의 미니홈피`}</Text>
                </View>
                <View style={styles.body}>
                    <HomeBodyScreen></HomeBodyScreen>
                </View>
                <View style={styles.miniroom}>
                    <HomeMiniroomScreen></HomeMiniroomScreen>
                </View>
                <View style={styles.footer}>
                    <HomeCommentScreen></HomeCommentScreen>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
  homeBg: {
    backgroundColor: "#f5f5f5",
    flex: 1,
  },
  header: {
    flex: 1,
  },
  title: {
    flex: 0.3,
  },
  body: {
    flex: 2,
  },
  miniroom: {
    flex: 4,
  },
  footer: {
    flex: 2,
  },
});
export default HomeScreen;
