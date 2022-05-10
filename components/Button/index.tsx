import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Text } from "../Text";

type Props = TouchableOpacityProps & {
  title: string;
};

export const Button = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.5}
      style={[
        {
          borderRadius: 24,
          padding: 24,
          borderColor: "white",
          borderWidth: 8,
          margin: 8,
        },
        props.style,
      ]}
    >
      <Text color="white" style={{ fontSize: 20 }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
