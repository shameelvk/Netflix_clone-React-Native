import { StatusBar, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { myColor } from '../../utils/Theme'
import LottieView from 'lottie-react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('User')
        }, 3000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} hidden />
            <LottieView 
                style={styles.lottie} 
                source={require('../../assets/lottie/Netflix_lottie.json')} 
                autoPlay 
                loop 
                resizeMode="cover" 
            />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColor.primary,
        justifyContent: "center",
        alignItems: "center"
    },
    lottie: {
        width: responsiveWidth(100),
        height: 200
    }
})
