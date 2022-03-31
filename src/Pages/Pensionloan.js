import React from 'react';
import { View ,Text} from 'react-native';




const Pensionloan = () => {
    return (
        <View style={styles.container}>
           <Text>
       I am for pension
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
    },
});