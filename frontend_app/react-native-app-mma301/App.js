import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "./src/screens/product_details/ProductDetails";
import Splash from "./src/screens/Banner/Splash";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="cart">
          <Stack.Screen name="product_details" component={ProductDetails} />

          {/* Add more route in here */}
          <Stack.Screen name="cart" component={Splash} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
