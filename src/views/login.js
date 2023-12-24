import { Dimensions, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { useState } from "react"
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export default Login = ({ navigation }) => {
    const heightWindow = Dimensions.get("window").height;
    const [showPassword,setShowPassword]=useState(false);
    const showPass=()=>setShowPassword(!showPassword);
    const login = () => {
        navigation.navigate('HomeDrawer');
    }
    return (
/*<ImageBackground style={{width: '100%', height: '100%'}} source={require['../']}>*/
            <SafeAreaView>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                    {/* header */}
                    <View style={{ width: '100%', height: '5%', alignItems: 'center', marginTop: 0.25 * heightWindow }}> 
                        <Text style={{fontSize:24}}>Đăng nhập</Text>
                    </View>
                    {/* Email && Password */}
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 0.05 * heightWindow,marginBottom: 0.015 * heightWindow }}>
                        <View style={{backgroundColor:"#F0F0F0", borderRadius: 100,borderWidth:1,padding:12, width: '80%', height: '30px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Fontisto  style={{paddingLeft:24}}name='email' color="black" size={30}/>
                            <TextInput placeholder="Email" style={{ color: 'black', width: '75%', height: '100%'}}
                                autoCapitalize="none" />
                        </View>
                        <View style={{backgroundColor:"#F0F0F0",marginTop: 0.015 * heightWindow, borderRadius: 100,borderWidth:1,padding:12, width: '80%', height: '30px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Fontisto  style={{paddingLeft:24}}name='locked' color="black" size={30}/>
                            <TextInput placeholder="Nhập mật khẩu" style={{ color: 'black', width: '75%', height: '100%'}}
                                autoCapitalize="none"
                                secureTextEntry={showPassword ? false : true} />
                            <Entypo onPress={()=>showPass()}
                             style={{position:'absolute', right:8}} name={showPassword ? 'eye-with-line' : 'eye'} color="black" size={30}/>
                        </View>
                    </View>
                    {/* Quen mat khau */}
                    <View style={{width: '90%', alignItems: 'flex-end', }}> 
                            <Text style={{ fontSize:14,fontWeight:600,color: '#00b14f' }} >Quên mật khẩu?</Text>
                    </View>
                    {/* Dang nhap */}
                    <View style={{ height: '20%', width: '100%', marginTop: 0.005 * heightWindow, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={login}
                            style={{marginBottom:0.04 * heightWindow, borderRadius: 100, flexDirection: 'row',width: '80%', height: '30%', borderColor: 'white', borderWidth: 1, backgroundColor: '#00b14f', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{fontSize:16,fontWeight:700, color: '#fff' }}>DANG NHAP</Text>
                        </TouchableOpacity>
                        <View style={{width:'80%',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                            <View style={{flex: 1,height: 1,backgroundColor: '#333'}} />
                            <Text style={{marginHorizontal: 10,color: '#333',fontSize: 14,}}>Hoặc đăng nhập bằng</Text>
                            <View style={{flex: 1,height: 1,backgroundColor: '#333'}} />
                        </View>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row',alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{marginRight:20}}>
                            <View style={styles.circle}>
                            <MaterialIcons
                            name="facebook"
                            color="blue"
                            size={40}
                            />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={styles.circle}>
                            <Fontisto
                            name="google"
                            color="blue"
                            size={36}
                            />
                            </View>
                        </TouchableOpacity>
                    </View>                  
                    <View style={{marginTop:0.02 * heightWindow,marginBottom:0.02 * heightWindow, width: '100%',alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center'}}>
                            <Text style={{fontSize:14}}>
                                Bạn chưa có tài khoản?{'\u00A0'}
                            </Text>
                            <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                                <Text style={{fontSize:14,color:'#00b14f'}}>
                                    Đăng ký ngay
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{margin:0.02 * heightWindow,width:'60%',flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
                            <View style={{flex: 1,height: 1,backgroundColor: '#333'}} />
                        </View>
                        <Text style={{fontSize:14}}>
                            Trải nghiệm ngay
                        </Text>
                    </View>
                </View>
            </SafeAreaView>
     /*   </ImageBackground>*/

    )
}
const styles = StyleSheet.create({
    circle: {
      width: 50, // Đường kính của vùng tròn
      height: 50, // Đường kính của vùng tròn
      borderRadius: 25, // Bán kính của vùng tròn (1/2 của width và height)
      backgroundColor: '#fff', // Màu nền của vùng tròn
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:1,
      borderColor:'grey'
    },

  });