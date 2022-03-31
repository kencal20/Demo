import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'


const Studentloan = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Workersloan")
                }}
            >
                <Text>
                    Hello
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default Studentloan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});