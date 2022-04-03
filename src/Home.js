import React from 'react';
import { View, Text, StyleSheet,Image  } from 'react-native';
import { FontAwesome} from '@expo/vector-icons'
import join from  "../assets/join.png"
const Home = () => {
    return (
        <View style={styles.container}>

            <Text style={styles.welcome_text}>
                Welcome To Instaloan!!
            </Text>
            <View style={styles.About}>
                <Text style={styles.about_header} >
                    About Us
                </Text>
                <Text style={styles.about_text}>
                    At Instaloan it is our job and sole purpose to be the mediator
                    between  the customer and serveral banks, we try our best our best
                    to make sure customers can get get the loan from these prominent
                    banks, even though we as an entity do not give loans.
                    We with the authority given  us by these banks do our best to get customers for them.

                </Text>
                <Image source={join} style={styles.image} />
                </View>
                <Text style={styles.link_ref}>
                    click on  <FontAwesome name='money' size={20} /> button for
                    the loan packages
                </Text>
            
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 40
    },

    welcome_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color:'orange'

    },
    About: {
        marginVertical:50
    }
    ,

    about_header: {
        fontSize: 20,
        fontWeight: 'bold',

    },

    about_text: {
        marginVertical: 20,
        marginHorizontal: 10,
        
       
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 40,
        alignSelf: 'center',
      
    },
    link_ref:{
        fontSize:20
    }

})
