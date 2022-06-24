
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store/store';
import IndexNavigate from './src/screen/navigation/IndexNavigate';

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
