import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HeaderScreen from '../HeaderScreen';
import { insertPhoto, selectPhoto } from '../../store/photos';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fileAxios } from '../../http/CustomAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PhotoAddScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState({
        title: '',
        img: '',
        content: '',
        file: '',
    });

    const [previewImg, setPreviewImg] = useState('');
    const getId = async () => {
        return await AsyncStorage.getItem('myId');
    };

    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        let filePath = '';
        const splitUri = pickerResult.uri.split('/');
        const img = `${splitUri[splitUri.length - 1]}`;
        const splitUriType = pickerResult.uri.split('.');
        const type = `image/${splitUriType[splitUriType.length - 1]}`;
        const file = {
            uri: pickerResult.uri.replace('file:/data', 'file:///data'),
            name: img,
            type,
        };
        let uploadFile = new FormData();
        uploadFile.append('file', file);
        if (file) {
            filePath = await fileAxios('/upload', 'post', uploadFile);
        }

        setPhoto({
            ...photo,
            img: filePath ? filePath : img,
            file,
        });

        setPreviewImg(pickerResult.uri);
    };

    const onSubmit = async () => {
        const myId = await getId();

        dispatch(insertPhoto(photo, myId));
        navigation.navigate('Photo');
        dispatch(selectPhoto());
    };

    return (
        <>
            <View style={{ flex: 1.2 }}>
                <HeaderScreen name={'사진 등록'}></HeaderScreen>
                <View style={styles.btnview}>
                    <TouchableOpacity onPress={openImagePickerAsync} style={styles.btn}>
                        <Text>사진 선택</Text>
                    </TouchableOpacity>
                </View>
                {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: 200 }}></Image> : null}
            </View>
            <View style={styles.text}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text style={styles.title}>제목</Text>
                    <TextInput
                        multiline={true}
                        onChangeText={(value) => setPhoto({ ...photo, title: value })}
                        value={photo.title}
                        placeholder="제목을 입력하세요."
                        style={styles.tinput}
                    ></TextInput>
                    <Text style={styles.content}>내용</Text>
                    <TextInput
                        multiline={true}
                        onChangeText={(value) => setPhoto({ ...photo, content: value })}
                        value={photo.content}
                        placeholder="내용을 입력하세요."
                        style={styles.cinput}
                    ></TextInput>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.submitbtnview}>
                <TouchableOpacity onPress={onSubmit} style={styles.submitbtn}>
                    <Text>등록</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        flex: 1.5,
        marginTop: 30,
        marginLeft: 20,
    },
    title: {
        marginTop: 30,
        marginLeft: 20,
    },
    content: {
        marginTop: 30,
        marginLeft: 20,
    },
    tinput: {
        padding: 10,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        backgroundColor: '#E6E6E6',
    },
    cinput: {
        padding: 10,
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        borderColor: 'gray',
        borderWidth: 1,
        height: 80,
        backgroundColor: '#E6E6E6',
    },
    btnview: {
        marginTop: 25,
        marginBottom: 20,
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitbtnview: {
        marginBottom: 30,
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 70,
        height: 45,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    submitbtn: {
        width: 75,
        height: 35,
        backgroundColor: '#D8D8D8',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PhotoAddScreen;
