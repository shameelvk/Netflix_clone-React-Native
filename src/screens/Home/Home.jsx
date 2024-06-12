import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeBanner from '../../components/HomeBanner'
import MovieCard from '../../components/MovieCard'
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '../../api/Network'

const Home = () => {
  const [popularMovieData, setPopularMovieData] = useState([])
  const [nowPlayingMovieData, setNowPlayingMovieData] = useState([])
  const [topRatedMovieData, setTopRatedMovieData] = useState([])

  useEffect(() => {

    const handlePopularMovieApi = async () => {
        const { data, status } = await getPopularMovies()
        if (status === 200) {
            setPopularMovieData(data.results)

        } else {
            Alert.alert(`Request failed with ${data}`);
        }

    }

    handlePopularMovieApi();

    const handleTopRatedMovieApi = async () => {
      const { data, status } = await getTopRatedMovies()
      if (status === 200) {
          setTopRatedMovieData(data.results)

      } else {
          Alert.alert(`Request failed with ${data}`);
      }

  }

  handleTopRatedMovieApi();

  const handleNowPlayingMovieApi = async () => {
    const { data, status } = await getNowPlayingMovies()
    if (status === 200) {
        setNowPlayingMovieData(data.results)

    } else {
        Alert.alert(`Request failed with ${data}`);
    }

}

handleNowPlayingMovieApi();



}, [])
  return (
    <View style={styles.container}>
        <StatusBar translucent  backgroundColor="transparent" barStyle={'default'}/>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <HomeBanner/>
        <MovieCard title={"Top Rating"} data={topRatedMovieData}/>
        <MovieCard title={"Now playing"} data={nowPlayingMovieData}/>
        <MovieCard title={"Popular"} data={popularMovieData}/>
       </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000',
    },
    scrollView:{
        flex:1
    }
})