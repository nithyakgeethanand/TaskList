import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from "./screens/Home";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
}

const App = () => {

  // importing fonts from assets
  const [load] = useFonts({
    interBold: require("./assets/fonts/Inter-Bold.ttf"),
    interLight: require("./assets/fonts/Inter-Light.ttf"),
    interMedium: require("./assets/fonts/Inter-Medium.ttf"),
    interRegular: require("./assets/fonts/Inter-Regular.ttf"),
    interSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if(!load) {
    return null;
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;