import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import scb from '../assets/Scb.png'
import fidelity from '../assets/Fidelity.jpg'
import absa from '../assets/Absa.png'
import ecobank from '../assets/Ecobank.png'
import { } from 'react-native-web';
const Bank = () => {
    return (
        <View>
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
            <Text>
                Bank
            </Text>
        </View>
    );
}

export default Bank;

const styles = StyleSheet.create({

    img: {
        width: 300,
        marginVertical: 10,
        marginHorizontal: 20

    }

})