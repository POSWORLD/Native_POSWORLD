import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./src/screen/LoginScreen";
import BottomNavigation from "./src/screen/navigation/BottomNavigation";

export default function App() {
   return (
      <SafeAreaProvider>
         <SafeAreaView style={{ flex: 1 }}>
            <BottomNavigation></BottomNavigation>
         </SafeAreaView>
      </SafeAreaProvider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
