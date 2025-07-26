import { FlatList, View } from "react-native";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
  const episodes = [
    {
      title: "Unfiltered Episode 306: (Live)",
      date: "11 JULY 2025",
      duration: "1h 22m",
    },
    {
      title: "Unpacking Samsung Galaxy Unpacked 2025",
      date: "11 JULY 2025",
      duration: "1h 1m",
    },
    {
      title: "Nothing's First Flagship",
      date: "1 JULY 2025",
      duration: "0h 58m",
    },
    {
      title: "Tesla's Robotaxi Test Talks to the Streets!",
      date: "27 JUNE 2025",
      duration: "1h 28m",
    },
    {
      title: "YouTube Needs to Fix This!",
      date: "20 JUNE 2025",
      duration: "1h 17m",
    },
    {
      title: "The WWDC23 EP2 Episode!",
      date: "13 JUNE 2025",
      duration: null,
    },
    {
      title: "The Nintendo Switch 2 is Finally Here!",
      date: "6 JUNE 2025",
      duration: "1h 29m",
    },
    {
      title: "Is This Really the Chrome Killer?",
      date: "30 MAY 2025",
      duration: "1h 22m",
    },
    {
      title: "Our Studio Pitches Correct Tech Inventions!",
      date: "23 MAY 2025",
      duration: "1h 16m",
    },
    {
      title: "The Google I/O Episode!",
      date: "16 MAY 2025",
      duration: "1h 23m",
    },
    {
      title: "Who Cares About Thin Phones?",
      date: "9 MAY 2025",
      duration: "1h 29m",
    },
  ];

  return (
    <View className="w-full mt-[30px] h-fit pb-[130px]">
      <FlatList
        data={episodes}
        renderItem={({ item }) => <EpisodeCard episode={item} />}
        className="w-full h-fit"
        scrollEnabled={false}
        style={{ flexShrink: 0 }}
        contentContainerStyle={{ flexGrow: 0 }}
      />
      {/* <EpisodeCard /> */}
    </View>
  );
};

export default EpisodeList;
