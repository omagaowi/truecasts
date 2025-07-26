import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import BottomBar from '~/components/BottomBar';
import PlayingBar from '~/components/PlayingBar';
import MyPodcasts from '~/components/Podcasts/Screen';



export default function Screen() {
  return (
    <View className='flex-1 justify-center relative items-center bg-secondary/30'>
      <MyPodcasts />     
      <PlayingBar />
      <BottomBar />
    </View>
  );
}
