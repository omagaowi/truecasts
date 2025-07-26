import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { ArrowDownToLine, Download } from "lucide-react-native";
import { useColorScheme } from "~/lib/useColorScheme";

const EpisodeCard = ({ episode }) => {
    const [width,  setWidth] = useState(0)
    const theme = useColorScheme()
  return (
    <View
      className="w-full flex-row dark:border-[#262626] border-[#ededed] h-[80px] border-b"
      onLayout={(e) => {
        setWidth(e.nativeEvent.layout.width)
      }}
    >
      <View style={{
        width: width - 100
      }} className=" h-full px-[13px] justify-center">
        <Text className="text-[#6b6a6a] font-semibold">
            { episode.date }
        </Text>
          <Text
            className="text-primaryT w-full my-[3px]  text-[16px] font-semibold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            { episode.title }
          </Text>
           <Text className="text-[#6b6a6a] text-[14px] font-semibold">
            { episode.duration }
        </Text>
      </View>
      <View className="w-[100px] flex-row items-center justify-center h-full">
        <TouchableOpacity className="w-[50px] h-fit items-center justify-center">
            <AntDesign name="playcircleo" size={26} color="#dc2558" />
        </TouchableOpacity>
        <TouchableOpacity className="w-[50px] h-fit items-center justify-center">
            <ArrowDownToLine className="w-[50px]  items-center justify-center"  size={23} color={theme.colorScheme == "dark" ? "#fff" : "#6b6a6a"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EpisodeCard  
