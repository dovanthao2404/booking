import { lazy } from "react";
import AdminTemplate from "template/AdminTemplate";
import UserTemplate from "template/UserTemplate";
import HomeTeplate from "../template/HomeTemplate";

const routeHome = [
  {
    Component: lazy(() => import("../pages/Home")),
    exact: true,
    path: "/",
  },
  {
    Component: lazy(() => import("../pages/Home")),
    exact: false,
    path: "/home",
  },
];

const routeAdmin = [
  {
    Component: lazy(() => import("../pages/Admin/Dashboard")),
    exact: true,
    path: "/admin",
  },
  {
    Component: lazy(() => import("../pages/Admin/Dashboard")),
    exact: false,
    path: "/admin/dashboard",
  },
  {
    Component: lazy(() => import("../pages/Admin/UserManagement")),
    exact: false,
    path: "/admin/user-management",
  },
  {
    Component: lazy(() => import("../pages/Admin/AddUser")),
    exact: false,
    path: "/admin/add-user",
  },
  {
    Component: lazy(() => import("../pages/Admin/EditUser")),
    exact: false,
    path: "/admin/edit-user/:id",
  },
  {
    Component: lazy(() => import("../pages/Admin/FilmManagement")),
    exact: false,
    path: "/admin/film-management",
  },
  {
    Component: lazy(() => import("../pages/Admin/EditFilm")),
    exact: false,
    path: "/admin/edit-film/:id",
  },
  {
    Component: lazy(() => import("../pages/Admin/AddFilm")),
    exact: false,
    path: "/admin/add-film",
  },
  {
    Component: lazy(() => import("../pages/Admin/CreateShowtimes")),
    exact: false,
    path: "/admin/create-showtimes/:id/",
  },
];

const routeUser = [
  {
    Component: lazy(() => import("../pages/Checkout")),
    exact: false,
    path: "/checkout/:id",
  },
  {
    Component: lazy(() => import("../pages/Login")),
    exact: false,
    path: "/login",
  },
  {
    Component: lazy(() => import("../pages/Register")),
    exact: false,
    path: "/register",
  },
];

export const renderRouteHome = () => {
  return routeHome.map((route, key) => {
    return (
      <HomeTeplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};

export const renderRouteAdmin = () => {
  return routeAdmin.map((route, key) => {
    return (
      <AdminTemplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};

export const renderRouteUser = () => {
  return routeUser.map((route, key) => {
    return (
      <UserTemplate
        key={key}
        exact={route.exact}
        Component={route.Component}
        path={route.path}
      />
    );
  });
};
