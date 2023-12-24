import { Dimensions } from "react-native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'

export default HomeScreen=({route,navigation})=> {
  const heightWindow = Dimensions.get("window").height;
  const menu=()=>{
    navigation.openDrawer();
  }
  //sjdshj
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
            {/* header */}
            <View style={{paddingLeft:10,marginTop: 0.035* heightWindow,height:'6%',alignItems:'flex-start'}}>
              <TouchableOpacity
              style={{height:'100%',aspectRatio:1.7,flexDirection:"row", alignItems:'center'}}>
                <Entypo onPress={()=>menu()}
                  name='menu' color="black" size={32}/>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Home Screen</Text>
            </View>
          </View>
        </SafeAreaView>
    );
  }