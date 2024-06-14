import { FlatList, Image, LogBox, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import Fontisto from "react-native-vector-icons/Fontisto";
import { getPopularMovies, getSearchMovie } from '../../api/Network';
import Octicons from "react-native-vector-icons/Octicons";

const Search = () => {
    const [topSearchMovie, setTopSearchMovie] = useState([])

    useEffect(() => {


        handlePopularMovieApi();





    }, [])
    const handlePopularMovieApi = async () => {
        const { data, status } = await getPopularMovies()
        if (status === 200) {
            setTopSearchMovie(data.results)

        } else {
            Alert.alert(`Request failed with ${data}`);
        }

    }
    const handleSearchApi = async (searchtext) => {

        const { data, status } = await getSearchMovie(searchtext)
        if (status === 200) {
            if (data.results.length == 0) {

                await handlePopularMovieApi()
            } else {
                setTopSearchMovie(data.results)
            }



        } else {
            Alert.alert(`Request failed with ${data}`);
        }
    }


    const renderMovieCard = ({ item }) => {
        return <View style={styles.movieCardContainer}>
            <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} resizeMode='cover' style={{ height: responsiveHeight(15), width: responsiveWidth(20), }} />
            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-between", marginHorizontal: 5 }}>
                <Text style={{ fontSize: 15, fontWeight: "400", color: "#fff" }}>{item.title}</Text>
                <Octicons name="play" size={28} color="#fff" />
            </View>
        </View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Fontisto name='search' size={25} color="#C4C4C4" />
                <TextInput style={styles.searchBox} onChangeText={(text) => handleSearchApi(text)} placeholder='Search for a show, movie, genre, e.t.c.' />
                <Fontisto name='mic' size={24} color="#C4C4C4" />

            </View>
            <View style={styles.topSearchContainer}>
                <Text style={{ margin: 10, fontSize: 26, fontWeight: '700', color: "#fff" }}>Top Searches</Text>
                <FlatList contentContainerStyle={{ paddingBottom: 150 }} showsVerticalScrollIndicator={false} data={topSearchMovie} renderItem={renderMovieCard} />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    searchContainer: {
        backgroundColor: '#424242',
        height: responsiveHeight(6),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    searchBox: {
        width: responsiveScreenWidth(70),
        height: responsiveScreenHeight(100),
        fontSize: 14,
        fontWeight: '400'
    },
    topSearchContainer: {

    },
    movieCardContainer: {
        flexDirection: "row",
        backgroundColor: '#424242',
        height: responsiveHeight(15),
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 5


    }
})