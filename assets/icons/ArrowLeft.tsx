import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIcon } from "./types";
import { palette } from "../../src/constants/palette";

const ArrowLeft: FC<IIcon> = ({ color = palette.white, style }) => (
  <Svg width={18} height={26} fill="none" viewBox="0 0 18 26" style={style}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={3}
      d="M16 24 3.2 14.613a2 2 0 0 1 0 -3.226L16 2"
    />
  </Svg>
);
export default ArrowLeft;
