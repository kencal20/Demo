import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from 'react';
import { StyleSheet, View } from 'react-native'
import Loan from "../Loan";
import Home from "../Home";
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';




const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            style={styles.shadow}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    position: 'absolute',
                    bottom: 25,
                    right: 16,
                    left: 16,
                    borderRadius: 15,
                    backgroundColor: "dodgerblue",

                }


            }}
        // initialRouteName="Home"
        // activeColor="#f0edf6"
        // inactiveColor="#3e2465"
        // barStyle={{ backgroundColor: '#694fad' }}


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
const styles = StyleSheet.create({
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
