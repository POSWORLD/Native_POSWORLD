import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteboard } from '../store/boards';
import changeTime from './photo/changeTime';
const BoardListScreen = ({ boarditem, boardlist }) => {
   const myId = useSelector(state => state.user.me.id);
   const dispatch = useDispatch();
   const onRemove = () => {
      dispatch(deleteboard(boarditem.num, boardlist));
   };

   return (
      <>
         <View style={styles.mainCardView}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <View style={styles.subCardView}>
                  <Image
                     source={require(`./img/minimi.png`)}
                     resizeMode="contain"
                     style={{
                        borderRadius: 25,
                        height: 50,
                        width: 50,
                     }}
                  />
               </View>
               <View style={{ marginLeft: 12 }}>
                  <Text
                     style={{
                        fontSize: 14,
                        color: 'black',
                        fontWeight: 'bold',
                        textTransform: 'capitalize',
                     }}>
                     {boarditem.friendname}
                     <Text style={{ fontSize: 10 }}> ({changeTime(boarditem.wdate)})</Text>
                  </Text>
                  <View
                     style={{
                        marginTop: 4,
                        borderWidth: 0,
                        width: '100%',
                     }}>
                     <Text
                        style={{
                           color: 'gray',
                           fontSize: 12,
                        }}>
                        {boarditem.content}
                     </Text>
                  </View>
               </View>
            </View>
            {boarditem.friendid === myId ? (
               <TouchableOpacity onPress={() => onRemove(boarditem.num)}>
                  <View
                     style={{
                        height: 25,
                        backgroundColor: '#29b6f6',
                        borderWidth: 0,
                        width: 25,
                        marginLeft: -26,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                     }}>
                     <Text style={{ color: `white` }}>X</Text>
                  </View>
               </TouchableOpacity>
            ) : (
               <></>
            )}
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
   subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
      backgroundColor: 'pink',
      borderColor: 'blue',
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
