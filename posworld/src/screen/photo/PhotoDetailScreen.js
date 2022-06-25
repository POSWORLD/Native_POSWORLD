import { Link, useIsFocused } from '@react-navigation/native';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderScreen from '../HeaderScreen';
import { delPhoto, selectPhoto, selectPhotoById } from '../../store/photos';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native-paper';

function PhotoDetailScreen() {
    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const pid = useSelector((state) => state.photos.pid);
    const photo = useSelector((state) => state.photos.photoDetail);
    console.log('photolist', photo);
    const photoget = () => {
        dispatch(selectPhotoById(pid));
    };
    useEffect(() => {
        photoget();
    }, [isFocused]);

    const onSubmit = () => {
        dispatch(delPhoto(pid));
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.block}>
                    <View style={[styles.head, styles.paddingBlock]}>
                        <Text style={styles.displayName}>title</Text>
                    </View>
                    <Image source={require('../home/img/dog.jpg')} style={styles.image} resizeMethod="resize" resizeMode="cover" />
                    <View style={styles.paddingBlock}>
                        <Text style={styles.description}>content</Text>
                        <Text style={styles.date}>wdate</Text>
                    </View>
                    <View style={styles.btnview}>
                        <TouchableOpacity onPress={onSubmit} style={styles.btn}>
                            <Text>삭제</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 40,
    },
    block: {
        marginTop: 1,
        paddingTop: 16,
        paddingBottom: 16,
    },
    paddingBlock: {
        paddingHorizontal: 16,
    },
    head: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    displayName: {
        marginTop: 4,
        lineHeight: 16,
        fontSize: 16,
        marginLeft: 8,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 8,
    },
    btnview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 75,
        height: 55,
        backgroundColor: '#A9D0F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default PhotoDetailScreen;
