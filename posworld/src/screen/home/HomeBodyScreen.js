import { useLinkTo } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeBodyScreen() {
    const linkto = useLinkTo();
    return (
        <>
            <View style={styles.block}>
                <View style={{ flex: 4 }}>
                    <View style={styles.one}>
                        <View style={{ flex: 1 }}>
                            <Image source={require('./img/dog.jpg')} style={{ width: 100, height: 100 }}></Image>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text>{`     TODAY 0 | 5`}</Text>
                            <Text>{`\n     양현민`}</Text>
                            <Text>{`\n     양현민의 미니홈피`}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{` today is...                                                   일촌 17 즐겨찾기 0`}</Text>
                </View>
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
        flex: 1,
    },
    one: {
        flex: 1,
        flexDirection: 'row',
    },
    two: {
        flex: 3,
    },
    three: {},

    text: {
        color: '#29b6f6',
    },
});
export default HomeBodyScreen;
