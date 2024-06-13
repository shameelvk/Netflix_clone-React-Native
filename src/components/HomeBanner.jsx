import { Alert, FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../api/Network'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useNavigation } from '@react-navigation/native'

const HomeBanner = () => {
    const [upcommingMovieData, setupcommingMovieData] = useState([])
    useEffect(() => {

        const handleUpcommingApi = async () => {
            const { data, status } = await getUpcomingMovies()
            if (status === 200) {
                setupcommingMovieData(data.results)

            } else {
                Alert.alert(`Request failed with ${data}`);
            }

        }

        handleUpcommingApi();



    }, [])
    const route=useNavigation()
    const handlePlay=(item)=>{
        route.navigate('MovieDetails',{item})
    }

    const RenderHomeBanner = ({ item, index ,handlePlay}) => {
        return <ImageBackground imageStyle={{opacity:0.8}} resizeMode='cover' style={styles.bannerImg} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}>
            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']} style={styles.linearContainer}>
                <Text style={styles.title}>My List</Text>
                <TouchableOpacity onPress={()=>handlePlay(item)}  activeOpacity={.8} style={styles.playButton}>
                    <FontAwesome5 name='play' size={25} color="black" />
                    <Text style={[styles.title, {
                        fontSize: responsiveFontSize(2.2),
                        color: 'black',
                        fontWeight: '700',
                    }]}>Play</Text>

                </TouchableOpacity>
                <Text style={styles.title}>Info</Text>
            </LinearGradient>
        </ImageBackground>
    }

    return (
        <View style={styles.container}>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={upcommingMovieData} renderItem={({item})=><RenderHomeBanner item={item} handlePlay={handlePlay}/>} pagingEnabled />
        </View>
    )
}

export default HomeBanner

const styles = StyleSheet.create({
    container: {
        height: responsiveHeight(70),
        width: '100%',
        backgroundColor: "#000"
    },
    bannerImg: {
        width: responsiveWidth(100),
        height: "100%",
        justifyContent: "flex-end",
        
    },
    linearContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",

    },
    title: {
        fontSize: responsiveFontSize(2.3),
        color: 'white',
        fontWeight: '500',
    },
    playButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: responsiveWidth(28),
        height: responsiveHeight(5.5),
        gap: 10,
        backgroundColor: "white",
        borderRadius: 10
    }

})