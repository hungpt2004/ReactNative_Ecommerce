import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { ProductDetails } from './src/screens/product_details/ProductDetails';
import HomeScreen from './src/screens/home_Screen/HomeScreen';
import CheckoutScreen from './src/screens/checkout/Checkout';
import PaymentSuccessScreen from './src/screens/payment/Payment';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='payment'>
          <Stack.Screen name='product_details' component={ProductDetails}/>
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='checkout' component={CheckoutScreen}/>
          <Stack.Screen name='payment' component={PaymentSuccessScreen}/>
          {/* Add more route in here */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

