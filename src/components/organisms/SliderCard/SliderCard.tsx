import React, { FC } from "react";
import { ISliderCard } from "./types";
import { Dimensions, Text, View } from "react-native";
import { styles } from "./styles";
import Radio from "../../atoms/Radio";
import Button from "../../atoms/Button";

const SliderCard: FC<ISliderCard> = ({
  id,
  title,
  description,
  radioLabels,
  price,
}) => {
  const { width, height } = Dimensions.get("screen");
  const isSmallHeight = height < 700;

  return (
    <View style={{ width }} key={id}>
      <View style={[styles.card, { paddingVertical: isSmallHeight ? 16 : 20 }]}>
        <View style={styles.topView}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.line} />
          <Text
            style={[
              styles.description,
              {
                fontSize: isSmallHeight ? 18 : 20,
                lineHeight: isSmallHeight ? 22 : 28,
                marginBottom: isSmallHeight ? 20 : 28,
              },
            ]}
          >
            {description}
          </Text>
          <View style={[styles.radios, { gap: isSmallHeight ? 24 : 40 }]}>
            {radioLabels.map((label: string, index: number) => (
              <Radio label={label} isChecked key={index} />
            ))}
          </View>
        </View>
        <View style={styles.bottomView}>
          <Text style={styles.price}>{price} руб. в месяц</Text>
          <Button color="welcomeBrightBlue" style={styles.btn}>
            <Text style={styles.btnText}>Выбрать</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default SliderCard;
