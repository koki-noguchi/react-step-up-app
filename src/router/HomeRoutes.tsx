import { Home } from "../components/Home";
import { Settings } from "../components/Settings";
import { UserManagement } from "../components/UserManagement";
import { Page404 } from "../components/Page404";

export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/settings",
    exact: false,
    children: <Settings />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
