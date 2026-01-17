import { Redirect } from "expo-router";
import * as React from "react";
import { View } from "react-native";
import BottomBar from "~/components/BottomBar";
import PlayingBar from "~/components/PlayingBar";
import MyPodcasts from "~/components/Podcasts/Screen";
import Search from "~/components/Search/Screen";
import { useAuth } from "~/utils/stores/useAuth";

export default function Screen() {
  const { authToken, tokenError } = useAuth();

  console.log(authToken);

  if (tokenError && !authToken) {
    return <Redirect href="/signup" />;
  }

  return (
    <View className="flex-1 justify-center relative items-center bg-secondary/30">
      {/* <MyPodcasts />      */}
      <Search />
      <PlayingBar />
      <BottomBar />
    </View>
  );
}
