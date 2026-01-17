import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface SpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  duration?: number;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 40,
  color = "#000",
  strokeWidth = 4,
  duration = 1000,
}) => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(withTiming(360, { duration }), -1);
  }, []);

  const animatedProps = useAnimatedProps(() => ({
    rotation: `${rotation.value}`,
  }));

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <AnimatedCircle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference * 0.7} ${circumference}`}
          strokeLinecap="round"
          fill="none"
          animatedProps={animatedProps}
          originX={size / 2}
          originY={size / 2}
        />
      </Svg>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
