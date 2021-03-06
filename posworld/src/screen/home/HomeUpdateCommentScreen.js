import { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateContent } from '../../store/homes';
const HomeUpdateComment = ({ navigation }) => {
    const dispatch = useDispatch();
    const id = useSelector((state)=>state.user.myId );
    const [home, setHome] = useState({
        content: '',
    });
    const onSubmit = () => {
        dispatch(updateContent(home,id));
        navigation.goBack();
    };
    return (
        <View>
            <TextInput
                onChangeText={(value) => setHome({ ...home, content: value })}
                value={home.content}
                placeholder="한 줄 감성을 입력하세요"
            ></TextInput>
            <Button onPress={onSubmit} title="수정"></Button>
        </View>
    );
};

export default HomeUpdateComment;
