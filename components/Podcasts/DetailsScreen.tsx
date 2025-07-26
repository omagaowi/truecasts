import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Info, Plus, PlusCircle } from "lucide-react-native";
import EpisodeList from "./List";

const PodDetails = () => {
  const [width, setWidth] = useState();
  return (
    <ScrollView className="w-full">
      <View className="w-full items-center">
        <View
          className="w-[60%] max-w-[236px] mt-[20px]"
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            console.log(width);
            setWidth(width);
          }}
        >
          <Image
            source={require("../../assets/images/pod5.jpg")}
            style={{ width: "100%", height: width }}
            resizeMode="cover"
            className="rounded-md"
          />
        </View>
      </View>
      <View className="mt-[30px] h-fit items-center justify-center w-full">
        <Text
          className="text-primaryT  text-[25px] font-semibold"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          The Waveform Podcast
        </Text>
        <Text
          className="text-brand text-[17px] font-semibold"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Vox Media Network
        </Text>
      </View>
      <View className="mt-[20px] flex-row items-center justify-center w-full">
        <TouchableOpacity className="dark:bg-[#1d1d1d] bg-[#f0dfe2] flex-row items-center justify-center rounded-md mx-[7px] w-[120px] h-[45px]">
          <Entypo name="controller-play" color={"#dc2558"} size={30} />
          <Text className="text-[#dc2558] ">Play</Text>
        </TouchableOpacity>
        <TouchableOpacity className="dark:bg-[#1d1d1d] bg-[#f0dfe2] flex-row items-center justify-center rounded-md mx-[7px] w-[70px] h-[45px]">
          <Plus color={"#dc2558"} size={25} />
        </TouchableOpacity>
      </View>
      <EpisodeList />
    </ScrollView>
  );
};

export default PodDetails;
