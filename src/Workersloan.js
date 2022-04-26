import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import worker from '../assets/worker.jpg';
const Workersloan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
            <Image source={worker} style={styles.image} />
            </View>
                <Text style={styles.header}>
                    Workers loan
                </Text>

                <Text style={styles.subtext}>
                    Welcome  to student loan , where we give the oppurtunity to students
                    to continue their studies by loaning them money for their School which
                    in turn pay back the money with low interest
                </Text>
                <View style={styles.buttons}>
                    <View style={styles.button1}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Bank')
                            }}
                        >
                            <Text style={styles.button}>
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button2}>
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
            </View >
      
    );
}

export default Workersloan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#045161',
        alignItems: 'center',
        justifyContent: 'center',

    },

 
    image:{
        width: 300,
        height:300,
        marginBottom: 40,
        alignSelf: 'center',
        borderRadius:200
    },
    header: {
        color: 'white',
        fontSize: 30,
        marginVertical:30,
        right:70

    },
    subtext: {
        color: 'white',
        marginHorizontal:30,
    
       
    },
    buttons: {
        flexDirection: 'row',
         marginVertical:20,
         top:40,
         right:10
    },
    button: {
        fontSize: 20,
        color: 'white'
    },
    button1: {
        backgroundColor: 'dodgerblue',
        borderWidth: 0,
        borderRadius: 10,
        height: 50,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'

    }
    ,
    button2: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        left:30

    }

})