import ForgotPassword from "../components/pages/ForgotPassword";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Profile from "../components/pages/Profile";
import Registration from "../components/pages/Registration";
import Subscription from "../components/pages/Subscription";
import { IRoute } from "./types";

export const routes: IRoute[] = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    name: "Login",
    component: Login,
  },
  {
    name: "Profile",
    component: Profile,
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
