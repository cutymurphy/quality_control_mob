import React, { FC } from "react";
import { Text, View } from "react-native";
import { ArrowLeftIcon } from "../../../../assets/icons";
import { styles } from "./styles";
import { ERoutes } from "../../../navigation";

const Header: FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.header}>
    <ArrowLeftIcon onClick={() => navigation.navigate(ERoutes.HOME)} />
    <View style={styles.headerTextWrapper}>
      <Text style={styles.headerText}>Регистрация</Text>
    </View>
  </View>
);

export default Header;
