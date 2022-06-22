import { Image, StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';

function BodyScreen({ name }) {
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View style={styles.block}>
                <Image source={require('./img/1.png')} style={{ width: 100, height: 100 }}></Image>
                <Text
                    style={styles.text}
                >{`today is...                                                              일촌 17 즐겨찾기 0`}</Text>
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
    img: {
        alignContent: 'center',
    },
    text: {
        color: '#29b6f6',
    },
});
export default BodyScreen;
