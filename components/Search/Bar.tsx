import { Button, Dimensions, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SearchBar = () => {
  const insets = useSafeAreaInsets();

   const { width } = Dimensions.get("window");

   

  return (
    <View
      style={{ paddingTop: insets.top }}
      className={`w-full flex-row justify-center items-center h-[130px] bg-[#fff] dark:bg-[#000]`}
    >
      <TextInput
        placeholder="Search podcasts"
        style={{
            width: width - 100
        }}
        className={`bg-[#ebebeb] px-[10px] dark:bg-[#313131] placeholder:text-[#acacac] rounded-2xl h-[43px]`}
      />
        <Text className="text-brand ml-[10px]">Cancel</Text>
    </View>
  );
};

export default SearchBar;
