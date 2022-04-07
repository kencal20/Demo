import React from 'react';
import { View ,Text, StyleSheet} from 'react-native';
const Completescreen = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.main_text}>
          Thanks for usings Instaloan  !!
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
        marginVertical:50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue'
      
    },
    main_text:{
        fontSize:40,
        marginVertical:50
    }
  
})