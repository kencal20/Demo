import React from 'react';
import { View ,Text, StyleSheet} from 'react-native';
const Completescreen = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.main_text}>
          Thanks for selecting  usings Instaloan  
          </Text>
          <Text>
              You can go to your preferred or closest       bank to you.
          </Text>
      </View>
    );
}

export default Completescreen;


const styles=StyleSheet.create({
    container:{
       
        backgroundColor:'blue'
    },
    main_text:{
        justifyContent:'center',
        alignItems:'center',
        fontSize:40
    }
})