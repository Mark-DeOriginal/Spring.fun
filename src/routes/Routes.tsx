import { Navigate, useRoutes } from "react-router-dom";
import Jettons from "../pages/Jettons";
import Jetton from "../pages/Jetton";
import NotFound from "../pages/NotFound";

export default function Routes() {
  const routes = useRoutes([
    { path: "/", element: <Jettons /> },
    { path: "/jettons", element: <Jettons /> },
    { path: "/j/:jettonContractAddress", element: <Jetton /> },
    { path: "/j", element: <Navigate to="/" /> },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
}
