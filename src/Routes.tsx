import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import { lazy } from "react";

const Home = lazy(() => import("./screens/Home"));
const Archive = lazy(() => import("./screens/Archive"));

export function Routes(): JSX.Element {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/archive",
              element: <Archive />,
            },
          ],
        },
      ])}
    />
  );
}
