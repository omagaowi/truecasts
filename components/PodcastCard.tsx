import { useRouter } from "expo-router";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const PodcastCard = ({ item }) => {
  const { width } = Dimensions.get("window");
  const itemSize = width / 2;
  const router = useRouter();
  return (
    <TouchableOpacity
      className="w-1/2 mb-[40px] aspect-square p-2"
      onPress={() => {
        router.navigate("/podcast/123");
      }}
    >
      <Image
        source={item.image}
        className="w-full h-full rounded"
        resizeMode="cover" // or "contain"
      />
      <Text
        className="mt-2 font-semibold text-primaryT text-base"
        numberOfLines={1}
        style={{ fontFamily: "Poppins_700Bold" }}
        ellipsizeMode="tail"
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default PodcastCard;
