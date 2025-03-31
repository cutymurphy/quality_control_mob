import * as React from "react";
import { FC } from "react";
import Svg, { Path } from "react-native-svg";
import { IIcon } from "./types";
import { palette } from "../../src/constants/palette";

const ArrowBottomIcon: FC<IIcon> = ({
  color = palette.white,
  style,
  width = 13,
  height = 8,
  stroke = 1,
}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 13 8"
    style={style}
  >
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={stroke}
      d="M12 1 8.148 6.603a2 2 0 0 1-3.296 0L1 1"
    />
  </Svg>
);
export default ArrowBottomIcon;
