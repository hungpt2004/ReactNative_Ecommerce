import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "./src/screens/product_details/ProductDetails";
import Splash from "./src/screens/Banner/Splash";
import Walkthrough from "./src/screens/Banner/WalkThrough";
import { Login } from "./src/screens/login/Login";
import { Notification } from "./src/screens/notification/Notification";
import HomeScreen from './src/screens/home_Screen/HomeScreen';
import CheckoutScreen from './src/screens/checkout/Checkout';
import PaymentSuccessScreen from './src/screens/payment/Payment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">

          {/* Add more route in here */}
          <Stack.Screen name="splash" component={Splash} options={{headerShown: false }}/>
          <Stack.Screen name="banner" component={Walkthrough} options={{headerShown: false }}/>
          <Stack.Screen name='product_details' component={ProductDetails}/>
          <Stack.Screen name='home' component={HomeScreen} options={{headerShown: false }}/>
          <Stack.Screen name='checkout' component={CheckoutScreen}/>
          <Stack.Screen name='payment' component={PaymentSuccessScreen}/>
          {/* Add more route in here */}
          <Stack.Screen name='login' component={Login} options={{headerShown: false }}/>
          <Stack.Screen name='notification' component={Notification}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
