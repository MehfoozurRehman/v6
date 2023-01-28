import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Home from "./screens/Home";
import ProjectDetails from "./screens/ProjectDetails";
import { lazy } from "react";

const Archive = lazy(() => import("./screens/Archive"));

export default function Routes() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/details/:id" element={<ProjectDetails />} />
          </Route>
        )
      )}
    />
  );
}
