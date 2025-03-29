import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import Header from "../../molecules/Header";

// eslint-disable-next-line react/prop-types
const Registration = ({ navigation }) => (
  <GradientPageTemplate>
    <View style={styles.wrapper}>
      <Header />
    </View>
  </GradientPageTemplate>
);

export default Registration;
