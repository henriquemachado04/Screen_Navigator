import React from "react"
import { View, Text, Button } from "react-native"

export default function HomeScreen ({ navigation }){
    const handlerAbout = () => navigation.navigate('About')

    return (
        <View>
            <text>Home Screen</text>
            <Button title="About" onPress={handlerAbout} />
        </View>
    )
}