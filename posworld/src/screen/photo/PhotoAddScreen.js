import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, Keyboard, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HeaderScreen from '../HeaderScreen';
import { insertPhoto } from '../../store/photos';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fileAxios } from '../../http/CustomAxios';

const PhotoAddScreen = (/* { navigation } */) => {
    /* state = { img: null }; */
    const dispatch = useDispatch();
    const [photo, setPhoto] = useState({
        title: '',
        img: '',
        content: '',
        file: '',
    });
    /*  const [previewImg, setPreviewImg] = useState(''); */
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

        // let filePath = '';
        const splitUri = pickerResult.uri.split('/');
        const img = `${splitUri[splitUri.length - 1]}`;
        const splitUriType = pickerResult.uri.split('.');
        const type = `image/${splitUriType[splitUriType.length - 1]}`;
        const file = { uri: pickerResult.uri.replace('file:/data', 'file:///data'), name: img, type };
        // filePath = await fileAxios('/upload', 'post', file);

        setPhoto({
            ...photo,
            img,
            file,
        });
        /* setPreviewImg(pickerResult.uri); */
    };

    const onSubmit = () => {
        dispatch(insertPhoto(photo));
        //navigation.goBack();
    };

    return (
        <>
            <View style={{ flex: 1 }}>
                <HeaderScreen name={'사진 등록'}></HeaderScreen>
                <TouchableOpacity onPress={openImagePickerAsync}>
                    <Text style={styles.text}>사진 선택</Text>
                </TouchableOpacity>
                <Image source={{ uri: photo.file.uri }} style={{ height: 200, width: 200, marginLeft: 10 }}></Image>
                {/* {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: 200 }}></Image> : null} */}
                {/* {image == null ? null : <Image source={{ uri: 'C:UsershjuheOneDrivePicturesimage1.jpg' }} />} */}
            </View>
            <View style={{ flex: 1.3 }}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <Text style={styles.text}>제목</Text>
                    <TextInput
                        multiline={true}
                        onChangeText={(value) => setPhoto({ ...photo, title: value })}
                        placeholder="제목을 입력하세요."
                        style={styles.tinput}
                    ></TextInput>
                    <Text style={styles.text}>내용</Text>
                    <TextInput
                        multiline={true}
                        onChangeText={(value) => setPhoto({ ...photo, content: value })}
                        value={photo.content}
                        placeholder="내용을 입력하세요."
                        style={styles.cinput}
                    ></TextInput>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.btnview}>
                <TouchableOpacity onPress={onSubmit} style={styles.btn}>
                    <Text>등록</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
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
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 75,
        height: 55,
        backgroundColor: '#A9D0F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PhotoAddScreen;
