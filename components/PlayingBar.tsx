import { Play, PlayIcon } from "lucide-react-native";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
// import { useBottomSheet } from "~/lib/BottomSheetProvider";
import { useColorScheme } from "~/lib/useColorScheme";
import { handleSnapPress, handleClosePress } from "~/app/_layout";

const PlayingBar = () => {
    const { width } = Dimensions.get('window')
    // const { openSheet } = useBottomSheet()
      const theme = useColorScheme()
        console.log(theme)
  return (
    <TouchableOpacity
      onPress={ () => {
        handleSnapPress(1)
        // openSheet()
      } } 
      className=" absolute w-[100%] flex-row px-[16px] items-center h-[60px]
        bg-[#fff]
        dark:bg-[black]
        native:bottom-[70px] dark:border-[#232323] border-[#e2e2e2] border-b"
    >
      <Image
        source={require("../assets/images/pod5.jpg")}
        className="w-[45px] h-[45px] rounded"
        resizeMode="cover" // or "contain"
      />
      <View className="h-[45px] justify-center px-[10px]" style={{
        width: width - 115
      }} >
        <Text className="text-primaryT text-[14px] font-semibold" numberOfLines={1}
          ellipsizeMode="tail">
            Samsung Tri-fold is Coming
        </Text>
         <Text className="dark:text-[#939393] text-[#808080] text-[11px] font-semibold" numberOfLines={1}
          ellipsizeMode="tail">
            The WaveForm Podcast
        </Text>
      </View>
      <View className="w-[45px] h-[45px] items-center justify-center">
        <Play color={ theme.colorScheme == 'dark'? '#fff' : '#000' }/>
      </View>
    </TouchableOpacity>
  );
};

export default PlayingBar;
