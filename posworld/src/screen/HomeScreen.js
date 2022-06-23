import { StyleSheet, Text, View } from 'react-native';
import BodyScreen from './BodyScreen';
import CommentScreen from './CommentScreen';
import HeaderScreen from './HeaderScreen';
import MiniroomScreen from './MiniroomScreen';

function HomeScreen() {
    return (
        <>
            <View style={styles.homeBg}>
                <View style={styles.header}>
                    <HeaderScreen></HeaderScreen>
                </View>
                <View style={styles.title}>
                    <Text>양현민님의 미니홈피</Text>
                </View>
                <View style={styles.body}>
                    <BodyScreen></BodyScreen>
                </View>
                <View style={styles.miniroom}>
                    <MiniroomScreen></MiniroomScreen>
                </View>
                <View style={styles.footer}>
                    <CommentScreen></CommentScreen>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#f5f5f5',
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
