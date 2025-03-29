import React from "react";
import { Text, View } from "react-native";
import { ArrowLeftIcon } from "../../../../assets/icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <ArrowLeftIcon onClick={() => navigation.goBack()} />
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>Регистрация</Text>
      </View>
    </View>
  );
};

export default Header;
