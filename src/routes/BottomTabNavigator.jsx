import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import ComingSoon from '../screens/ComingSoon/ComingSoon';
import Download from '../screens/Download/Download';
import More from '../screens/More/More';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { StyleSheet, Text, View } from 'react-native';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarInactiveTintColor:"#8C8787",tabBarActiveTintColor:"#fff",tabBarStyle: {backgroundColor: "#121212",borderColor:"#121212"}}}>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({ focused, color })=><AntDesign name="home" size={24} color={color}/>}}/>
      <Tab.Screen name="Search"  component={Search} options={{tabBarIcon:({ focused, color })=><Feather name="search" size={24} color={color}/>,tabBarLabel:"Search",tabBarLabelStyle:styles.BarTabText}}/>
      <Tab.Screen name="Soon" component={ComingSoon} options={{tabBarIcon:({ focused, color })=>{
        return(<View style={{position:"relative"}}>
    <MaterialIcons name="video-collection" size={24} color={color}/>
    <View style={{justifyContent:"center",alignItems:"center",borderRadius:5,width:12,height:12,backgroundColor:"#E50914",position:'absolute',top:-2,right:-2}}><Text style={{fontSize:8,fontWeight:'500'}}>4</Text></View>
           
        </View>)
      },tabBarLabel:"Coming Soon",tabBarLabelStyle:styles.BarTabText}}/>
      
      <Tab.Screen name="Download" component={Download} options={{tabBarIcon:({ focused, color })=><MaterialCommunityIcons name="download" size={24} color={color}/>,tabBarLabel:"Downloads",tabBarLabelStyle:styles.BarTabText}}/>
      
      <Tab.Screen name="More" component={More} options={{tabBarIcon:({ focused, color })=><MaterialCommunityIcons name="menu" size={24} color={color}/>,tabBarLabel:"More",tabBarLabelStyle:styles.BarTabText}}/>
      
      
            
      </Tab.Navigator>
  );
}
const styles=StyleSheet.create({
    BarTabText:{
        fontSize:9,
        fontWeight:500,
        textAlign:"center",
        fontFamily:""
    }

})

export default BottomTabNavigator;