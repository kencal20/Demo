import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'


const Completescreen = ({ route }) => {
    const { newTitle } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.main_text}>
                Thanks for usings Instaloan  !!
            </Text>
            <View style={styles.checkcircle}>
                <Feather name='check-circle' size={320}
                color='blue'
                />

            </View>
            <Text style={styles.sub_text} >
                You can go to your preferred or closest {newTitle} to you.
            </Text>

        </View>
    );
}

export default Completescreen;


const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    main_text: {
        fontSize: 40,
        marginVertical: 30
    },
    checkcircle: {
        color: '#364bba',


    },
    sub_text:{
        fontSize:20,
        marginHorizontal:10,
        marginVertical:30
    }

})