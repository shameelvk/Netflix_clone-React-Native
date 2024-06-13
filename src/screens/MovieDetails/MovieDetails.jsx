import { Image, ScrollView, StatusBar, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Octicons from "react-native-vector-icons/Octicons";
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';


const MovieDetails = ({ route }) => {
    const [isPlayVideo, setIsPlayVideo] = useState(false)
    const { title,
        release_date,
        poster_path,
        overview,
        backdrop_path,
        vote_count } = route.params.item
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#080508'} />
            <ScrollView>
                {isPlayVideo?
                <Video  onFullscreenPlayerDidPresent={()=>{
                    Orientation.lockToLandscape();
                }} onFullscreenPlayerDidDismiss={()=>{
                    Orientation.lockToPortrait();
                }} repeat={false}
                resizeMode="contain" style={styles.videoPlayer}  controls source={{uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'}} />
                :<Image
                    style={styles.movieImage}
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
                    }}
                />}

                <View style={styles.contentContainer}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <MaterialCommunityIcons name="netflix" size={22} color="red" />
                        <Text style={{ fontSize: responsiveFontSize(1.5), color: 'white', letterSpacing: 5, fontFamily: "" }}>
                            SERIES
                        </Text>
                    </View>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                        {title}
                    </Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 16, color: 'white' ,fontFamily:""}}>
                            {release_date.split('-')[0]}
                        </Text>
                        <View
                            style={{ width: 2.5, height: 20, backgroundColor: 'white' }}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                            <MaterialIcons name="favorite" size={20} color="red" />
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 16,
                                    fontWeight: '700',
                                    lineHeight: 15,
                                }}>
                                {vote_count}%
                            </Text>

                            <MaterialIcons name="hd" size={25} color="white" />
                        </View>
                    </View>
                    

                </View>
                <View style={{padding: 10, gap: 10, marginTop: 5}}>
          <TouchableOpacity
            onPress={() => {
              setIsPlayVideo(true)
            }}
            activeOpacity={0.8}
            style={styles.playButton}>
            <Entypo name="controller-play" size={22} color="black" />
            <Text
              style={[
                styles.playTitles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'black',
                  fontWeight: '700',
                },
              ]}>
              Play
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Clicked Play Button');
            }}
            activeOpacity={0.8}
            style={[styles.playButton, {backgroundColor: '#2B292B'}]}>
            <Octicons
              style={{marginRight: 5}}
              name="download"
              size={22}
              color="white"
            />
            <Text
              style={[
                styles.titles,
                {
                  fontSize: responsiveFontSize(2),
                  color: 'white',
                  fontWeight: '700',
                },
              ]}>
              Download
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 16,
              color: 'white',
              marginVertical: 10,
              lineHeight: 25,
              textAlign: 'justify',
            }}>
            {overview}
          </Text>
        </View>
      </ScrollView>
        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080508',
        marginTop: StatusBar.currentHeight,
    },
    movieImage: {
        height: responsiveHeight(30),
        resizeMode: "contain"
    },
    contentContainer: {
        padding: 10,
        gap: 10
    },
    playTitles: {
        fontSize: responsiveFontSize(2.3),
        color: 'white',
        fontWeight: '500',
      },
      playButton: {
        backgroundColor: 'white',
        height: responsiveHeight(5.3),
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
      },
      videoPlayer:{
        height:responsiveHeight(30)
      }
})