import React, { FC } from "react";
import { IModal } from "./types";
import { default as NativeModal } from "react-native-modal";
import { screenHeight, screenWidth } from "../../../constants/screenSize";

const Modal: FC<IModal> = ({ children, isVisible, setIsVisible }) => (
  <NativeModal
    isVisible={isVisible}
    hasBackdrop={true}
    backdropColor="transparent"
    deviceHeight={screenHeight}
    deviceWidth={screenWidth}
    hideModalContentWhileAnimating
    onBackdropPress={() => setIsVisible(false)}
    onBackButtonPress={() => setIsVisible(false)}
  >
    {children}
  </NativeModal>
);

export default Modal;
