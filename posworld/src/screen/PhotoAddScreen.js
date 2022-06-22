// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import HeaderScreen from './HeaderScreen';
// import { insertPhoto } from "../store/photos";

const PhotoAddScreen = (/* { navigation } */) => {
    /*const dispatch = useDispatch();
    const [photo, setPhoto] = useState({
        title: '',
        img: '',
        content: '',
        file: '',
    }); 
    const [previewImg, setPreviewImg] = useState('');
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required');
            return;
        }

        let pickerResult = await ImagePicker.launchCameraAsync({ base64: true });

        console.log('pickerResult: ', pickerResult);
        const splitUri = pickerResult.uri.split('/');
        const img = `${splitUri[splitUri.length - 1]}`;
        const splitUriType = pickerResult.uri.split('.');
        const type = splitUriType[splitUriType.length - 1];
        const file = { uri: pickerResult.uri, name: img, type };

        setPhoto({
            ...photo,
            title,
            img,
            content,
            file,
        });
        setPreviewImg(pickerResult.uri);
    }; */

    const onSubmit = () => {
        dispatch(insertPhoto(photo));
        //navigation.goBack();
    };

    return (
        <View>
            <HeaderScreen name={'사진 등록'}></HeaderScreen>
            <TouchableOpacity>
                <Text style={styles.text}>사진 선택</Text>
            </TouchableOpacity>
            {/* {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: 200 }}></Image> : null} */}
            <Text style={styles.text}>제목</Text>
            <TextInput
                multiline={true}
                /* onChangeText={(value) => setPhoto({ ...photo, title: value })}
                value={photo.title} */
                placeholder="제목을 입력하세요."
                style={styles.tinput}
            ></TextInput>
            <Text style={styles.text}>내용</Text>
            <TextInput
                multiline={true}
                /* onChangeText={(value) => setPhoto({ ...photo, content: value })}
                value={photo.content} */
                placeholder="내용을 입력하세요."
                style={styles.cinput}
            ></TextInput>
            <Button /* onPress={onSubmit} */ title="등록"></Button>
        </View>
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
});

export default PhotoAddScreen;
