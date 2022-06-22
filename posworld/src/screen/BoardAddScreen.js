import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
const BoardAddScreen = () => {
   const [content, setContent] = useState('');
   console.log(content);
   return (
      <View>
         <HeaderScreen name="방명록 남기기"></HeaderScreen>
         <TextInput
            placeholder="방명록을 작성해주세요"
            style={styles.input}
            value={content}
            onChangeText={setContent}></TextInput>
      </View>
   );
};
export default BoardAddScreen;

const styles = StyleSheet.create({
   input: {
      fontSize: 16,
      paddingVertical: 8,
   },
});
