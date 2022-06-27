import { useIsFocused, useLinkTo } from '@react-navigation/native';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_PATH } from '../../http/CustomAxios';
import { loginCheck } from '../../store/user';

function HomeBodyScreen() {
    const dispatch = useDispatch();
    const linkto = useLinkTo();
    const isFocused = useIsFocused();
    const user = useSelector((state) => state.user.me);
    useEffect(() => {
        dispatch(loginCheck(user));
    }, [isFocused]);
    return (
        <>
            <View style={styles.block}>
                <View style={{ flex: 4 }}>
                    <View style={styles.one}>
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: `${IMG_PATH}${user.prophoto}` }} style={{ width: 100, height: 100 }}></Image>
                        </View>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.text2}>{`     TODAY 0 | 5`}</Text>
                            <Text style={styles.text2}>{`\n     ${user.name}`}</Text>
                            <Text style={styles.text2}>{`\n     ${user.name}의 미니홈피`}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.text}>{`today is...                      일촌 17 즐겨찾기 0`}</Text>
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
    text2: {
        fontFamily: 'dung',
        fontSize: 16,
    },
    text3: {
        fontFamily: 'dung',
        fontSize: 20,
    },
    text: {
        color: '#29b6f6',
        fontFamily: 'dung',
        fontSize: 16,
    },
});
export default HomeBodyScreen;
