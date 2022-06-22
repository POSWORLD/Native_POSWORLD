import { StyleSheet, Text, View } from 'react-native';
import BodyScreen from './BodyScreen';
import CommentScreen from './CommentScreen';
import HeaderScreen from './HeaderScreen';
import MiniroomScreen from './MiniroomScreen';

function HomeScreen() {
    return (
        <>
            <View style={styles.homeBg}>
                <View>
                    <HeaderScreen></HeaderScreen>
                </View>
                <View>
                    <Text>양현민의 미니홈피</Text>
                </View>
                <View>
                    <BodyScreen></BodyScreen>
                </View>
                <View>
                    <MiniroomScreen></MiniroomScreen>
                </View>
                <View>
                    <CommentScreen></CommentScreen>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    homeBg: {
        backgroundColor: '#f5f5f5',
    },
});
export default HomeScreen;
