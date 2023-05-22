import React, { useState, useEffect, useRef } from 'react';
import { Image, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../theme/onLongPressStyles';


interface Prop {
    image: string
    offsetY: number
}
const ImageAnimation = ({ image, offsetY }: Prop) => {
    const animation = useRef(new Animated.Value(0)).current;
    const [animatedValue] = useState(animation);



    // eslint-disable-next-line react-hooks/exhaustive-deps
    const startAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    useEffect(() => {
        startAnimation();
    }, [startAnimation]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [offsetY, 0], // Desplazamiento vertical personalizado
    });

    const animatedStyle = {
        opacity: animatedValue,
        transform: [
            { translateY }, // Aplicar la animación de desplazamiento vertical
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1],
                }),
            },
        ],
    };

    return (
        <TouchableOpacity>
            <Animated.View style={[styles.iconContainer, animatedStyle]}>
                <Image style={styles.logo} source={image} />
            </Animated.View>
        </TouchableOpacity>
    );
};

export default ImageAnimation;
