import { useEffect } from "react";
import { Animated, SafeAreaView } from "react-native";
import { Button, Text } from "../../components";
import { styles } from "./styles";

export const SplashScreen = () => {
  const containerAnimation = new Animated.Value(0);
  const titleAnimation = new Animated.Value(0);

  const mainTitleOpacity = new Animated.Value(1);
  const smallTitleOpacity = new Animated.Value(0);

  const buttonOpacity = new Animated.Value(0);

  const containerInterpolation = containerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#F6619C", "#61F696"],
  });
  const titleInterpolation = titleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#61F696", "#F6619C"],
  });

  useEffect(() => {
    Animated.timing(buttonOpacity, {
      toValue: 0,
      duration: 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(containerAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(titleAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start(() => {
      Animated.timing(containerAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(titleAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(mainTitleOpacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start();
        Animated.timing(smallTitleOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }).start(() => {
          Animated.timing(buttonOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
          }).start();
        });
      });
    });
  }, []);

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: containerInterpolation }]}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View
          style={[
            styles.container,
            { backgroundColor: containerInterpolation },
          ]}
        >
          <Animated.Text
            style={{
              position: "absolute",
              top: 0,
              color: titleInterpolation,
              opacity: smallTitleOpacity,
            }}
          >
            <Text style={styles.smallText}>spotted apple</Text>
          </Animated.Text>
          <Animated.Text
            style={{
              color: titleInterpolation,
              opacity: mainTitleOpacity,
              position: "absolute",
            }}
          >
            <Text style={styles.bigText}>spotted apple</Text>
          </Animated.Text>
          <Animated.View style={{ opacity: buttonOpacity }}>
            <Button title="Apple Music to Spotify" />
            <Button title="Spotify to Apple Music" />
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    </Animated.View>
  );
};
