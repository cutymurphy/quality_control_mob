import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import Header from "../../molecules/Header";
import Input from "../../atoms/Input";

// eslint-disable-next-line react/prop-types
const Registration = ({ navigation }) => {
  const [inn, setInn] = useState<number | null>();
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<number | null>();
  const [password, setPassword] = useState<string>("");

  return (
    <GradientPageTemplate>
      <View style={styles.wrapper}>
        <Header />
        <View style={styles.fields}>
          <Input
            label="ИНН"
            value={inn?.toString()}
            onChangeText={(text) => setInn(text === "" ? null : +text)}
            inputMode="numeric"
            maxLength={12}
          />
          <Input
            label="Почта"
            value={email}
            onChangeText={(text) => setEmail(text)}
            inputMode="email"
            maxLength={254}
          />
          <Input
            label="Код подтверждения"
            value={code?.toString()}
            onChangeText={(text) => setCode(text === "" ? null : +text)}
            inputMode="numeric"
            maxLength={6}
          />
          <Input
            label="Пароль"
            value={password}
            onChangeText={(text) => setPassword(text)}
            inputMode="text"
            secureTextEntry
          />
        </View>
      </View>
    </GradientPageTemplate>
  );
};

export default Registration;
