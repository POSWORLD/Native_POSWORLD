import { useIsFocused, useLinkTo } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/homes';

function HomeCommentScreen() {
    const dispatch = useDispatch();
    const linkto = useLinkTo();
    const home = useSelector((state) => state.homes.home);
    const isFocused = useIsFocused();
    useEffect(() => {
        console.log('시작');
        dispatch(select());
    }, [isFocused]);

    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>한 줄 감성</Text>
                <TouchableOpacity onPress={() => linkto('/HomeUpdateComment')}>
                    <Text>{home.content}</Text>
                </TouchableOpacity>
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
