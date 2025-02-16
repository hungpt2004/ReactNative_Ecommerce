import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "./src/screens/product_details/ProductDetails";
import Splash from "./src/screens/Banner/Splash";
import Walkthrough from "./src/screens/Banner/WalkThrough";
const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen name="product_details" component={ProductDetails} />

          {/* Add more route in here */}
          <Stack.Screen name="splash" component={Splash} options={{headerShown: false }}/>
          <Stack.Screen name="banner" component={Walkthrough} options={{headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
