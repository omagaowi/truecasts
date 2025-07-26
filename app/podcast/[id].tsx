import * as React from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import BottomBar from "~/components/BottomBar";
import PlayingBar from "~/components/PlayingBar";
import MyPodcasts from "~/components/Podcasts/Screen";
import Search from "~/components/Search/Screen";
import { useState } from "react";
import PodDetails from "~/components/Podcasts/DetailsScreen";

export default function PodcastDetails() {
 

  return (
    <View className="flex-1 justify-center relative overflow-x-hidden overflow-y-scroll items-center bg-secondary/30">
        <PodDetails />
      <PlayingBar />
      <BottomBar />
    </View>
  );
}
