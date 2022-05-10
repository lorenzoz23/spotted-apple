import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SplashScreen } from "./screens/splash";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <SplashScreen />
    </View>
  );
};

export default App;
