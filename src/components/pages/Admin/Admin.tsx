import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import Header from "../../molecules/Header";
import { useTypedNavigation } from "../../../hooks/useTypedNavigation";
import PageTemplate from "../../templates/PageTemplate";
import { Slider } from "@miblanchard/react-native-slider";
import { palette } from "../../../constants/palette";
import { CrossIcon, TooltipIcon } from "../../../../assets/icons";
import { screenWidth } from "../../../constants/screenSize";
import Input from "../../atoms/Input";
import Dropdown from "../../atoms/Dropdown";
import Button from "../../atoms/Button";
import { roles } from "../../../constants/roles";
import Modal from "../../atoms/Modal";

const Admin = () => {
  const initialConfidence = 0.75;
  const { navigate } = useTypedNavigation();
  const [confidence, setConfidence] = useState<number>(initialConfidence);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("0");
  const [isMainModalOpened, setIsMainModalOpened] = useState<boolean>(false);

  const sliderWidth = screenWidth - 54 * 2;
  const tooltipWidth = 39;
  const thumbWidth = 15;
  const percentageOffset =
    confidence * (sliderWidth - thumbWidth) + thumbWidth / 2 - tooltipWidth / 2;

  return (
    <PageTemplate mustScroll={false}>
      <View style={styles.wrapper}>
        <Header
          headerText="Админ панель"
          underlined
          onClick={() => navigate("Profile")}
        />
        <View style={styles.adminWrapper}>
          <Text style={styles.subTitle}>Уверенность нейросети</Text>
          <View style={styles.sliderWrapper}>
            <Slider
              containerStyle={styles.slider}
              trackStyle={styles.sliderTrack}
              thumbStyle={styles.sliderThumb}
              value={initialConfidence}
              onValueChange={(val) => setConfidence(+val[0].toFixed(2))}
              minimumValue={0}
              maximumValue={1}
              step={0.01}
              trackClickable={true}
              minimumTrackTintColor={palette.textFieldInFolderBg}
              maximumTrackTintColor="#3154AC"
              thumbTintColor="#D9D9D9"
            />
            <View
              style={[
                styles.tooltipWrapper,
                { top: 28, left: percentageOffset },
              ]}
            >
              <TooltipIcon />
              <Text style={styles.tooltipText}>
                {+(confidence * 100).toFixed(0)}%
              </Text>
            </View>
          </View>
          <Text style={styles.subTitle}>Регистрация суб-аккаунта</Text>
          <Input
            label="Логин"
            value={login}
            onChangeText={(text) => setLogin(text)}
            inputMode="email"
            maxLength={254}
            customStyles={styles.confirmationInputWrapper}
            customInputStyles={styles.confirmationInput}
            customLabelStyles={styles.confirmationInputLabel}
          />
          <Input
            label="Пароль"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            customStyles={styles.confirmationInputWrapper}
            customInputStyles={styles.confirmationInput}
            customLabelStyles={styles.confirmationInputLabel}
          />
          <Dropdown
            data={roles.map((role) => ({
              value: role.id,
              label: role.name,
            }))}
            value={role}
            onChange={(item) => setRole(item.value)}
            label="Роль"
            wrapperStyle={styles.dropdownWrapper}
          />
          <Button color="blue" style={styles.btn}>
            <Text style={styles.btnText}>Создать суб-аккаунт</Text>
          </Button>
          <Button
            color="blue"
            style={styles.btn}
            onPress={() => setIsMainModalOpened(true)}
          >
            <Text style={styles.btnText}>Получить отчет</Text>
          </Button>
          <Button
            color="blue"
            style={styles.btn}
            onPress={() => navigate("AccountManagement")}
          >
            <Text style={styles.btnText}>Управлять аккаунтами</Text>
          </Button>
          <Text style={styles.statistics}>3/15 аккаунтов</Text>
        </View>
        <Modal
          isVisible={isMainModalOpened}
          setIsVisible={setIsMainModalOpened}
        >
          <View style={styles.mainModal}>
            <CrossIcon onClick={() => setIsMainModalOpened(false)} />
            <Text style={styles.btnText}>Управлять аккаунтами</Text>
          </View>
        </Modal>
      </View>
    </PageTemplate>
  );
};

export default Admin;
