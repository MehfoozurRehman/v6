import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { App } from "./App";
import Archive from "./screens/Archive";
import Home from "./screens/Home";

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
