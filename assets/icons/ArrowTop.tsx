import * as React from "react";
import ArrowLeft from "./ArrowLeft";
import { IIcon } from "./types";
import { FC } from "react";

const ArrowTop: FC<IIcon> = ({ color }) => (
  <ArrowLeft color={color} style={{ transform: [{ rotate: "90deg" }] }} />
);

export default ArrowTop;
