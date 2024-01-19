import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Job=()=>{
    const showJob=()=>{
        
    }
    return (
        <TouchableOpacity onPress={()=>{showJob()}} style={styles.job}>
            <View style={styles.logo}>
                <Image style={styles.logoImg} 
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}/>
            </View>
            <View style={styles.jobInformation}>
                <Text style={styles.nominee}>Vi tri</Text>
                <Text style={styles.companyName}>Ten cong ty</Text>
                <View style={styles.items}>
                    <Text style={styles.jobInformationItem}>dia chi</Text>
                    <Text style={styles.jobInformationItem}>Kinh nghiem</Text>
                </View>
                <View style={styles.salaryContainer}>
                    <Text style={styles.salary}>Luong</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    job:{
        padding:16,
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        borderWidth: 1,           
        borderColor: '#f4f4f4',    
        borderStyle: 'solid',
        shadowColor: '#212f3f',        
        shadowOffset: {width: 4, height: 4}, 
        shadowOpacity: 0.5,         
        shadowRadius: 5,  
        borderRadius: 8,        
        elevation: 20, 
        marginTop:8
    },
    logo:{
        width: 80,
        height: 80,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: 'lightgray',
    },
    logoImg:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    jobInformation:{
        marginLeft:8,
        width:'70%'
    },
    nominee:{
        color:'#212f3f',
        fontSize:16,
        fontWeight:'600',
        lineHeight:24
    }, 
    companyName:{
        color:'#424e5c',
        fontSize:14,
        fontWeight:'400',
        lineHeight:20,
        overflow:'hidden'
    },
    items:{
        marginTop: 8,
        flexDirection:'row'
    },
    jobInformationItem:{
        backgroundColor:'#e9eaec',
        color:'#212f3f',
        borderRadius:3,
        padding:4,
        marginRight:8,
        fontSize:16,
        fontWeight:'400'
    },
    salaryContainer: {
        alignSelf: 'flex-start',
        marginTop:8
    },
    salary:{
        backgroundColor:'#e5f7ed',
        fontSize:14,
        fontStyle:'normal',
        lineHeight:22,
        fontWeight:'600',
        color: '#00b14f',
        padding:4,
    }
})