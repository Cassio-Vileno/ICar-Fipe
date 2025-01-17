import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screen/Home";

import Model from "../screen/Model";
import Profile from "../screen/Profile";
import VehicleDetails from "../screen/VehicleDetails";

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Model"
        component={Model}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="VehicleDetails"
        component={VehicleDetails}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
