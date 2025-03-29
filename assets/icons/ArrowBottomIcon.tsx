import * as React from "react";
import { IIcon } from "./types";
import { FC } from "react";
import ArrowLeftIcon from "./ArrowLeftIcon";

const ArrowBottomIcon: FC<IIcon> = ({ color }) => (
  <ArrowLeftIcon color={color} style={{ transform: [{ rotate: "-90deg" }] }} />
);

export default ArrowBottomIcon;
