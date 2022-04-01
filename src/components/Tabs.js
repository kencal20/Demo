import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { StyleSheet, View } from 'react-native'
import Loan from "../Loan";
import Home from "../Home";
import { AntDesign, FontAwesome } from '@expo/vector-icons'



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={{
            showLabel: false,
        }}
            

        >
            <Tab.Screen name='Home' component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <AntDesign name='home' size={30}
                        />
                    </View>
                )
            }} />


            <Tab.Screen name='Loan' component={Loan} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <FontAwesome name='money' size={30}
                        />
                    </View>
                )
            }} />

        </Tab.Navigator>

    );
}
const style = StyleSheet.create({
    shadow: {
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})

export default Tabs;
