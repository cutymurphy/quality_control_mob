export const baseColors = {
  white: "rgb(255, 255, 255)",
  black: "rgb(0, 0, 0)",
  brightBlue: "rgb(0, 200, 255)",
  blue: "rgb(21, 116, 224)",
  blue2: "rgb(78, 128, 255)",
  blue3: "rgb(65, 110, 223)",
  darkBlue: "rgb(44, 76, 155)",
  red: "rgb(236, 79, 79)",
};

export const palette = {
  ...baseColors,

  // Welcome Screens Section
  welcomeScreenPointColor: "rgba(0, 229, 255, 0.8)",
  welcomeScreenContrastBtnColor: baseColors.brightBlue,
  welcomeScreenSubBtnColor: baseColors.blue,
  welcomeScreenSubTextColor: "rgba(255, 255, 255, 0.8)",
  welcomeScreenMainTextColor: baseColors.white,
  welcomeScreenScrollNonActivePointColor: "rgba(159, 159, 159, 0.7)",
  welcomeScreenImproveTextColor: "rgba(255, 255, 255, 0.7)",
  welcomeScreenGradientDarkColor: "rgba(5, 5, 5, 0.4)",
  welcomeScreenGradientLightColor: "rgba(107, 107, 107, 0)",

  // Main Screens Section
  bgColor: "rgb(4, 37, 85)",
  menuBgColor: baseColors.blue2,
  mainOnlineOfflineBgColor: baseColors.blue3,
  subBgColor: "rgb(55, 94, 191)",
  subFolderBgColor: baseColors.darkBlue,
  searchBarBgColor: "rgb(131, 166, 255)",
  splitBarColor: "rgb(79, 129, 255)",
  edgeBtnBgColor: "rgb(78, 149, 253)",
  mainTextColor: baseColors.white,
  gradientLightBlueColor: "rgb(77, 222, 255)",
  gradientBlueColor: "rgb(5, 61, 143)",

  // Main Screen Popups Section
  bgMainScreenPopupColor: baseColors.blue2,
  textFieldBgMainScreenPopupColor: "rgb(141, 174, 255)",
  activePointMainScreenPopupColor: baseColors.brightBlue,
  pointBgMainScreenPopupColor: baseColors.blue,
  selectFieldBgMainScreenPopupColor: baseColors.blue3,
  warningBtnBgMainScreenPopupColor: baseColors.red,
  textMainScreenPopupColor: baseColors.white,
  subTextMainScreenPopupColor: "rgba(255, 255, 255, 0.8)",

  // Sub-Screens Section
  anyBtnOnBgSubScreenColor: baseColors.blue3,
  warningBtnBgColor: baseColors.red,
  subScreenPopupBgColor: "rgb(48, 84, 174)",
  dateAndListSelectsPopupBgColor: "rgb(84, 129, 240)",
  folderOrHighlightedSectionBgColor: baseColors.darkBlue,
  textFieldInFolderBgColor: "rgb(98, 137, 237)",
};
