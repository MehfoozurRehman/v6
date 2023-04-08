import "swiper/scss";
import "swiper/scss/autoplay";
import "./styles.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

const Home = lazy(() => import("./screens/Home"));
const Archive = lazy(() => import("./screens/Archive"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/archive",
        Component: Archive,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
