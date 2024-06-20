import { Image, StatusBar, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const User = () => {
  const route = useNavigation();

  const handeNavigateHome = () => {
    route.navigate('BottomTab')

  }
  return (
    <View style={styles.container}>
       <StatusBar translucent  backgroundColor= 'transparent' barStyle={'default'}/>
       <View style={styles.topContainer}>
        <View style={{ width: 25, height: 25 }}></View>
        <Image source={require("../../assets/images/splashimg.png")} style={styles.topImg} />
        <TouchableOpacity>
          <MaterialCommunityIcons name="pencil" color="white" size={25} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.imgRow}>
          <TouchableOpacity onPress={() => handeNavigateHome()} style={{ alignItems: "center", gap: 5, width: 100, height: 122 }}>
            <Image source={require("../../assets/images/emenalo.png")} />
            <Text style={styles.imgText}>Emenalo</Text>

          </TouchableOpacity>
          <TouchableOpacity onPress={() => handeNavigateHome()} style={{ alignItems: "center", gap: 5, width: 100, height: 122 }}>
            <Image source={require("../../assets/images/oneyaka.png")} />
            <Text style={styles.imgText}>Onyeka</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.imgRow}>
          <TouchableOpacity onPress={() => handeNavigateHome()} style={{ alignItems: "center", gap: 5, width: 100, height: 122 }}>
            <Image source={require("../../assets/images/thelma.png")} />
            <Text style={styles.imgText}>Thelma</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handeNavigateHome()} style={{ alignItems: "center", gap: 5, width: 100, height: 122 }}>
            <Image source={require("../../assets/images/kids.png")} />
            <Text style={styles.imgText}>Kids</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.imgRow}>
          <TouchableOpacity style={{ alignItems: "center", width: 100, height: 122, marginTop: 20 }}>
            <MaterialIcons name='add-circle' size={55} color="#fff" />
            <Text style={styles.imgText}>Add Profile</Text>
          </TouchableOpacity>
          <View style={{ width: 100, height: 122 }}>
          </View>


        </View>


      </View>

    </View>
  )
}

export default User

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080508',
    paddingTop: StatusBar.currentHeight,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    // paddingTop:5,
    paddingHorizontal: 20

  },
  topImg: {

    height: responsiveHeight(6),
    width: responsiveWidth(35),
    resizeMode: "cover",

  },
  imgRow: {
    flexDirection: "row",
    gap: 20
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,

  },
  imgText: {
    fontWeight: "400",
    fontSize: responsiveFontSize(2),
    lineHeight: 27,
    color: "#FFF"
  }

})