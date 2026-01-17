import { Redirect } from "expo-router";
import * as React from "react";
import { ActivityIndicator, View } from "react-native";
import BottomBar from "~/components/BottomBar";
import PlayingBar from "~/components/PlayingBar";
import MyPodcasts from "~/components/Podcasts/Screen";
import { useAuth } from "~/utils/stores/useAuth";

export default function Screen() {
  const { authToken, tokenError } = useAuth();

  if (tokenError && !authToken) {
    return <Redirect href="/signup" />;
  }

  return (
    <View className="flex-1 justify-center relative items-center bg-secondary/30">
      <MyPodcasts />
      {/*<ActivityIndicator size={90} color={"red"} />*/}
      <PlayingBar />
      <BottomBar />
    </View>
  );
}
