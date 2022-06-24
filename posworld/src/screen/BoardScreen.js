import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import HeaderScreen from './HeaderScreen';

import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectboard } from '../store/boards';
import { useIsFocused } from '@react-navigation/native';

const BoardScreen = ({ navigation }) => {
   const [boards, setBoards] = useState({
      userId: '',
      content: '',
      homeId: 0,
   }); /* useSelector((state)=>state.boards.board) */
   const dispatch = useDispatch();
   const isFocused = useIsFocused();
   const getBoard = () => {
      dispatch(selectboard(boards.homeId));
   };
   const boardlist = useSelector(state => state.boards);

   useEffect(() => {
      getBoard();
   }, [isFocused]);
   return boardlist.loading ? (
      <View>
         <HeaderScreen name="방명록"></HeaderScreen>
         <ActivityIndicator />
      </View>
   ) : (
      <View>
         <HeaderScreen name="방명록"></HeaderScreen>
         <View style={styles.container}>
            <View style={styles.boardlist}>
               <FlatList
                  data={Object.keys(boardlist.board)} //
                  renderItem={key => renderItem(boardlist.board[key.index])}
                  keyExtractor={key => key}
               />
            </View>
            <View style={styles.buttonStyle}>
               <AntDesign name="form" size={50} color="black" onPress={() => navigation.navigate('BoardAdd')} />
               {/* <AntDesign name="form" size={50} color="black" /> */}
            </View>
         </View>
      </View>
   );
};
export default BoardScreen;

const renderItem = ({ content, wdate, friendimg, friendname, friendid }) => {
   return (
      <>
         <View style={styles.mainCardView}>
            <View>
               <Text>아이디: {friendid}</Text>
            </View>
            <View>
               <Text>닉네임:{friendname} </Text>
            </View>
            <View style={styles.subCardView}>
               <Text>img:{friendimg} </Text>
            </View>
            <View>
               <Text>작성자:{wdate}</Text>
            </View>
            <View>
               <Text>내용:{content}</Text>
            </View>
         </View>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      resizeMode: 'contain',
   },
   /* boardlist: {
      width: '100%',
      height: 900,
   }, */
   iconbutton: {
      position: 'absolute',
      margin: 16,
      right: 0,
      //flex: 1,
      bottom: 0,
   },
   buttonStyle: {
      position: 'absolute',
      padding: 10,
      borderRadius: 30,
      right: 25,
   },
   containers: {
      flex: 1,
      backgroundColor: 'white',
   },
   mainCardView: {
      height: 90,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
      //shadowColor: Colors.shadow,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 16,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,
      marginLeft: 16,
      marginRight: 16,
   },
   /*  subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'pink',
      borderColor: 'blue',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
   }, */
});
