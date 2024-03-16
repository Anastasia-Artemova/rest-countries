import { createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage";
import CardInfo from "./components/CardInfo";
import ErrorPage from "./components/ErrorPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: ":name", element: <CardInfo /> },
    ],
  },
]);

export default router;
