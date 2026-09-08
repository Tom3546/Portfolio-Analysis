import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import RootLayout from "./layouts/RootLayout";

import DashBoard from "./pages/DashBoard";
import Performance from "./pages/Performance";
import Holdings from "./pages/Holdings";
import Transactions from "./pages/Transactions";
import Dividends from "./pages/Dividends";

import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
