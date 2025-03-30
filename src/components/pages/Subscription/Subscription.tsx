import React, { useRef, useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import GradientPageTemplate from "../../templates/GradientPageTemplate";
import Header from "../../molecules/Header";
import { styles } from "./styles";
import SliderCard from "../../organisms/SliderCard";
import { slidersInfo } from "./types";
import Button from "../../atoms/Button";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../../assets/icons";

const Subscription = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { width } = Dimensions.get("screen");
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
      setCurrentSlide(index);
    }
  };

  return (
    <GradientPageTemplate mustScroll={false}>
      <View style={styles.wrapper}>
        <Header headerText="Выберите уровень подписки" />
        <View style={styles.flatWrapper}>
          {currentSlide > 0 && (
            <ArrowLeftIcon
              style={styles.leftIcon}
              onClick={() => scrollToIndex(currentSlide - 1)}
            />
          )}
          <FlatList
            ref={flatListRef}
            data={slidersInfo}
            renderItem={({ item }) => (
              <SliderCard
                id={item.id}
                title={item.title}
                description={item.description}
                radioLabels={item.radioLabels}
                price={item.price}
              />
            )}
            keyExtractor={({ id }) => id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEnabled={false}
            initialScrollIndex={currentSlide}
            getItemLayout={(_, index) => ({
              length: width,
              offset: width * index,
              index,
            })}
          />
          {currentSlide < slidersInfo.length - 1 && (
            <ArrowRightIcon
              style={styles.rightIcon}
              onClick={() => scrollToIndex(currentSlide + 1)}
            />
          )}
        </View>
        <View style={styles.dots}>
          {slidersInfo.map(({ id }) => (
            <View
              key={id}
              style={id === currentSlide ? styles.activeDot : styles.dot}
            />
          ))}
        </View>
        <Button color="welcomeBlue" style={styles.cancelBtn}>
          <Text style={styles.cancelBtnText}>Отменить подписку</Text>
        </Button>
      </View>
    </GradientPageTemplate>
  );
};

export default Subscription;
