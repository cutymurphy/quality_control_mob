import React, { FC } from "react";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";
import { IRadialGradientBg } from "./types";

const RadialGradientBg: FC<IRadialGradientBg> = ({
  screenWidth,
  screenHeight,
}) => {
  return (
    <Svg
      width={screenWidth}
      height={screenHeight}
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      <Defs>
        <RadialGradient
          id="gradient"
          cx="100%"
          cy="0%"
          r="115.05%"
          gradientUnits="userSpaceOnUse"
          gradientTransform="scale(1, 0.8926)"
        >
          <Stop offset="0%" stopColor="#4DEDFF" />
          <Stop offset="100%" stopColor="#053D8F" />
        </RadialGradient>
      </Defs>
      <Rect
        x="0"
        y="0"
        width={screenWidth}
        height={screenHeight}
        fill="url(#gradient)"
      />
    </Svg>
  );
};

export default RadialGradientBg;
