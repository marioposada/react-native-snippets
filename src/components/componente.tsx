import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Componente = (texto: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined) => {
    return (
        <View style={styles.container}>
            <Text>{texto}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Componente;
