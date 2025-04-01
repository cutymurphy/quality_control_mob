import React, { useState } from "react";
import PageTemplate from "../../templates/PageTemplate";
import { Pressable, Text, View } from "react-native";
import Header from "../../molecules/Header";
import { useTypedNavigation } from "../../../hooks/useTypedNavigation";
import { styles } from "./styles";
import Accordion from "react-native-collapsible/Accordion";
import { ISection } from "./types";
import { ArrowTopIcon, ProfileIconSmall } from "../../../../assets/icons";
import Input from "../../atoms/Input";
import Dropdown from "../../atoms/Dropdown";
import { roles } from "../../../constants/roles";
import Button from "../../atoms/Button";

const AccountManagement = () => {
  const { navigate } = useTypedNavigation();
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const [sections, setSections] = useState<ISection[]>([
    {
      id: "0",
      title: "qwerty12345",
      login: "",
      password: "",
      role: "0",
    },
    {
      id: "1",
      title: "xdd",
      login: "",
      password: "",
      role: "1",
    },
    {
      id: "2",
      title: "admin",
      login: "",
      password: "",
      role: "2",
    },
  ]);

  const renderHeader = (section: ISection) => {
    const active =
      activeSections.length > 0 &&
      sections[activeSections[0]].title === section.title;

    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ProfileIconSmall />
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        <ArrowTopIcon style={active && { transform: [{ scaleY: -1 }] }} />
      </View>
    );
  };

  const renderContent = (section: ISection) => {
    return (
      <View style={styles.content}>
        <Input
          label="Логин"
          value={section.login}
          onChangeText={(val) =>
            setSections(
              sections.map((sec) =>
                sec.id === section.id ? { ...sec, login: val } : sec
              )
            )
          }
          customInputStyles={styles.input}
          customLabelStyles={styles.inputLabel}
        />
        <Input
          label="Пароль"
          value={section.password}
          onChangeText={(val) =>
            setSections(
              sections.map((sec) =>
                sec.id === section.id ? { ...sec, password: val } : sec
              )
            )
          }
          secureTextEntry
          customInputStyles={styles.input}
          customLabelStyles={styles.inputLabel}
        />
        <Dropdown
          data={roles.map((role) => ({
            value: role.id,
            label: role.name,
          }))}
          value={section.role}
          onChange={(item) =>
            setSections(
              sections.map((sec) =>
                sec.id === section.id ? { ...sec, role: item.value } : sec
              )
            )
          }
          label="Роль"
          wrapperStyle={styles.dropdownWrapper}
          labelStyle={styles.inputLabel}
          dropdownStyle={styles.dropdown}
          itemContainerStyleText={styles.itemContainerStyleText}
          itemContainerStyle={styles.itemContainerStyle}
        />
        <View style={styles.btns}>
          <Button color="management" style={styles.btn}>
            <Text style={styles.btnText}>Изменить</Text>
          </Button>
          <Button color="red" style={styles.btn}>
            <Text style={styles.btnText}>Удалить</Text>
          </Button>
        </View>
      </View>
    );
  };

  return (
    <PageTemplate>
      <View style={styles.wrapper}>
        <Header
          headerText="Управление аккаунтами"
          onClick={() => navigate("Admin")}
        />
        <View style={styles.managerWrapper}>
          <Accordion
            containerStyle={styles.accordion}
            sections={sections}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={setActiveSections}
            touchableComponent={Pressable}
          />
        </View>
      </View>
    </PageTemplate>
  );
};

export default AccountManagement;
