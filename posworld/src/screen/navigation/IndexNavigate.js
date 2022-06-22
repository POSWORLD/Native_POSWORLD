import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PCommentScreen from "../photo/PCommentScreen";
import BottomNavigation from "./BottomNavigation";
function IndexNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={BottomNavigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="PComment"
          component={PCommentScreen}
          options={{
            headerTitle: "댓글",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default IndexNavigate;
