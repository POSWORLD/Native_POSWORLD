import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

function CommentScreen({ name }) {
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>한 줄 감성</Text>
                <Text>css 어렵다</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    block: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    },
    text: {
        color: '#29b6f6',
    },
});
export default CommentScreen;
