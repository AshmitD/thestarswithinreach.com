
import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, style, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



export default function Home({navigation}) {
  console.log("l")
return(
     <View>
       <Text>Hi there it is akshit dewan</Text>
      </View>

)
}

const styles = StyleSheet.create ({

    title: {
      marginTop: 65,
      paddingLeft: 15, 
      fontSize: 40, 
      color: "black", 
      fontFamily: "Cochin", 
      width: "100%", 
      textAlign: "center"
    },
    everything: {
      flex: 1,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#24305E",
          width: "100%"
    },
    button: {
      backgroundColor: "#F76C6C",
      marginTop: 50,
      width: "75%",
      borderRadius: 10,
      fontSize: 750,
    },
    
     
    
  })

