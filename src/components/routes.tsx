import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import GameDetailPage from "../pages/GameDetailPage";
import ErrorElement from "./ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "game/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
