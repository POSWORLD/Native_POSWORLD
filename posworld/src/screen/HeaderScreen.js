import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native-safe-area-context';
function HeaderScreen({ name }) {
    const { top } = useSafeAreaInsets();
    return (
        <>
            <View style={[styles.statusBarPlaceholder, { height: top }]} />
            <View style={styles.block}>
                <View style={styles.container}>
                    <View style={styles.container}>
                        <AntDesign name="left" size={30}></AntDesign>
                    </View>
                    <Text style={styles.nameText}></Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    statusBarPlaceholder: {
        backgroundColor: '#29b6f6',
    },
    block: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#29b6f6',
        backgroundColor: '#29b6f6',
    },
    nameText: {
        fontSize: 24,
        textAlign: 'center',
        color: 'black',
        flex: 1,
    },
    container: {
        flexDirection: 'row',
    },
    item1: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});
export default HeaderScreen;
