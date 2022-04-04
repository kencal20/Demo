import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'



const Loan = ({ navigation }) => {
    return (

        <View style={styles.container}>
            <Text style={styles.header_text}>
                Types of loan
            </Text>
            <View style={styles.first_row}>
                <View style={styles.for_students}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Studentloan")
                        }}
                        style={styles.loantype_button}
                    >
                        <Text style={styles.button_text}>
                            Students loan
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.for_workers}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Workersloan")
                        }}
                        style={styles.loantype_button}>
                        <Text style={styles.button_text}>
                            Workers  loan
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.for_pension}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Pensionloan")
                    }}
                    style={styles.loantype_button}
                >
                    <Text style={styles.button_text}>
                        Pension  loan
                    </Text>
                </TouchableOpacity>


            </View>

        </View>

    );
}

export default Loan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e2496',

    },

    header_text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 40,
        marginVertical: 50


    },

    button_text: {
        fontSize: 10

    },

    loantype_button: {
        borderWidth: 0,
        borderRadius: 15,
        marginHorizontal: 20,
        height: 200,
        width: 200,
        backgroundColor: '#364bba',
        justifyContent: 'center',
        alignItems: 'center',
        left: -20



    },
    first_row: {
        flexDirection: 'row',
        marginVertical: 90
    },
    for_students: {


    },
    for_workers: {
        flex: 5,
        left: -30
    },
    for_pension: {
        top: -80
    },


    button_text: {
        fontSize: 20,
        color: 'white'
    },





})