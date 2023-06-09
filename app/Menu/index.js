
// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./List";
import Track from "./Track";
import Favorites from "./Favorites"
import Order from './Order'
import Coupon from './Coupon'
import Gifts from './Gifts'
import Share from './Share'
import ShareEarn from './ShareEarn'
import Help from './Help'
import Chat from './Chat'
import  Settings  from "./Settings";
import 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}   
    >
      <Stack.Navigator >
        <Stack.Screen name="List" component={List}  options={{
                  headerShown: false,
                }} />
        <Stack.Screen name="Track" component={Track} screenOptions={{ presentation: 'modal' }}/>
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Coupon" component={Coupon} />
        <Stack.Screen name="Gifts" component={Gifts} />
        <Stack.Screen name="Share and Get Free Delivery" component={Share} />
        <Stack.Screen name="Share and Earn" component={ShareEarn} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}