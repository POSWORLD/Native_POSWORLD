import { ActivityIndicator, Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HeaderScreen from './HeaderScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteboard, selectboard } from '../store/boards';
import { useIsFocused } from '@react-navigation/native';
import BoardListScreen from './BoardListScreen';

const BoardScreen = ({ navigation }) => {
   const [boards, setBoards] = useState({
      userId: '',
      content: '',
      homeId: 0,
   }); /* useSelector((state)=>state.boards.board) */
   const dispatch = useDispatch();

   const getHomeId = async () => {
      return await AsyncStorage.getItem('homeId');
   };

   const getId = async () => {
      return await AsyncStorage.getItem('myId');
   };

   const isFocused = useIsFocused();

   const getBoard = async () => {
      const homeId = await getHomeId();
      console.log(homeId);
      if (homeId == undefined) {
         const myId = await getId();
         dispatch(selectboard(myId));
      } else {
         dispatch(selectboard(homeId));
      }
   };
   const boardlist = useSelector(state => state.boards);
   //console.log('bod', boardlist);
   useEffect(() => {
      getBoard();
   }, [isFocused]);

   return boardlist.loading ? (
      <View style={{ flex: 1 }}>
         <HeaderScreen style={{ flex: 1 }} name="방명록"></HeaderScreen>
         <ActivityIndicator />
      </View>
   ) : (
      <View>
         <HeaderScreen style={{ flex: 1 }} name="방명록"></HeaderScreen>
         <View style={styles.container}>
            <View style={{ flex: 2 }}>
               <FlatList
                  data={Object.keys(boardlist.board)} //
                  renderItem={key => <BoardListScreen boarditem={boardlist.board[key.index]} boardlist={boardlist} />}
                  keyExtractor={key => key}
               />
            </View>
            <View style={{ flex: 1 }}>
               <AntDesign
                  position="right"
                  style={styles.buttonStyle}
                  name="form"
                  size={50}
                  color="black"
                  onPress={() => navigation.navigate('BoardAdd')}
               />
               {/* <AntDesign name="form" size={50} color="black" /> */}
            </View>
         </View>
      </View>
   );
};

export default BoardScreen;

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
      margin: 25,
      padding: 10,
      right: 0,
      flex: 1,
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
