import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import Restaurant from 'screens/RestaurantScreen';
import HomeScreen from 'screens/HomeScreen';
import CartScreen from 'screens/CartScreen';
import OrderPreparingScreen from 'screens/OrderPreparingScreen';
import DeliveryScreen from 'screens/DeliveryScreen';

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Restaurant" component={Restaurant}/>
        <Stack.Screen name="Cart" options={{presentation:'modal'}} component={CartScreen}/>
        <Stack.Screen name="OrderPreparing" options={{presentation:'fullScreenModal'}} component={OrderPreparingScreen}/>
        <Stack.Screen name="Delivery" options={{presentation:'fullScreenModal'}} component={DeliveryScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation