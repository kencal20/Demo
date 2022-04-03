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

                <View>
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
            <View style={styles.footer}>
                <View style={styles.followUs}>

                    <Text style={styles.followUs_header}>
                        Follow us
                    </Text>
                    <View style={styles.followus_row}  >
                        <View>
                        <Text >
                            <TouchableOpacity style={styles.fb}>
                                <Entypo name='facebook' size={30} color='white' />
                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                facebook

                            </Text>
                        </Text>
                        </View>
                    
                    <View>
                        <Text >
                            <TouchableOpacity style={styles.twitter_button}>
                                <Entypo name='twitter' size={30} color='white' />

                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                twitter
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text >
                            <TouchableOpacity style={styles.insta_button}>
                                <Entypo name='instagram' size={30}  color='white'/>
                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                instagram
                            </Text>
                        </Text>
                    </View>
                </View>
                </View>
                <View style={styles.contactUs}>
                    <Text style={styles.ContactUs_header}>
                        Contact Us
                    </Text>
                    <View style={styles.second_row}>
                    <Text>
                        <Entypo name='old-phone' size={30}  color='white'/>
                        <Text style={styles.footer_text}>
                            +802 547 9512
                        </Text>
                    </Text>
                    <Text>
                        <FontAwesome name='whatsapp' size={30} color='white' />
                        <Text style={styles.footer_text}>
                            +854 712 1369
                        </Text>
                    </Text>
                    {/* <Text>
                        <Entypo name='email' size={30} color='white' />
                        <Text style={styles.footer_text}>
                            instaloan@biz.com
                        </Text>
                    </Text> */}
                </View>
                </View>
            </View>
        </View>

    );
}

export default Loan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#0e2496',

    },

    header_text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal:40


    },

    button_text: {
        fontSize: 10

    },

    loantype_button: {
        borderWidth: 0,
        borderRadius: 15,
        marginVertical: 20,
        marginHorizontal: 20,
        height: 100,
        width: 100,
        backgroundColor: '#364bba',
        justifyContent: 'center',
        alignItems: 'center',



    },
    first_row: {
        flexDirection: 'row',
        marginVertical:90
    },
    for_students: {
        flex: 5

    },
    for_workers: {
        flex: 5,

    },


    button_text: {
        fontSize: 20,
        color: 'white'
    },

    footer_text: {
        fontSize: 15,
        color:'white',
        marginTop:30
    },

    followUs: {
        marginHorizontal: 10,
        marginBottom: 20,
       flexDirection:'row',
        marginVertical: 10,
        backgroundColor: '#364bba',
        borderRadius:30
    },

    followUs_header: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    followus_row:{
        marginVertical:30,
        flexDirection:'row',
        marginRight:50
    },
    contactUs: {
        marginHorizontal: 10,
       borderRadius:30,
        backgroundColor: '#364bba',
        marginBottom:30
     
       
    },

    ContactUs_header: {
        fontSize: 20,
        fontWeight: 'bold',
         color:'white',
         flexDirection:'row'
    },
    second_row:{
        flexDirection: 'row',
        marginHorizontal:90,

        
    }



})