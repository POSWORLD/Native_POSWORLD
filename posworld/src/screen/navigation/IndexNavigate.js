import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginCheck } from "../../store/user";
import BoardScreen from "../BoardScreen";
import HomeScreen from "../HomeScreen";
import BottomNavigation from "./BottomNavigation";
import LoginNavigate from "./LoginNavigete";

function IndexNavigate() {
  const isLogin = useSelector((state) => state.user.isLogin);
  const dispatch = useDispatch();
  const loginCheckFunc = async () => {
    const token = await AsyncStorage.getItem("token");
    dispatch(loginCheck(token));
  };
  useEffect(() => {
    loginCheckFunc();
    console.log("isLogin", isLogin);
  }, [isLogin]);

  const Stack = createStackNavigator();
  return isLogin ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOME"
          component={BottomNavigation} //
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="BOARD"
          component={BoardScreen} //
          options={{ headerTitle: "방명록" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <LoginNavigate></LoginNavigate>
  );
}
export default IndexNavigate;
