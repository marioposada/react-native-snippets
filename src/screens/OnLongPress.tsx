
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from '../theme/onLongPressStyles';
import ImageAnimation from '../components/onLongPress/componente';


const images = [
    require('../assets/icons/like.png'),
    require('../assets/icons/celebrate.png'),
    require('../assets/icons/love.png'),
    require('../assets/icons/insigthful.png'),
    require('../assets/icons/curious.png'),
];



const Pagina2Screen = () => {
    const [show, setShow] = useState(false);

    const handleLongPress = () => {
        setShow(prev => !prev);
    };
    const handlePress = () => {
        Alert.alert('One click');
    };

    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                {show && (
                    <View style={styles.popUp}>
                        {images.map((image, index) => (
                            <ImageAnimation key={index} image={image} offsetY={index * 30} />
                        ))}
                    </View>
                )}

                <TouchableOpacity onPress={handlePress} onLongPress={handleLongPress} style={styles.touchable}>
                    <Text>Recomendar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default Pagina2Screen;
