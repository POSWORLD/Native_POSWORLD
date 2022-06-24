import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import homes, { select } from '../../store/homes';

function HomeCommentScreen({ name }) {
    const dispatch = useDispatch();

    const home = useSelector((state) => state.homes.home);

    useEffect(() => {
        console.log('시작');
        dispatch(select());
    }, []);

    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>한 줄 감성</Text>
                <Text>{home.content}</Text>
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
export default HomeCommentScreen;
