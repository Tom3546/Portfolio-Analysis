import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import DashBoard from "./pages/DashBoard/DashBoard";
import Performance from "./pages/Performance";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";
import Dividends from "./pages/Dividends";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashBoard />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
      {
        path: "holdings",
        element: <Holdings />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "dividends",
        element: <Dividends />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
