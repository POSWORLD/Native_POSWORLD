import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Materiallcons from 'react-native-vector-icons/MaterialIcons';
import BoardScreen from '../BoardScreen';
const Tab = createMaterialBottomTabNavigator();
function BottomNavigation() {
   return (
      <Tab.Navigator
         initialRouteName="MiniRoom"
         screenOptions={{
            tabBarIndicatorStyle: {
               backgroundColor: '#009688',
            },
            tabBarActiveTintColor: '#009688',
         }}>
         <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
               tabBarLabel: '미니홈피',
               tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="Photo"
            component={HomeScreen}
            options={{
               tabBarLabel: '사진첩',
               tabBarIcon: ({ color }) => <IonIcon name="image" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="Wave"
            component={HomeScreen}
            options={{
               tabBarLabel: '파도타기',
               tabBarIcon: ({ color }) => <Materiallcons name="waves" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="Board"
            component={BoardScreen}
            options={{
               tabBarLabel: '방명록',
               tabBarIcon: ({ color }) => <Icon name="pencil-square-o" color={color} size={24} />,
            }}
         />
         <Tab.Screen
            name="Setting"
            component={HomeScreen}
            options={{
               tabBarLabel: '더보기',
               tabBarIcon: ({ color }) => <MaterialCommunityIcons name="dots-horizontal" color={color} size={24} />,
            }}
         />
      </Tab.Navigator>
   );
}

export default BottomNavigation;
