import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Pensionloan = () => {
    return (
        <View style={styles.container}> 
            <Text>
             Welcome  to student loan , where we give the oppurtunity to students 
             to continue their studies by loaning them money for their School which 
             in turn pay back the money with low interest
         </Text>
        </View>
    );
}

export default Pensionloan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})