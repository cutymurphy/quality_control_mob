import ForgotPassword from "../components/pages/ForgotPassword";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";
import Subscription from "../components/pages/Subscription";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    name: "Home",
    component: Home,
  },
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Registration",
    component: Registration,
  },
  {
    name: "Subscription",
    component: Subscription,
  },
];
