import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
    return (
       <View style={styles.container}>
           <TouchableOpacity 
           onPress={() => {
            navigation.navigate("Studentloan")
        }}>
               <Text>
                   Click to student
               </Text>
           </TouchableOpacity>
       </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  