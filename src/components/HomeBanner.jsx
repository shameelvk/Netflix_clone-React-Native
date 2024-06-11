import { Alert, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUpcomingMovies } from '../api/Network'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const HomeBanner = () => {
const [upcommingMovieData, setupcommingMovieData] = useState([])
    useEffect(() => {

       const handleUpcommingApi=async()=>{
        const {data,status}=await getUpcomingMovies()
        if(status===200){
            setupcommingMovieData(data.results)

        }else{
            Alert.alert(`Request failed with ${data}`);
        }

        }

        handleUpcommingApi();
      
    
      
    }, [])

    const RenderHomeBanner=({item,index})=>{
        return<ImageBackground resizeMode='cover' style={styles.bannerImg} source={{uri:`https://image.tmdb.org/t/p/w500/${item.poster_path}`}}>

        </ImageBackground>
    }
   
  return (
    <View style={styles.container}>
      <FlatList showsHorizontalScrollIndicator={false} horizontal data={upcommingMovieData} renderItem={RenderHomeBanner} pagingEnabled/>
    </View>
  )
}

export default HomeBanner

const styles = StyleSheet.create({
    container:{
        height:responsiveHeight(70),
        width:'100%',
        backgroundColor:"#000"
    },
    bannerImg:{
        width:responsiveWidth(100),
        height:"100%"
    }
})