import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
           navigation.replace('Home')
            
        }, 3000);
    },[])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'transparent'} hidden/>
      <Image style={styles.splashImg} source={require('../../assets/images/splashimg.png')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:myColor.primary,
        justifyContent:"center",
        alignItems:"center"
    },
    splashImg:{
        width:"70%",
        height:100
    }

})