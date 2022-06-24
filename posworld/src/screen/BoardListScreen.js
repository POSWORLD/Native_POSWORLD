
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteboard } from '../store/boards';
const BoardListScreen = ({ boarditem, boardlist }) => {
   const myId = 1;
   const dispatch = useDispatch();
   const onRemove = () => {
      dispatch(deleteboard(boarditem.num, boardlist));
   };

   return (
      <>
         <View style={styles.mainCardView}>
            {boarditem.friendid === myId ? (
               <TouchableOpacity onPress={() => onRemove(boarditem.num)}>
                  <Text>삭제</Text>
               </TouchableOpacity>
            ) : (
               <></>
            )}
            <View>
               <Text>내용:{boarditem.content}</Text>
            </View>
            <View>
               <Text>닉네임:{boarditem.friendname} </Text>
            </View>
            <View style={styles.subCardView}>
               <Text>img:{boarditem.friendimg} </Text>
            </View>
            <View>
               <Text>작성자:{boarditem.wdate}</Text>
            </View>
            <View>
               <Text>아이디: {boarditem.friendid}</Text>
            </View>
         </View>
      </>
   );
};
export default BoardListScreen;
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
