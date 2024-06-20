import { Button, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Download = () => {
    return (
        <View style={styles.container}>
            <View style={{ margin: 10, paddingLeft: 10 }}>
                <Text style={{ fontWeight: '400', fontSize: 15, color: '#FFFFFF' }}>Smart Downloads</Text>
            </View>
            <View style={styles.mainContent}>
                <Text style={{ fontWeight: '700', fontSize: 20, color: '#FFFFFF' }}>Introducing Downloads For You</Text>
                <Text style={{ fontWeight: '400', fontSize: 11, color: '#FFFFFF', letterSpacing: 2, }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.

                </Text>
                <View style={styles.cicleAvathar} ></View>
                <Button title='SETUP' color={'#0071EB'}/>
                <View style={{alignSelf:"center",backgroundColor:"#424242",padding:10,marginTop:20}}>
                    <Text style={{ fontWeight: '700', fontSize: 17, color: '#FFFFFF' }}>Find Something to Download</Text>
                </View>

            </View>
            
        </View>
    )
}

export default Download

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop:StatusBar.currentHeight,
    },
    mainContent: {
        flex:1,
        marginTop: 20,
        margin: 10,
        gap: 10,
       

    },
    cicleAvathar: {
        width: 177,
        height: 177,
        borderRadius: 100,
        backgroundColor: '#424242',
        alignSelf:"center",
        marginVertical:20
    }
})