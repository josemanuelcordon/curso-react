import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import About from "./pages/About";
import ProtectedRoute from "./components/utils/ProtectedRoute";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute isActive={isActive} redirectPath="/login" />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
