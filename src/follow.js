import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Entypo, FontAwesome } from '@expo/vector-icons'
const Follow = () => {
    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.followUs_header}>
                    Follow Us
                </Text>
            </View>
            <View style={styles.row1} >
                <View style={styles.fb}>
                    <TouchableOpacity style={styles.Follow}>
                        <Text style={styles.follow_text}>
                            Facebook
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.twitter}>
                    <TouchableOpacity style={styles.Follow}>
                        <Text style={styles.follow_text}>
                            Twitter
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.row2}>
                <View style={styles.Insta}>
                    <TouchableOpacity style={styles.Follow}>
                        <Text style={styles.follow_text}>
                            Instagram
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.linkedin}>
                    <TouchableOpacity style={styles.Follow}>
                        <Text style={styles.follow_text}>
                            Linkedin
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
               <Text style={styles.ContactUs_header}>
                    Contact Us
                     </Text>
             <View style={styles.contactUs}>
             
               
                <View style={styles.second_row}>
                    <Text>
                        <Entypo name='old-phone' size={30} color='white' />
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
                    <Text>
                        <Entypo name='email' size={30} color='white' />
                        <Text style={styles.footer_text}>
                            instaloan@biz.com
                        </Text>
                    </Text>
                </View>
            </View>  
        </View>
    );
}

export default Follow;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0e2496',

    },
    follow_text: {
        fontSize: 15,
        color: 'white',
        marginTop: 30,
       
    },
    followUs: {
        flex: 10,

    },
    Follow: {
        marginHorizontal: 10,
        marginVertical: 25,
        backgroundColor: '#364bba',
        borderRadius:15,
        height: 200,
        width: 200,
         alignItems:'center',
        justifyContent:'center'

    },
    fb: { 
        left: -10

    },
    twitter:{
        left: -19,
       
    },
    Insta:{
        left: -10,
        top:-70
    },
    linkedin:{
        left: -19,
        top:-70
        
    },
    row1: {
        flexDirection: 'row',
        marginVertical: 30,
        
    },

    row2: {
        flexDirection: 'row'

    },
    follow_button: {
        marginVertical: 40,
        marginLeft: 23
    },

    followUs_header: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginVertical:40,
       marginHorizontal:20
    },

    contactUs: {
        marginHorizontal: 10,
        borderRadius: 30,
        backgroundColor: '#364bba',
        marginBottom: 30


    },

    ContactUs_header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',


    },





    footer_text: {

        color: 'white',
    },







    // insta:{
    //     flex:2
    // }

})