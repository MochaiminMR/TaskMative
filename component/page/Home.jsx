import React from 'react'
import { Text, View } from "react-native";
import tw from "twrnc";

export const Home = () => {
  return (
    <View style={tw`px-2 android: pt-2 bg-white`}>
      <Text
        style={tw`text-md text-black dark:text-white 
            text-[18px] font-semibold`}>
        Hallo, Mochaimin
      </Text>
      <Text
        style={tw`text-md text-[#909090] dark:text-white 
            text-[12px] font-reguler`}>
        Cibaduyut Bandung
      </Text>
    </View>
  );
}
