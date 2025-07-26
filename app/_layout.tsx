// import 'react-native-gesture-handler';

import "~/global.css";

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Appearance, Platform, View } from "react-native";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { PortalHost } from "@rn-primitives/portal";
import { ThemeToggle } from "~/components/ThemeToggle";
import { setAndroidNavigationBar } from "~/lib/android-navigation-bar";
import PodcastsBar from "~/components/Podcasts/Bar";
import SearchBar from "~/components/Search/Bar";
import { BottomSheetProvider } from "~/lib/BottomSheetProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useCallback, useRef, useMemo } from "react";
import NowPlaying from "~/components/NowPlaying";
import DetailsBar from "~/components/Podcasts/DetailsBar";

let handleClosePress
let handleSnapPress

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

const usePlatformSpecificSetup = Platform.select({
  web: useSetWebBackgroundClassName,
  android: useSetAndroidNavigationBar,
  default: noop,
});



export default function RootLayout() {
  usePlatformSpecificSetup();
  const { isDarkColorScheme } = useColorScheme();

  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["1%", "100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
   handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
   handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
        <StatusBar style={isDarkColorScheme ? "light" : "dark"} />
        <Stack
          screenOptions={{
            animation: "fade",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              header: ({ navigation, route, options }) => <PodcastsBar />,
            }}
          />
          <Stack.Screen
            name="search"
            options={{
              header: ({ navigation, route, options }) => <SearchBar />,
            }}
          />
           <Stack.Screen
            name="podcast/[id]"
            options={{
              header: ({ navigation, route, options }) => <DetailsBar />,
            }}
          />
        </Stack>
        <PortalHost />
      </ThemeProvider>
      <BottomSheet
      activeOffsetY={[-1, 1]} 
       failOffsetX={[-5, 5]}   
      enableContentPanningGesture={ true }
      detached={ true }
      overDragResistanceFactor={ 0.5 }
        ref={sheetRef}
        backgroundStyle={ { backgroundColor: isDarkColorScheme? '#000' : '#fff' }  }
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetView className="dark:bg-[#000]" style={styles.contentContainer}>
          <NowPlaying />
          {/* <Text>Awesome 🔥</Text> */}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === "web" && typeof window === "undefined"
    ? React.useEffect
    : React.useLayoutEffect;

function useSetWebBackgroundClassName() {
  useIsomorphicLayoutEffect(() => {
    // Adds the background color to the html element to prevent white background on overscroll.
    document.documentElement.classList.add("bg-background");
  }, []);
}

function useSetAndroidNavigationBar() {
  React.useLayoutEffect(() => {
    setAndroidNavigationBar(Appearance.getColorScheme() ?? "light");
  }, []);
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#000',
    flex: 1,
    overflow: 'hidden'
  },
});

function noop() {}

export { handleClosePress, handleSnapPress }
