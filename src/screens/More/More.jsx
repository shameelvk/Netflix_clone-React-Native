import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const More = () => {
  return (
    <View style={styles.container}>
      <View style={styles.catgoryContainer}>
        <View style={styles.categoryCard}>
          <Image source={require('../../assets/images/emenalo.png')} style={styles.cardImg} />
          <Text>Emenalo</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../assets/images/oneyaka.png')} style={styles.cardImg} />
          <Text>Onyeka</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../assets/images/thelma.png')} style={styles.cardImg} />
          <Text>Thelma</Text>
        </View>
        <View style={styles.categoryCard}>
          <Image source={require('../../assets/images/kids.png')} style={styles.cardImg} />
          <Text>Kids</Text>
        </View>
        <View style={[styles.categoryCard, { borderWidth: 1, borderColor: '#8C8787',justifyContent:"center" }]}>
          <Fontisto name='plus-a' color="#C4C4C4" size={35} />

        </View>

      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
        <MaterialCommunityIcons name='pencil' size={12} color="#fff" />
        <Text style={{ fontSize: 15, fontWeight: "500", color: 'rgba(256,256,256,0.83)' }}>Manage Profiles</Text>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.headingContainer}>
          <MaterialCommunityIcons name='message-reply-text-outline' size={24} color="#fff" />
          <Text style={{ fontSize: 20, fontWeight: "700", color: 'rgb(256,256,256)' }}>Tell friends about Netflix.</Text>
        </View>
        <Text style={{ fontSize: 11, fontWeight: "500", color: 'rgb(256,256,256)', lineHeight: 15 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus
          bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa,
        </Text>
        <Text style={{ fontSize: 11, fontWeight: "500", color: '#C4C4C4', lineHeight: 15, textDecorationLine: "underline" }}>
          Terms & Conditions
        </Text>
        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity style={{ backgroundColor: "#fff", width: 96, height: 36, justifyContent: "center", alignItems: "center" }} >
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#000000" }}>Copy Link</Text>

          </TouchableOpacity>

        </View>


        <View style={styles.socialContainer}>
          <FontAwesome name='whatsapp' size={36} color="#20B038" />
          <View style={{ width: 1, height: 30, backgroundColor: '#8C8787' }} />
          <FontAwesome name='facebook-square' size={36} color="#fff" />
          <View style={{ width: 1, height: 30, backgroundColor: '#8C8787' }} />
          <MaterialCommunityIcons name='gmail' size={36} color="#fff" />
          <View style={{ width: 1, height: 30, backgroundColor: '#8C8787' }} />
          <View style={{ width: 38, width: 38, justifyContent: "center", alignItems: "center" }}>
            <Feather name='more-horizontal' size={36} color="#fff" />
            <Text style={{ fontFamily: "" }}>More</Text>
          </View>


        </View>
        

      </View>
      <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
          <FontAwesome size={33} color='#fff' name='check'/>
          <Text style={{ fontSize: 16, fontWeight: "500", color: 'rgb(256,256,256)', }}>My List</Text>
        </View>
        <View style={{gap:10}}>
          <Text style={{ fontSize: 16, fontWeight: "500", color: 'rgb(256,256,256)', }}>App Settings</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: 'rgb(256,256,256)', }}>Account</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: 'rgb(256,256,256)', }}>Help</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", color: 'rgb(256,256,256)', }}>Sign Out</Text>
        
        
        </View>

    </View>
  )
}

export default More

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    gap: 20,
    paddingTop:30,
  },
  catgoryContainer: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 20
  },
  categoryCard: {
    alignItems: "center",
    width: 70,
    height: 70,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    resizeMode: "cover"
  },
  headingContainer: {
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  subContainer: {
    gap: 10,
   
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
})