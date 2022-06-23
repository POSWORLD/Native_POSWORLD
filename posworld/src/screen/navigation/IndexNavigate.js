
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BoardAddScreen from '../BoardAddScreen';
import PCommentScreen from "../photo/PCommentScreen";
import BottomNavigation from "./BottomNavigation";
function IndexNavigate() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomNavigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="PComment" component={PCommentScreen}></Stack.Screen>
         <Stack.Screen name="BoardAdd" component={BoardAddScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );

}
export default IndexNavigate;
