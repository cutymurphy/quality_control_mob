import React, { FC } from "react";
import Svg, { Defs, Path, RadialGradient, Stop } from "react-native-svg";
import { IRadialGradientBg } from "./types";
import { palette } from "../../../constants/palette";

const RadialGradientBg: FC<IRadialGradientBg> = ({
  screenWidth,
  screenHeight,
}) => {
  return (
    <Svg
      width={screenWidth}
      height={screenHeight}
      fill="none"
      style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }}
    >
      <Path fill="url(#a)" d="M0 0h412v917H0z" />
      <Defs>
        <RadialGradient
          id="a"
          cx={0}
          cy={0}
          r={1}
          gradientTransform="rotate(120.075 206 118.754)scale(945.843 424.959)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={palette.gradientLightBlueColor} />
          <Stop offset={1} stopColor={palette.gradientBlueColor} />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default RadialGradientBg;
