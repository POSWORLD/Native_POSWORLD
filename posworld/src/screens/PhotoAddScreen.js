/* import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'; */
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { insertPhoto } from "../store/photos";

const PhotoAddScreen = (/* { navigation } */) => {
    /* const dispatch = useDispatch();
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
    };

    const onSubmit = () => {
        // dispatch(insertPhoto(photo));
        navigation.goBack();
    }; */

    return (
        <View>
            <TouchableOpacity>
                <Text>사진 선택</Text>
            </TouchableOpacity>
            {/* {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: 200 }}></Image> : null} */}
            <Text>제목</Text>
            <TextInput
                /* onChangeText={(value) => setPhoto({ ...photo, title: value })} 
                value={photo.title}*/
                placeholder="제목을 입력하세요."
            ></TextInput>
            <Text>내용</Text>
            <TextInput
                /* onChangeText={(value) => setPhoto({ ...photo, content: value })} 
                value={photo.content}*/
                placeholder="내용을 입력하세요."
            ></TextInput>
            <Button /* onPress={onSubmit} */ title="submit"></Button>
        </View>
    );
};

export default PhotoAddScreen;
