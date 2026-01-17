import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BottomBar from "~/components/BottomBar";
import PlayingBar from "~/components/PlayingBar";
import MyPodcasts from "~/components/Podcasts/Screen";
import Search from "~/components/Search/Screen";
import { Button } from "~/components/ui/button";
import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { root_uri, useAuth } from "~/utils/stores/useAuth";
import runFetch from "~/utils/runFetch";
import { tryCatch } from "~/utils/tryCatch";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Screen() {
  const router = useRouter();
  const { setAuthToken, setTokenError } = useAuth();
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openBrowserAsync(
      "https://truecasts-web.vercel.app/auth/signin?origin=mobile",
    );
    // setResult(result);
  };

  const setToken = async (auth_token: string) => {
    const { data, error } = await tryCatch(
      AsyncStorage.setItem("authToken", auth_token),
    );
    if (error) {
      throw error;
    }
    const status = true;
    return status;
  };

  const { token } = useLocalSearchParams<{
    token?: string;
  }>();

  // const signInUser = () => {
  //   const url = `${root_uri}/auth/signin?code=${code}`;
  //   runFetch(url, undefined, {}, "get")
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Status:", error.response?.status);
  //       console.error("Response data:", error.response?.data);
  //       console.error("Headers:", error.response?.headers);
  //     });
  // };

  useEffect(() => {
    if (token) {
      setToken(token)
        .then((status) => {
          setAuthToken(token);
          router.navigate("/");
        })
        .catch((error) => {
          setTokenError(true);
        });
    }
  }, [token]);

  return (
    <View className="flex-1 flex flex-col items-center justify-center  relative bg-secondary/30">
      <Image
        source={require("../assets/images/icon.png")}
        className=" w-[130px] h-[130px] mt-[-100px] rounded-lg"
      />
      <Text
        className="font-semibold text-[#e3e3e3]"
        style={{ fontFamily: "Poppins_700Bold", fontSize: 28 }}
      >
        Welcome to Truecasts
      </Text>
      <Text
        className="font-semibold w-[95%] text-center text-[#ababab] mt-[10px]"
        style={{ fontFamily: "Poppins_400Regular", fontSize: 18 }}
      >
        Discover and listen to the world's podcasts. Subscribe to any podcast
        for free and download episodes for offline playback
      </Text>
      <TouchableOpacity
        onPress={() => {
          _handlePressButtonAsync();
        }}
        className="w-[90%] absolute bottom-[47px] rounded-md flex items-center justify-center h-[50px] bg-[#EE2957] "
      >
        <Text
          className="text-[#e3e3e3]"
          style={{ fontFamily: "Poppins_400Regular", fontSize: 19 }}
        >
          {token ? "Signing in..." : "Sign up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
