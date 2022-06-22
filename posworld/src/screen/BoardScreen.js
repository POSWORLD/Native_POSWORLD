import { FlatList, Image, Text, View } from 'react-native';
import HeaderScreen from './HeaderScreen';

const BoardScreen = ({ board }) => {
   return (
      <View>
         {/*  <FlatList data={board} renderItem={item => renderItem(item)}></FlatList>; */}
         <HeaderScreen name="방명록"></HeaderScreen>
         <Text>여기는 방명록입니다.</Text>
         <Text>여기는 방명록입니다.</Text>
         <Text>여기는 방명록입니다.</Text>
         <Text>여기는 방명록입니다.</Text>
         <Text>여기는 방명록입니다.</Text>
         <Text>여기는 방명록입니다.</Text>
      </View>
   );
};
export default BoardScreen;

/* const renderItem = ({ item }) => {
   return (
      <View>
         <View>
            <Text>user id:</Text>
         </View>
         <View>
            <Text>content: </Text>
         </View>
         <View>
            <Text>img: </Text>
         </View>
         <View>
            <Text>img:</Text>
         </View>
      </View>
   );
}; */
