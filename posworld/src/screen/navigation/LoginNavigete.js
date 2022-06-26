import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../LoginScreen";
import SignUpScreen from "../SignUpScreen";

const Stack = createStackNavigator();
const LoginNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="signUp" component={SignUpScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigate;
