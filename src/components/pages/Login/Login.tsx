import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import Header from "../../molecules/Header";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { ERoutes } from "../../../navigation";

// eslint-disable-next-line react/prop-types
const Login = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <GradientPageTemplate>
      <View style={styles.wrapper}>
        <Header
          headerText="Вход в аккаунт"
          // eslint-disable-next-line react/prop-types
          onClick={() => navigation.navigate(ERoutes.REGISTRATION)}
        />
        <View style={styles.fields}>
          <Input
            label="Почта / логин"
            value={email}
            onChangeText={(text) => setEmail(text)}
            inputMode="email"
            maxLength={254}
          />
          <Input
            label="Пароль"
            value={password}
            onChangeText={(text) => setPassword(text)}
            inputMode="text"
            secureTextEntry
          />
        </View>
        <Button color="welcomeBrightBlue" style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>Войти</Text>
        </Button>
        <Pressable
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate(ERoutes.HOME)}
        >
          <Text style={styles.textUnderlined}>Забыли пароль?</Text>
        </Pressable>
      </View>
    </GradientPageTemplate>
  );
};

export default Login;
