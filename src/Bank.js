import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import scb from '../assets/Scb.png'
import fidelity from '../assets/Fidelity.jpg'
import absa from '../assets/Absa.png'
import ecobank from '../assets/Ecobank.png'

const Bank = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={scb} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={fidelity} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={absa} style={styles.img} />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={ecobank} style={styles.img} />
            </TouchableOpacity>
        
        </View>
    );
}

export default Bank;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'dodgerblue'
    },
    img: {
        width: 300,
        marginVertical: 10,
        marginHorizontal: 20

    }

})