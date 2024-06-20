import { FlatList, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { getUpcomingMovies } from '../../api/Network';

const ComingSoon = () => {
    const [comingSoonData, setcomingSoonData] = useState([])
        useEffect(() => {
         
            const handleUpcommingApi = async () => {
                const { data, status } = await getUpcomingMovies()
                if (status === 200) {
                    setcomingSoonData(data.results)
    
                } else {
                    Alert.alert(`Request failed with ${data}`);
                }
    
            }
    
            handleUpcommingApi();
          
        }, [])
        


    const NotificationCard = ({ imgUrl, title }) => {

        return <View style={{ flexDirection: 'row', gap: 20, alignItems: "center", padding: 10, backgroundColor: "#424242", }}>
            <Image source={{ uri: imgUrl }} style={{ width: responsiveWidth(40), height: responsiveHeight(10) }} />
            <View>
                <Text style={{ fontSize: 14, color: '#fff', fontWeight: '500' }}>New Arrival</Text>
                <Text style={{ fontSize: 14, color: 'rgba(255, 255, 255, 0.83)', fontWeight: '500' }}>{title}</Text>
                <Text style={{ fontSize: 11, color: 'rgba(255, 255, 255, 0.48)', fontWeight: '500' }}>Nov 6</Text>
            </View>
        </View>
    }

    const CommingSoonCard = ({item}) => {
        return (
            <View style={styles.commingSoonContainer}>
                <Image resizeMode='contain' source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} width={responsiveWidth(100)} height={responsiveHeight(28)} />
                <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 10 }}>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <MaterialCommunityIcons name='bell' size={25} color="#fff" />
                            <Text style={{ fontSize: 12, fontWeight: "400", color: "rgba(256,256,256,.83)" }}>Remind Me</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center" }}>
                            <MaterialCommunityIcons name='share-variant' size={25} color="#fff" />
                            <Text style={{ fontSize: 12, fontWeight: "400", color: "rgba(256,256,256,.83)" }}>Remind Me</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.mainContent}>
                    <Text style={{ fontSize: 12, color: "rgba(256,256,256,0.83)", fontWeight: '400' }}>Season 1 Coming December 14</Text>
                    <Text style={{ fontSize: responsiveFontSize(3), color: "rgb(256,256,256)", fontWeight: '700' }}>{item.title}</Text>
                    <Text style={{ fontSize: 12, color: "rgba(256,256,256,0.83)", fontWeight: '400', lineHeight: 14, letterSpacing: 1.2, }}>{item.overview}</Text>
                    <View style={styles.listItem}>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 5 }}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.itemText}>Steamy</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.itemText}>Soapy</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.itemText}>Slow Burn</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                            <Text style={styles.bullet}>{'\u2022'}</Text>
                            <Text style={styles.itemText}>Teen</Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.notificationContainer}>
                <MaterialIcons name="circle-notifications" size={20} color='#F50914' />
                <Text style={styles.notificationText}>Notifications</Text>
            </View>
            <View >
                <FlatList ListHeaderComponent={() => <View style={{ gap: 2 }}>
                    <NotificationCard imgUrl={'https://s3-alpha-sig.figma.com/img/03b0/46eb/a8804967540bd597e8fcd70ec9b04da5?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MiMc3kwsmlccvRdqH9Ma4jJVOgmW7qyDjTW5Jw3mDtA7KNEhbY1qqexiG66jr-s7R1BF8v2JTkuBqLOwcg2WuScm1SpSZ-fTspykSF0IK5fuO2PxQ5Su5ixTaytDRIAg-4h7N7tyhD-Eg77sWlcoctgbhYHk9yyqaIiCHd2qZ4PHCVTy1J4ihoOqjI2i6avclMojlDH4dUgaHhdOJvAIds7CyOihqm3IKFri92BpXQJX02kfMAfyKvZrdTHAEKnQIyyFTeGHiotnKc40LsefHwJnp1C5kk9pPONYyPIaznIzk~siD-bztboeUU4OfbjJ7bf7aK3i7OPUVLz0mtFoMw__'} title={'El Chapo'} />
                    <NotificationCard imgUrl={'https://s3-alpha-sig.figma.com/img/88bd/435a/4331ba3cefa9c55fbb980bcdece21edd?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YAjVp4Qyzh8sZLZuzH6cHYEqryQm2rQbmwrPzmdT4CwNXVj02sfUeXt5XLMNfCZ8mtmPzs9aRcVgIwThbKltKaVymMTAmwukJ2IC0frT0Ck9iYkz6jYRUjZLylDD84ylx4Y9fSbaoRhkzMtAmLaZcoC6jXLOhOYeGldAwINtW7eRMuILeo1t3rTu9BaaUvjnV~CgR3WHGcfh2zuU6wO0Y3DCIfWznCCNuHB1VGy9Mpy4C8Y66wahwXI76FfcLQe8Sf68DIXyZ38TXQzJqfg1Q13ty5-UVyZ~pI5vVwr94SUKL82FjU4o1QTAPRbDL5apSjC5sVhWpilS3bIoZ0c9BQ__'} title={'Peaky Blinders'} />

                </View>} data={comingSoonData} renderItem={CommingSoonCard} contentContainerStyle={{ paddingBottom: 80 }} />
            </View>
        </View>
    )
}

export default ComingSoon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000", gap: 5,paddingTop:StatusBar.currentHeight,
    },
    notificationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        padding: 20
    },
    notificationText: {
        fontSize: 17,
        fontWeight: '700',
        color: "#FFFFFF"
    },
    mainContent: {
        margin: 10,
        gap: 10

    },
    listItem: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10
    },
    bullet: {
        fontSize: 15,
        color: "rgba(256,256,256,0.63)"
    },
    itemText: {

        fontSize: 15,

        fontWeight: "600",
        color: "#fff",
    },

})