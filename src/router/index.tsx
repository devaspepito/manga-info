import { createBrowserRouter } from "react-router";
import {
  Home,
  Manga,
  LogIn,
  Register,
  Read,
  ToRead,
  Favorites,
  Uploaded,
  Blog,
} from "../pages";
import { Layout } from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "manga/:id",
        element: <Manga />,
      },
      {
        path: "read",
        element: <Read />,
      },
      {
        path: "to-read",
        element: <ToRead />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "uploaded",
        element: <Uploaded />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
