import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIcon } from "./types";
import { palette } from "../../src/constants/palette";
import { Pressable } from "react-native";

const ArrowLeftIcon: FC<IIcon> = ({
  color = palette.white,
  style,
  onClick,
}) => (
  <Pressable
    onPress={onClick}
    style={[{ paddingHorizontal: 6, paddingVertical: 2 }, style]}
  >
    <Svg width={18} height={26} fill="none" viewBox="0 0 18 26">
      <Path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={3}
        d="M16 24 3.2 14.613a2 2 0 0 1 0 -3.226L16 2"
      />
    </Svg>
  </Pressable>
);
export default ArrowLeftIcon;
