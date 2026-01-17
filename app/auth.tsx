import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomBar from "~/components/BottomBar";
import PlayingBar from "~/components/PlayingBar";
import MyPodcasts from "~/components/Podcasts/Screen";
import Search from "~/components/Search/Screen";
import * as WebBrowser from "expo-web-browser";
import { Button } from "~/components/ui/button";
import { useState, useEffect } from "react";
// import { useEvent } from "react-native-reanimated";

export default function Screen() {
  const [result, setResult] = useState(null);

  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync("https://expo.dev");
    setResult(result);
  };

  useEffect(() => {
    _handlePressButtonAsync();
  }, []);

  return (
    <View className="flex-1 flex flex-col items-center justify-center  relative bg-secondary/30">
      {/*<Text>{result && JSON.stringify(result)}</Text>*/}
    </View>
  );
}
