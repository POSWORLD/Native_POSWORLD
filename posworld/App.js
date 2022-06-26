import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "./src/store/store";
import IndexNavigate from "./src/screen/navigation/IndexNavigate";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
export default function App() {
  useEffect(() => {
    registerForPushNotification()
      .then((token) => console.log(token))
      .catch((err) => console.log(err));
  }, []);
  async function registerForPushNotification() {
    const { status } = await Notifications.getPermissionsAsync();
    if (status != "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
    }
    if (status != "granted") {
      alert("Fail to get the push token");
      return;
    }
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;

    return token;
  }
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <IndexNavigate></IndexNavigate>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
