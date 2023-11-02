import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import {
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
  faArrowLeft,
  faCartShopping,
  faPizzaSlice,
  faBurger,
  faBacon,
  faDrumstickBite,
  faPlus,
  faCheck,
  faCookie,
  faCakeCandles,
  faBowlFood,
  faStroopwafel
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

import MenuScreen from './src/screens/menu/MenuScreen';
import BasketScreen from './src/screens/basket/BasketScreen';
import BookingScreen from './src/screens/booking/BookingScreen';
import CatalogScreen from './src/screens/catalog/CatalogScreen';
import CommunicationsScreen from './src/screens/communications/CommunicationsScreen';
import OrderScreen from './src/screens/order/OrderScreen';
import ReserveScreen from './src/screens/reserve/ReserveScreen';
import BroadcastsScreen from './src/screens/broadcasts/BroadcastsScreen';


library.add(
  faBars,
  faClose,
  faBell,
  faCheckSquare,
  faShoppingCart,
  faAngleLeft,
  faTrash,
  faArrowLeft,
  faCartShopping,
  faPizzaSlice,
  faBurger,
  faBacon,
  faDrumstickBite,
  faPlus,
  faCheck,
  faCookie,
  faCakeCandles,
  faBowlFood,
  faStroopwafel
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basket"
          component={BasketScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Communications"
          component={CommunicationsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reserve"
          component={ReserveScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broadcasts"
          component={BroadcastsScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;