import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginCheck } from '../../store/user';
import BoardScreen from '../BoardScreen';
import HomeScreen from '../HomeScreen';
import BottomNavigation from './BottomNavigation';
import LoginNavigate from './LoginNavigete';
import BoardAddScreen from '../BoardAddScreen';
import PCommentScreen from '../pComment/PCommentScreen';
import HomeUpdateComment from '../home/HomeUpdateCommentScreen';
import HomeUpdatePhoto from '../home/HomeUpdatePhotoScreen';
import PhotoDetailScreen from '../photo/PhotoDetailScreen';
function IndexNavigate() {
   const isLogin = useSelector(state => state.user.isLogin);
   const dispatch = useDispatch();
   const loginCheckFunc = async () => {
      const token = await AsyncStorage.getItem('token');
      dispatch(loginCheck(token));
   };
   useEffect(() => {
      loginCheckFunc();
      console.log('isLogin', isLogin);
   }, [isLogin]);

   const Stack = createStackNavigator();
   return isLogin ? (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="home" component={BottomNavigation} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="PComment" component={PCommentScreen}></Stack.Screen>
            <Stack.Screen name="BoardAdd" component={BoardAddScreen}></Stack.Screen>
            <Stack.Screen name="Board" component={BoardScreen}></Stack.Screen>
            <Stack.Screen name="HomeUpdateComment" component={HomeUpdateComment}></Stack.Screen>
            <Stack.Screen name="HomeUpdatePhoto" component={HomeUpdatePhoto}></Stack.Screen>
            <Stack.Screen name="PhotoDetail" component={PhotoDetailScreen}></Stack.Screen>
         </Stack.Navigator>
      </NavigationContainer>
   ) : (
      <LoginNavigate></LoginNavigate>
   );
}
export default IndexNavigate;
