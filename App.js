import React from 'react';
import { SafeAreaView, StyleSheet, ActivityIndicator, Image, Text } from 'react-native'; // Added Image here
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SearchScreen from './src/screens/SearchScreen';
import MenuScreen from './src/screens/MenuScreen';
import OpenScreenOne from './src/screens/OpenScreenOne';
import OpenScreenTwo from './src/screens/OpenScreenTwo';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {

    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.logo} />
        <ActivityIndicator size="large" color="#2D65DE" />
        <Text style={styles.text}>AfishaYkt</Text>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="OpenScreenOne" component={OpenScreenOne} />
        <Stack.Screen name="OpenScreenTwo" component={OpenScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100, // ширина логотипа
    height: 100, // высота логотипа
    marginBottom: 20, // отступ под логотипом
  },
  text: {
    color: '#2D65DE',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 0,
    fontFamily: 'Jua',
  },
  text1: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 0,
  },
});

export default App;