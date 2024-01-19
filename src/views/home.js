import { ActivityIndicator, Dimensions, Image, StyleSheet } from "react-native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { Job } from "../component/job";
import API, { endpoints } from "../config/API";
import React from "react";
import axios from "axios";

const heightWindow = Dimensions.get("window").height;
export default HomeScreen=({route,navigation})=> {
  const [jobs,setJobs]=React.useState(null);
  const showInfo=()=>{
    navigation.navigate('HomeDrawer',{ screen: 'Thông tin cá nhân' });
  }
  const fetchData = async () => {
    // try {
    //   const res = await axios.get('https://127.0.0.1:8000/jobs/');
    //   console.log(res);
    // } catch (error) {
    //   console.error('API Request Error:', error);
    // }
  };
  
  React.useEffect(() => {
    fetchData();
  }, []);
  const showAllJob=()=>{

  }
    return (
        <SafeAreaView style={{flex:1}}>
          <View style={styles.home}>

            <View style={styles.header}>
                <View style={styles.formInf}>
                  <TouchableOpacity onPress={()=>showInfo()}>
                    <View style={styles.avatar}>
                        <Image style={styles.avatarImg} 
                        source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.content}>
                    <Text style={{fontSize:24}}>Chào bạn</Text>
                    <Text style={{opacity:0.8}}>Chúc bạn một ngày tốt lành</Text>
                  </View>
                </View>
            </View>

            <View style={styles.formSearch}>
                <Feather style={{paddingLeft:24}} name='search' color="#00b14f" size={30}/>
                <View style={styles.content}>
                    <Text style={{fontSize:20}}>Bạn muốn tìm việc?</Text>
                    <Text style={{opacity:0.8}}>Địa điểm-vị trí</Text>
                  </View>
            </View>

            <View style={styles.title}>
              <Text style={{fontWeight:'bold',fontSize:24}}>Kinh nghiem</Text>
              <TouchableOpacity onPress={()=>updateExp()}>
                  <Text style={{color:'#00b14f',fontSize:16}}> Xem tất cả</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.jobs}>
              <Job/>
              {jobs === null ? <Text>1</Text> : <>
                    {
                        jobs.map(j => (
                          <Text>{j.id}</Text>
                        ))
                    }
              </>}
            </View>
          </View>
        </SafeAreaView>
    );
  }
  const styles=StyleSheet.create({
    home:{
      alignItems:'center'
    },
    header:{
      width:'100%',
      height:heightWindow*0.2,
      backgroundColor:'lightblue',
      justifyContent:'center',
      alignItems:'center'
    },
    formInf:{
      width:'80%',
      backgroundColor:'#fff',
      borderRadius:25,
      padding:4,
      flexDirection:'row'
    },
    avatar:{
      width: 50,
      height: 50,
      borderRadius: 20,
      overflow: 'hidden',
      backgroundColor: 'lightgray',
    },
    avatarImg:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover'
    },
    content:{
      marginLeft:12
    },
    formSearch:{
      position:'absolute',
      zIndex:10,
      width:'90%',
      backgroundColor:'#fff',
      borderRadius:12,
      padding:4,
      flexDirection:'row',
      marginTop:heightWindow*0.17,
      height:heightWindow*0.06,
      alignItems:'center'
    },
    title:{
      width:'90%',
      flexDirection: 'row',
      justifyContent:'space-between',
      marginTop:heightWindow*0.04,
      alignItems:'center'
    },
    jobs:{
      width:'90%'
    },
  })