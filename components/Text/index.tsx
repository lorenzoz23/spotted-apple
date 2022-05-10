import React from "react";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Text as RNText, TextProps } from "react-native";

type Props = TextProps & {
  color?: string;
};

export const Text = (props: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RNText
      {...props}
      style={[
        props.style,
        { fontFamily: "Inter_900Black", color: props.color },
      ]}
    />
  );
};
