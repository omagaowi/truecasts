import { Info, List, Pause, RotateCcw, RotateCw } from "lucide-react-native";
import { useState } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "~/lib/useColorScheme";
import Slider from "@react-native-community/slider";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import AntDesign from '@expo/vector-icons/AntDesign';

const NowPlaying = () => {
  const { height } = Dimensions.get("window");
  const [width, setWidth] = useState();
  const theme = useColorScheme();

  const [displayValue, setDisplayValue] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const native = Gesture.Native();
  const sheetPan = Gesture.Pan(); // bottom sheet uses its own gestures

  const nativeGesture = Gesture.Native().disallowInterruption(true);

  return (
    <View
      style={{
        height: height,
      }}
      className="w-full relative flex-1 items-center dark:bg-[black] bg-[#fff]"
    >
      <View
        className="w-[85%] justify-center h-full"
        onLayout={(e) => {
          const { width, height } = e.nativeEvent.layout;
          // console.log(width, height)
          setWidth(width);
        }}
      >
        <Image
          source={require("../assets/images/pod5.jpg")}
          style={{ width: "100%", height: width }}
          resizeMode="cover"
        />
        <View className="mt-[30px] justify-center w-full">
          <Text
            className="text-primaryT  text-[21px] font-semibold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Samsung Tri-fold is Coming
          </Text>
          <Text
            className="text-brand text-[13px] font-semibold"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            The WaveForm Podcast
          </Text>
        </View>
        <View className="w-full flex-row mt-[50px] justify-center">
          <View className="w-[30%] items-center justify-center">
            <TouchableOpacity className="">
              <RotateCcw
                size={36}
                color={theme.colorScheme == "dark" ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
          <View className="w-[30%] items-center justify-center">
            <TouchableOpacity>
              <AntDesign
                name="pause"
                size={55}
                color={theme.colorScheme == "dark" ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
          <View className="w-[30%] items-center justify-center">
            <TouchableOpacity>
              <RotateCw
                size={36}
                color={theme.colorScheme == "dark" ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full flex-row mt-[50px] justify-center">
          <Slider
            style={{ width: "100%", height: 40 }}
            value={sliderValue}
            minimumValue={0}
            maximumValue={100}
            step={1}
            onValueChange={(value) => setDisplayValue(value)} // Smooth update
            onSlidingComplete={(value) => setSliderValue(value)}
            minimumTrackTintColor={
              theme.colorScheme == "dark" ? "#fff" : "#000"
            }
            thumbTintColor="#dc2558"
            maximumTrackTintColor={
              theme.colorScheme == "dark" ? "#fff" : "#000"
            }
          />
        </View>
        <View className="w-full absolute justify-between bottom-[30px] flex-row mt-[50px] px-[30px]">
          <TouchableOpacity>
             <Info color={theme.colorScheme == "dark" ? "#fff" : "#dc2558"}/>
          </TouchableOpacity>
          <TouchableOpacity>
             <List color={theme.colorScheme == "dark" ? "#fff" : "#dc2558"}/>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
};

export default NowPlaying;
