import React from "react";
import { Text, View } from "react-native";
import { ERoutes } from "../../../navigation";
import { styles } from "./styles";
import HomeListPoint from "../../atoms/HomeListPoint/HomeListPoint";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import { screenWidth } from "../../../constants/screenSize";
import { LogoIcon, SolarPanelIcon, WaveIcon } from "../../../../assets/icons";
import Button from "../../atoms/Button";

// eslint-disable-next-line react/prop-types
const Home = ({ navigation }) => (
  <GradientPageTemplate>
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Добро пожаловать в QWality</Text>
        <LogoIcon width={screenWidth * 0.25} />
      </View>
      <View style={styles.line} />
      <Text style={styles.welcomeText}>
        Многофункциональное приложение для отслеживания дефектов солнечных
        панелей
      </Text>
      <View style={styles.waveWrapper}>
        <View style={[styles.solarIcon, { marginBottom: 52 }]}>
          <SolarPanelIcon width={screenWidth * 0.33} />
        </View>
        <View style={styles.waveIcon}>
          <WaveIcon />
        </View>
      </View>
      <View style={styles.list}>
        <HomeListPoint text="Точность до 99%" />
        <HomeListPoint text="Отчетность в реальном времени" />
        <HomeListPoint text="Многоуровневый доступ по ролям" />
        <HomeListPoint text="Тонкая настройка нейросети" />
      </View>
      <View style={styles.btns}>
        <Text style={styles.improveText}>
          Улучшите свое производство с QWality
        </Text>
        <Button
          color="welcomeBrightBlue"
          style={styles.brightBlueBtn}
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate(ERoutes.REGISTRATION)}
        >
          <Text style={styles.brightBlueBtnText}>Зарегистрироваться</Text>
        </Button>
        <Button
          color="welcomeBlue"
          style={styles.blueBtn}
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate(ERoutes.LOGIN)}
        >
          <Text style={styles.blueBtnText}>Уже есть аккаунт? Войти</Text>
        </Button>
      </View>
    </View>
  </GradientPageTemplate>
);

export default Home;
