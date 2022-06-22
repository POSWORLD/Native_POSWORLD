import { StyleSheet, View } from 'react-native';

function HomeScreen() {
    return <View style={styles.headerStyle}></View>;
}
const styles = StyleSheet.create({
    headerStyle: {
        flex: 1,
        backgroundColor: '#29b6f6',
    },
});
export default HomeScreen;
