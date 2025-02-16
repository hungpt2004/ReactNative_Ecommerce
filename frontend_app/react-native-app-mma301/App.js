import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ProductDetails } from "./src/screens/product_details/ProductDetails";
import SuccessScreen from "./src/screens/verify_success/SuccessScreen";
import ProfileScreen from "./src/screens/profile_screen/ProfileScreen";
import ForgotPasswordScreen from "./src/screens/forgot_password/ForgotPasswordScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="forgot_password">
        {/* <Stack.Screen name="product_details" component={ProductDetails} /> */}
        <Stack.Screen name="forgot_password" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
