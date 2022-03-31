import React from 'react';
import { View, TouchableOpacity } from 'react-native';


const Workersloan = (navigation) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={() => {
                    navigation.navigate("Pensionloan")}}
                    >
                <Text>
                    hello
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Workersloan;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});