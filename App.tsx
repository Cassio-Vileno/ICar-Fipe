import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ThemeContext } from "styled-components";
import { AuthProvider } from "./src/context/auth.context";
import { DialogProvider } from "./src/context/dialog.context";
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return <></>;
  }
  return (
    <>
      <ThemeContext.Provider value={ThemeContext}>
        <NavigationContainer>
          <DialogProvider>
            <AuthProvider>
              <SafeAreaProvider>
                <Routes />
              </SafeAreaProvider>
            </AuthProvider>
          </DialogProvider>
        </NavigationContainer>
      </ThemeContext.Provider>

      <StatusBar backgroundColor="#ffffff" translucent={false} />
    </>
  );
}
