import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo, AntDesign, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'

const Loan = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_text}>
                Types of loan
            </Text>
            <View style={styles.for_students}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Studentloan")
                    }}
                    style={styles.loantype_button}
                >
                    <Text style={styles.button_text}>
                        Click for Student loan
                    </Text>
                </TouchableOpacity>

                <View style={styles.for_workers}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Workersloan")
                        }}
                        style={styles.loantype_button}>
                        <Text style={styles.button_text}>
                            Click for Workers  loan
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
                            Click for Pension  loan
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.followUs}>

                    <Text style={styles.followUs_header}>
                        Follow us
                    </Text>
                    <View >
                        <Text >
                            <TouchableOpacity style={styles.fb}>
                                <Entypo name='facebook' size={30} color='black' />
                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                facebook

                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text >
                            <TouchableOpacity style={styles.twitter_button}>
                                <Entypo name='twitter' size={30} color='black' />

                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                twitter
                            </Text>
                        </Text>
                    </View>
                    <View>
                        <Text >
                            <TouchableOpacity style={styles.insta_button}>
                                <Entypo name='instagram' size={30} />
                            </TouchableOpacity>
                            <Text style={styles.footer_text}>
                                instagram
                            </Text>
                        </Text>
                    </View>
                    <View><Text >
                        <TouchableOpacity style={styles.linkedin_button}>
                            <AntDesign name='linkedin-square' size={30} color='black' />
                        </TouchableOpacity>
                        <Text style={styles.footer_text}>
                            linkedin</Text>
                    </Text>
                    </View>
                </View>
                <View style={styles.contactUs}>
                    <Text style={styles.ContactUs_header}>
                        Contact Us
                    </Text>
                    <Text>
                        <Entypo name='old-phone' size={30} />
                        <Text style={styles.footer_text}>
                            +802 547 9512
                        </Text>
                    </Text>
                    <Text>
                        <FontAwesome name='whatsapp' size={30} />
                        <Text style={styles.footer_text}>
                            +854 712 1369
                        </Text>
                    </Text>
                    <Text>
                        <Entypo name='email' size={30} />
                        <Text style={styles.footer_text}>
                            instaloan@biz.com
                        </Text>
                    </Text>
                    <TouchableOpacity>
                        <Entypo name='skype' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
}

export default Loan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:80
    },

    header_text: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    button_text: {
        fontSize: 30
    },

    loantype_button: {
        borderWidth: 3,
        borderRadius: 15,
        marginVertical: 70,
        marginTop: 30,

    },



    footer: {
        backgroundColor: '#a7a8b0',
        flexDirection: 'row',

    },

    footer_text: {
        fontSize: 20
    },

    followUs: {
        flex: 3,
        marginHorizontal: 10,
        marginVertical: 10
    },

    followUs_header: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    contactUs: {
        marginHorizontal: 10,
        flex: 5,
        fontSize: 3,
        marginVertical: 10
    },

    ContactUs_header: {
        fontSize: 20,
        fontWeight: 'bold'
    },



})