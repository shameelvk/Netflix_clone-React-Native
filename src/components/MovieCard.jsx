import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const MovieCard = ({title,data}) => {

    const renderMovieCard=({item})=>{
        return(
            <Image
          resizeMode="contain"
          style={styles.movieImg}
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
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