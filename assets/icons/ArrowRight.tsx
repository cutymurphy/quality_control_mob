import * as React from "react";
import ArrowLeft from "./ArrowLeft";
import { IIcon } from "./types";
import { FC } from "react";

const ArrowRight: FC<IIcon> = ({ color }) => (
  <ArrowLeft color={color} style={{ transform: [{ scaleX: -1 }] }} />
);

export default ArrowRight;
