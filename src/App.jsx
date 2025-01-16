import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout, LandingPage, Country, ErrorPage } from "./pages/index";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          index: true,
          element: <LandingPage />,
        },
        {
          path: "country/:id",
          element: <Country />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
