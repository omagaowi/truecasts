import { Dimensions, FlatList, Image, Text, View } from "react-native";
import PodcastCard from "../PodcastCard";

const podcasts = [
  {
    title: "Waveform Podcast",
    image: require("../../assets/images/pod5.jpg"),
    key: "123s",
  },
  {
    title: "What Now? With Trevoh Noah",
    image: require("../../assets/images/pod4.jpeg"),
    key: "125s",
  },
  {
    title: "The Dairy of a CEO",
    image: require("../../assets/images/pod3.jpeg"),
    key: "124s",
  },
  {
    title: "The Colin and Samir Show",
    image: require("../../assets/images/pod2.jpeg"),
    key: "133s",
  },
  {
    title: "The Joe Rogan Experience",
    image: require("../../assets/images/pod1.png"),
    key: "143s",
  },
  {
    title: "The Daily",
    image: require("../../assets/images/pod7.jpg"),
    key: "133s",
  },
  {
    title: "The Brett Cooper Show",
    image: require("../../assets/images/pod6.jpeg"),
    key: "143s",
  },
];

const MyPodcasts = () => {
  return (
    <View className="w-[97%] h-full pb-[130px] overflow-x-hidden">
      <FlatList
        data={podcasts}
        renderItem={PodcastCard}
        numColumns={2}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default MyPodcasts;
