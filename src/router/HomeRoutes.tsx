import { Home } from "../components/pages/Home";
import { Settings } from "../components/pages/Settings";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

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
