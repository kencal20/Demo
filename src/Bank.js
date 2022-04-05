import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import scb from '../assets/Scb.png'
import fidelity from '../assets/Fidelity.jpg'
import ecobank from '../assets/Ecobank.png'

const Bank = (navigation) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header_text}>
                    Please select by clicking one of these banks
                </Text>
            </View>
            <View style={styles.b_list}>
                <TouchableOpacity style={styles.scb}>
                    <Image source={scb} style={styles.img} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.fidelity}>
                    <Image source={fidelity} style={styles.img} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.ecobank}>
                    <Image source={ecobank} style={styles.img} />
                </TouchableOpacity>
            </View>

          
        </View>
    );
}

export default Bank;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
        bottom:10



    },
    header_text: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginVertical: 80,
        alignItems: 'center',
        justifyContent: 'center',


    },

    img: {
        width: 300,
        marginVertical: 10,
        marginHorizontal: 20

    },

    b_list:{
        bottom:70
    }
})