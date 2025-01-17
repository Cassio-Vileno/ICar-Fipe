import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Login from "../screen/Login";

const AppStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="LogIn"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AppStack.Navigator>
  );
}
