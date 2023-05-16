import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const Pagina3Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text>Pagina 3</Text>

            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Ir a la pagina 1"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};



export default Pagina3Screen;
