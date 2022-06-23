import { Image, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

function HomeMiniroomScreen({ name }) {
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>MINI ROOM</Text>
                <Image source={require('./img/miniroom.gif')} style={{ width: 390, height: 250 }}></Image>
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
export default HomeMiniroomScreen;
