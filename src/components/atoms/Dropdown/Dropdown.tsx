import React, { FC, useState } from "react";
import { IDropdown, IDropdownData } from "./types";
import { Dropdown as CustomDropdown } from "react-native-element-dropdown";
import { styles } from "./styles";
import { ArrowBottomIcon } from "../../../../assets/icons";
import { Pressable, Text, View } from "react-native";

const Dropdown: FC<IDropdown> = ({
  data,
  onChange,
  value,
  label,
  wrapperStyle,
  dropdownStyle,
  selectedTextStyle,
  labelStyle,
  containerStyle,
  itemContainerStyle,
  rightIcon,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderItem = (item: IDropdownData) => {
    const isSelected = item.value === value;
    const isLast = item.value === data[data.length - 1].value;

    return (
      <Pressable
        style={[
          styles.item,
          isSelected && styles.selectedItem,
          isLast && styles.lastItem,
          itemContainerStyle,
        ]}
        onPress={() => onChange(item)}
      >
        <Text>{item.label}</Text>
      </Pressable>
    );
  };

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <CustomDropdown
        data={data}
        onChange={onChange}
        labelField="label"
        valueField="value"
        value={value}
        style={[styles.dropdown, isOpen && styles.notRounded, dropdownStyle]}
        selectedTextStyle={[styles.textStyle, selectedTextStyle]}
        containerStyle={[styles.container, containerStyle]}
        itemContainerStyle={styles.itemContainer}
        renderItem={renderItem}
        renderRightIcon={() =>
          rightIcon || (
            <ArrowBottomIcon
              style={isOpen && { transform: [{ scaleY: -1 }] }}
            />
          )
        }
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
    </View>
  );
};

export default Dropdown;
