import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from './ui/button';
import { Download, HomeIcon, Search } from 'lucide-react-native';
import { useColorScheme } from '~/lib/useColorScheme';
import { useRouter } from 'expo-router';

export default function BottomBar() {
 
    const theme = useColorScheme()
    // console.log(theme)

    const router = useRouter()
    
  return (
    <View
      className="
        absolute w-[100%] flex-row justify-around items-center h-[70px]
        bg-[#fff]
        dark:bg-[black]
        native:bottom-0
        shadow-xl
      "
    >
     <TouchableOpacity className='flex items-center justify-center h-[100%] w-[33.3%]' onPress={ () => {
      router.navigate('/')
     } }>
        <HomeIcon size={20} color={ theme.colorScheme == 'dark' ? '#fff' : '#000' } className='dark:bg-[#fff]'/>
        <Text className='text-[13px] dark:text-[#a1a1a1] '>Home</Text>
     </TouchableOpacity>
      <TouchableOpacity className='flex items-center justify-center h-[100%] w-[33.3%]' onPress={ () => {
      router.navigate('/search')
     } }>
         <Search size={20} color={ theme.colorScheme == 'dark' ? '#fff' : '#000' }/>
        <Text className='text-[13px] dark:text-[#a1a1a1]'>Search</Text>
     </TouchableOpacity>
     <TouchableOpacity className='flex items-center justify-center h-[100%] w-[33.3%]' onPress={ () => {
      router.navigate('/downloads')
     } }>
          <Download size={18} color={ theme.colorScheme == 'dark' ? '#fff' : '#000' }/>
        <Text className='text-[14px] dark:text-[#a1a1a1]'>Downloads</Text>
     </TouchableOpacity>
    </View>
  );
}
