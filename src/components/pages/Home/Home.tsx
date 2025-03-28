import React from "react";
import { Pressable, Text, View } from "react-native";
import { ERoutes } from "../../../navigation";
import LogoIcon from "../../../../assets/icons/LogoIcon";
import SolarPanelIcon from "../../../../assets/icons/SolarPanelIcon";
import WaveIcon from "../../../../assets/icons/WaveIcon";
import { styles } from "./styles";
import HomeListPoint from "../../atoms/HomeListPoint/HomeListPoint";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import { screenWidth } from "../../../constants/screenSize";

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
        <Pressable
          style={styles.brightBlueBtn} // eslint-disable-next-line react/prop-types
          onPressOut={() => navigation.navigate(ERoutes.UI)}
        >
          <Text style={styles.brightBlueBtnText}>Зарегистрироваться</Text>
        </Pressable>
        <Pressable style={styles.blueBtn}>
          <Text style={styles.blueBtnText}>Уже есть аккаунт? Войти</Text>
        </Pressable>
      </View>
    </View>
  </GradientPageTemplate>
);

export default Home;
