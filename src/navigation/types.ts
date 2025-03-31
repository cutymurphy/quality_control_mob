import { ComponentType } from "react";

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}

export type TypeRootStackParamList = {
  Home: undefined;
  Another: undefined;
  Registration: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Subscription: undefined;
  Profile: undefined;
  Admin: undefined;
  AccountManagement: undefined;
};
