import { useState } from 'react';
import { View, Button, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { updatePhoto } from '../../store/homes';
import { fileAxios } from '../../http/CustomAxios';
const HomeUpdatePhoto = ({ navigation }) => {
    const dispatch = useDispatch();
    const [home, setHome] = useState({
        photo: '',
        file: '',
    });
    const [previewImg, setPreviewImg] = useState('');
    let openImagePickerASync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({ base64: true });
        let filePath = '';
        const splitUri = pickerResult.uri.split('/');
        const photo = `${splitUri[splitUri.length - 1]}`;
        const splitUriType = pickerResult.uri.split('.');
        const type = `image/${splitUriType[splitUriType.length - 1]}`;
        const file = { uri: pickerResult.uri.replace('file:/data', 'file:///data'), name: photo, type };
        let uploadFile = new FormData();
        uploadFile.append('file', file);
        if (file) {
            filePath = await fileAxios('/upload', 'post', uploadFile);
        }

        setHome({
            ...home,
            photo: filePath ? filePath : photo,
            file,
        });
        setPreviewImg(pickerResult.uri);
    };
    const onSubmit = () => {
        dispatch(updatePhoto(home));
        navigation.goBack();
    };
    return (
        <View>
            <TouchableOpacity onPress={openImagePickerASync}>
                <Text>사진을 수정하세요</Text>
            </TouchableOpacity>
            {previewImg ? <Image source={{ uri: previewImg }} style={{ height: 200, width: 200 }}></Image> : null}
            <Button onPress={onSubmit} title="수정"></Button>
        </View>
    );
};

export default HomeUpdatePhoto;
