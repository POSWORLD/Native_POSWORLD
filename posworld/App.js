import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import IndexNavigate from './src/screen/navigation/IndexNavigate';
import store from './src/store/store';

export default function App() {
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
