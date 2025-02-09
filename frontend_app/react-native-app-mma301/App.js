import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { ProductDetails } from './src/screens/product_details/ProductDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='product_details'>
          <Stack.Screen name='product_details' component={ProductDetails}/>

          {/* Add more route in here */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

