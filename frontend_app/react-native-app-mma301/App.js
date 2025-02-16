import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { ProductDetails } from './src/screens/product_details/ProductDetails';
import { Login } from './src/screens/login/Login';
import { Notification } from './src/screens/notification/Notification'; 
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='notification'>
          <Stack.Screen name='product_details' component={ProductDetails}/>

          {/* Add more route in here */}
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='notification' component={Notification}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

