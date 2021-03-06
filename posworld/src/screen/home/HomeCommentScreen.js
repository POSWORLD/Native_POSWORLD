import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useLinkTo } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/homes';

function HomeCommentScreen() {
    const dispatch = useDispatch();
    const linkto = useLinkTo();
    const isFocused = useIsFocused();
    const home = useSelector((state) => state.homes.home);

    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>{`한 줄 감성\n`}</Text>
                <TouchableOpacity onPress={() => linkto('/HomeUpdateComment')}>
                    <Text style={styles.text2}>{home.content}</Text>
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
    text2: {
        fontFamily: 'dung',
        fontSize: 20,
    },
    text: {
        color: '#29b6f6',
        fontFamily: 'dung',
    },
});
export default HomeCommentScreen;
