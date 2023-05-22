import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',

    },
    touchable: {
        position: 'absolute',
        width: '100%',
        bottom: 1,
        borderWidth: 1,
        borderColor: 'grey',
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        borderColor: 'grey',
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 55,
        height: 55,
        borderRadius: 25,
        marginHorizontal: 5,
    },
    popUp: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        position: 'absolute',
        bottom: 60,
        marginTop: 20,
    },
    postContainer: {
        height: 300,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
