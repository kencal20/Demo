import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import scb from '../assets/Scb.png'
import fidelity from '../assets/Fidelity.jpg'
import absa from '../assets/Absa.png'
import ecobank from '../assets/Ecobank.png'

const Bank = () => {
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

            <View>
                <View style={styles.back_button}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Loan')
                        }}
                    >
                        <Text style={styles.button}>
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
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

    back_button: {
        backgroundColor: '#6868a1',
        borderWidth: 0,
        borderRadius: 10,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 100,
        marginHorizontal: 130,
        bottom: 100

    },
    b_list: {
        bottom:50
    },

    button: {
        color: 'white'
    }
})