import { Image, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IMG_PATH } from '../../http/CustomAxios';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/homes';
import { useEffect } from 'react';
function HomeMiniroomScreen() {
    const dispatch = useDispatch();
    const home = useSelector((state) => state.homes.home);
    useEffect(() => {
        dispatch(select());
    }, []);
    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>MINI ROOM</Text>
                <Image source={{ uri: `${IMG_PATH}${home.photo}` }} style={{ width: 390, height: 250 }}></Image>
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