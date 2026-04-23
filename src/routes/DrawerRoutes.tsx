import React from "react";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";

import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import {Ionicons} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
    const user = {
        nome:"joão silva",
        foto: "https://i.pravatar.cc/100"
    };

    return (
        <View style={StyleSheet.container}>

        <DrawerContentScrollView {...props}>

        <View style={StyleSheet.header}>

        <Image 
        source={{uri: user.foto}}
        style={StyleSheet.avatar}
        />

        <Text style={StyleSheet.name}>
        {user.nome}
        </Text>

        </View>

         <DrawerItemList {...props} />

        </DrawerContentScrollView>
        <View style={styles.footer}>

        <TouchableOpacity
        style={StyleSheet.logoutButton}
        onPress={() => console.log("logout")}
        >

        <Ionicons name="log-out-outline" size={22} color='#fff' />

        <Text style={StyleSheet.logoutText}>
            Deslogar 
        </Text>

        </TouchableOpacity>

        </View>

        </View>
    );
}

    export default function DrawerRoutes() {
        return (
            <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerContentContent {...props} />}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#fff",
                },
                    headerTintColor:"#fff",
                    drawerActiveTintColor:"#1E88E5"
            }}
            >

            <Drawer.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                drawerIcon: ({color, size}) => (
                    <Ionicons name="home-outline" size={size}
                )
            }}
        )
    }