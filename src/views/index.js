import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login';
import HomeScreen from './home';
import Register from './register';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDrawer=()=>{
    return(
    <Drawer.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
    )
}
export default RootComponent=({navigation})=>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}