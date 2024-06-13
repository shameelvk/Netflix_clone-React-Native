import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const MovieCard = ({title,data}) => {
  const route=useNavigation();

  function handleNavigation(item) {
    route.navigate('MovieDetails',{item})
    
  }

    const renderMovieCard=({item})=>{
        return(
            <TouchableOpacity onPress={()=>handleNavigation(item)}>
              <Image
          resizeMode="contain"
          style={styles.movieImg}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
              />
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList horizontal data={data} renderItem={renderMovieCard} 
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={()=><View style={{width:20}}/>} />
    </View>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    container:{
        height: responsiveHeight(40),
    gap: 15,
    marginTop: 10,
    }
    ,title:{
        color: 'white',
          fontSize: 17,
          fontWeight: 'bold',
          letterSpacing: 1,
          marginLeft: 10,
      },
      movieImg:{
        width: responsiveWidth(50),
    height: '100%',
    borderRadius:10,
    
      }
})