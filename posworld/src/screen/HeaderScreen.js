import { StyleSheet, Text, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
function HeaderScreen({ name }) {
   const { top } = useSafeAreaInsets();
   return (
      <>
         <View style={[styles.statusBarPlaceholder, { height: top }]} />
         <View style={styles.block}>
            <View style={styles.container}>
               <View style={styles.item1}>
                  <AntDesign name="left" size={24}></AntDesign>
               </View>
               <Text style={styles.nameText}>{name}</Text>
            </View>
         </View>
      </>
   );
}

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
   item1: {
      alignItems: 'flex-start',
      justifyContent: 'center',
   },
});
export default HeaderScreen;
