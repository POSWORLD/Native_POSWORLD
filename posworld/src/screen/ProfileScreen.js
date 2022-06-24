import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import HomeHeaderScreen from './home/HomeHeaderScreen';

function ProfileScreen({}) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.me);
    console.log('ProfileScreen');
    console.log(user);

    const [form, setForm] = useState({
        userid: 1,
        img: 'img',
        file: '',
        name: '',
    });
    const [previewImg, setPreviewImg] = useState('');
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            base64: true,
        });

        const splitUri = pickerResult.uri.split('/');
        const img = `${splitUri[splitUri.length - 1]}`;
        const splitUriType = pickerResult.uri.split('.');
        const type = `image/${splitUriType[splitUriType.length - 1]}`;
        const file = {
            uri: pickerResult.uri.replace('file:/data', 'file:///data'),
            name: img,
            type,
        };
        setForm({
            ...form,
            img,
            file,
        });
        setPreviewImg(pickerResult.uri);
    };

    const onSubmit = async () => {
        await dispatch(updateUser(form));
    };

    const withdrawal = async () => {
        const deleteResult = await dispatch(deleteUser(id));
        if (deleteResult.payload == 1) {
            alert('회원탈퇴에 성공했습니다.');
            await dispatch(logout());
            modalClose();
            neviate('/login');
        } else {
            alert('회원탈퇴에 실패했습니다.');
        }
    };
    // const onSubmit = () => {
    //   dispatch(insertPosts(post));
    //   // navigation.goBack();
    // };

    return (
        <View style={styles.container}>
            <HomeHeaderScreen></HomeHeaderScreen>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        {previewImg ? (
                            <Image source={{ uri: previewImg }} style={styles.avatar}></Image>
                        ) : (
                            <Image style={styles.avatar} source={require('./img/minimi.png')} />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.body}>
                <View style={styles.item}>
                    <TextInput placeholder="닉네임" onChangeText={(value) => setPost({ ...post, name: value })}></TextInput>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.profileBtn} onPress={onSubmit}>
                        <Text style={styles.profileText}>프로필 편집</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.profileBtn}>
                        <Text style={styles.profileText}>로그아웃</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.profileBtn}>
                        <Text style={styles.profileText}>회원탈퇴</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
    },
    body: {
        backgroundColor: 'white',
        height: 500,
        alignItems: 'center',
    },
    item: {
        margin: 2,
        flexDirection: 'row',
    },
    profileBtn: {
        borderRadius: 15,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        backgroundColor: '#29b6f6',
        flex: 0.72,
    },
    profileText: {
        color: 'white',
    },
});
export default ProfileScreen;
