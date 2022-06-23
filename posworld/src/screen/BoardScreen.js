import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import HeaderScreen from './HeaderScreen';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import BoardAddScreen from './BoardAddScreen';

const BoardScreen = ({ board }) => {
   return (
      <View>
         {/*  <FlatList data={board} renderItem={item => renderItem(item)}></FlatList>; */}
         <HeaderScreen name="방명록"></HeaderScreen>
         <View style={styles.container}>
            <View style={styles.boardlist}></View>
            <View style={styles.iconbutton}>
               <AntDesign name="form" size={50} color="black" />
            </View>
         </View>
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

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
   },

   iconbutton: {
      padding: 30,
      height: '73%',
      alignItems: 'flex-end',
      flexDirection: 'column-reverse',
   },
});
