import React, { FC } from "react";
import { IInput } from "./types";
import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import { palette } from "../../../constants/palette";

const Input: FC<IInput> = ({
  value,
  label,
  customStyles,
  onChangeText,
  placeholder,
  keyboardType = "default",
  keyboardAppearance = "default",
  inputMode = "text",
  maxLength,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, customStyles]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={palette.brightBlue}
        keyboardType={keyboardType}
        keyboardAppearance={keyboardAppearance}
        inputMode={inputMode}
        maxLength={maxLength}
        cursorColor={palette.black}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
