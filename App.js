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
  faStroopwafel,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';

import BagPlace from './src/places/bag/BagPlace';
import BookPlace from './src/places/book/BookPlace';
import PlatePlace from './src/places/plate/PlatePlace';
import InformationPlace from './src/places/information/InformationPlace';
import EmptyBagPlace from './src/places/empty-bag/EmptyBagPlace';
import BroningPlace from './src/places/broning/BroningPlace';
import SportPlace from './src/places/sport/SportPlace';
import MainPlace from './src/places/main/MainPlace';
import HeartPlace from './src/places/heart/HeartPlace';
import EventPlace from './src/places/event/EventPlace';
import EventDetails from './src/places/eventDetails/EventDetails';

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
  faStroopwafel,
);

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Bag"
          component={BagPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Book"
          component={BookPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Plate"
          component={PlatePlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Information"
          component={InformationPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Empty"
          component={EmptyBagPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Broning"
          component={BroningPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Heart"
          component={HeartPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sport"
          component={SportPlace}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Event"
          component={EventPlace}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
