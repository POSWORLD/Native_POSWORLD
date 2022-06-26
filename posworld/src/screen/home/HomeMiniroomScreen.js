import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";


import { IMG_PATH } from '../../http/CustomAxios';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../../store/homes';
import { useEffect } from 'react';
import { useIsFocused, useLinkTo } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
function HomeMiniroomScreen() {
    const dispatch = useDispatch();
    const linkto = useLinkTo();
    const isFocused = useIsFocused();
    
    const home = useSelector((state) => state.homes.home);
    
    useEffect(() => {
        
        dispatch(select(home.id));
    }, [isFocused]);
    return (
        <>
            <View style={styles.block}>
                <Text style={styles.text}>MINI ROOM</Text>
                <TouchableOpacity onPress={() => linkto('/HomeUpdatePhoto')}>
                    <Image source={{ uri: `${IMG_PATH}${home.photo}` }} style={{ width: 390, height: 250 }}></Image>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
  block: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
  },

  text: {
    color: "#29b6f6",
  },
});
export default HomeMiniroomScreen;
