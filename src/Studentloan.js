import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Studentloan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Welcome  to student loan , where we give the oppurtunity to students
                to continue their studies by loaning them money for their School which
                in turn pay back the money with low interest
            </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Bank')
                }}
                style={styles.button} >
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        </View >
    );
}

export default Studentloan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
    },
    button: {
        backgroundColor: 'dodgerblue',
        borderRadius: 20,
        borderWidth: 3,
        fontSize: 40
    }
})