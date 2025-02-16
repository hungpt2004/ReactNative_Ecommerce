import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { ProductDetails } from './src/screens/product_details/ProductDetails';
import * as Font from 'expo-font';
import { useFonts, Overpass_400Regular, Overpass_700Bold, Overpass_600SemiBold, Overpass_300Light } from '@expo-google-fonts/overpass';
import { ActivityIndicator, View } from 'react-native';

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
        <Stack.Navigator initialRouteName='product_details'>
          <Stack.Screen name='product_details' component={ProductDetails}  
          options={{
            headerTitleStyle: { fontFamily: 'OverpassBold' },
            headerBackButtonDisplayMode: 'default',
            headerTitle: 'Sugar'
          }}/>

          {/* Add more route in here */}
          
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

