import * as React from "react";
import ArrowLeftIcon from "./ArrowLeftIcon";
import { IIcon } from "./types";
import { FC } from "react";

const ArrowTopIcon: FC<IIcon> = ({ color, style, onClick }) => (
  <ArrowLeftIcon
    color={color}
    style={[{ transform: [{ rotate: "90deg" }] }, style]}
    onClick={onClick}
  />
);

export default ArrowTopIcon;
