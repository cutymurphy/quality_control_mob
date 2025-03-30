import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TypeRootStackParamList } from "../navigation";

export const useTypedNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamList>>();
