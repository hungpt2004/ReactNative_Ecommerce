import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "./src/screens/product_details/ProductDetails";
import Splash from "./src/screens/Banner/Splash";
import Walkthrough from "./src/screens/Banner/WalkThrough";
import { Login } from "./src/screens/login/Login";
import { Notification } from "./src/screens/notification/Notification";
import HomeScreen from './src/screens/home_Screen/HomeScreen';
import CheckoutScreen from './src/screens/checkout/Checkout';
import SuccessScreen from "./src/screens/verify_success/SuccessScreen";
import ProfileScreen from "./src/screens/profile_screen/ProfileScreen";
import ForgotPasswordScreen from "./src/screens/forgot_password/ForgotPasswordScreen";
import * as Font from 'expo-font';
import { useFonts, Overpass_400Regular, Overpass_700Bold, Overpass_600SemiBold, Overpass_300Light } from '@expo-google-fonts/overpass';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import { Register } from "./src/screens/register/RegisterScreen";
import CartScreen from "./src/screens/shopping_cart/ShoppingCart";
import PaymentSuccessScreen from "./src/screens/payment/PaymentSuccess";
import PaymentFailScreen from "./src/screens/payment/PaymentFail";
import FavoriteProductsScreen from "./src/screens/favorite/FavoriteScreen";
import SearchScreen from "./src/screens/search/SearchScreen";

const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    OverpassRegular: Overpass_400Regular,
    OverpassBold: Overpass_700Bold,
    OverpassSemiBold: Overpass_600SemiBold,
    OverpassLight: Overpass_300Light
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='splash'>
          <Stack.Screen name='product_details' component={ProductDetails}  
          options={{
            headerTitleStyle: { fontFamily: 'OverpassBold' },
            headerBackButtonDisplayMode: 'default',
            headerTitle: 'Sugar',
            headerBackTitleVisible: false,
            headerBackTitle: ""
          }}/>

          {/* Add more route in here */}
          <Stack.Screen name="splash" component={Splash} options={{headerShown: false }}/>
          <Stack.Screen name="banner" component={Walkthrough} options={{headerShown: false }}/>
          <Stack.Screen name='home' component={HomeScreen} options={{headerShown: false }}/>
          <Stack.Screen name='profile' component={ProfileScreen}/>
          <Stack.Screen name='checkout' component={CheckoutScreen}/>
          {/* Add more route in here */}
          <Stack.Screen name='login' component={Login} options={{headerShown: false }}/>
          {/* Sửa header notification - LONG */}
          <Stack.Screen name='notification' component={Notification}/> 
          <Stack.Screen name="forgot_password" component={ForgotPasswordScreen} />
          <Stack.Screen name="register" component={Register} options={{headerShown: false}}/>
          <Stack.Screen name="cart" component={CartScreen} options={{headerShown: false}}/>
          <Stack.Screen name="success" component={PaymentSuccessScreen} options={{headerShown: false}}/>
          <Stack.Screen name="fail" component={PaymentFailScreen} options={{headerShown: false}}/>
          <Stack.Screen name="favorite" component={FavoriteProductsScreen} options={{headerTitle: 'Favorite List Product'}}/>
          <Stack.Screen name="search" component={SearchScreen} options={{headerTitle: 'Search'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
