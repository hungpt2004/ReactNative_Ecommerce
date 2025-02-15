import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { ProductDetails } from './src/screens/product_details/ProductDetails';
import { Login } from './src/screens/login/Login';
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
          <Stack.Screen name='product_details' component={ProductDetails}/>

          {/* Add more route in here */}
          <Stack.Screen name='login' component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

