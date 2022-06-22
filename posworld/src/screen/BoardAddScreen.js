import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const BoardAddScreen = () => {
   const { top } = useSafeAreaInsets();
   const [content, setContent] = useState('');
   console.log(content);
   return (
      <View>
         <View style={[styles.statusBarPlaceholder, { height: top }]} />
         <View style={styles.block}>
            <View style={styles.container}>
               <Text style={styles.item1}>취소</Text>

               <Text style={styles.nameText}>방명록 남기기</Text>

               <Text style={styles.item2}>작성</Text>
            </View>
         </View>
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
   statusBarPlaceholder: {
      backgroundColor: '#26a69a',
   },
   block: {
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#B0ACAC',
   },
   nameText: {
      fontSize: 24,
      textAlign: 'center',
      color: 'black',
      flex: 1,
   },
   container: {
      flexDirection: 'row',
   },
   text1: {
      fontSize: 24,
      textAlign: 'left',
      color: 'black',
      flex: 1,
   },
   text2: {
      fontSize: 24,
      textAlign: 'right',
      color: 'black',
      flex: 1,
   },
   input: {
      fontSize: 20,
      paddingVertical: 30,
   },
});
