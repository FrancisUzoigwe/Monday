import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../Components/Common/FirstLayout";
import Landing from "../Pages/Auth/Landing";
import Signuppage from "../Pages/Auth/SignupPage";
import Signinpage from "../Pages/Auth/SigninPage";
import Home from "../Pages/Screen/Home";
import SignLayout from "../Components/Common/SignLayout";
import Main from "../Components/Common/Main";

export const mainRoutes = createBrowserRouter([
  {
    element: <FirstLayout />,
    path: "/",
    children: [
      {
        index: true,
        element: <Landing />,
        path: "/",
      },
    ],
  },
  {
    element: <SignLayout />,
    path: "/auth",
    children: [
      {
        element: <Signinpage />,
        path: "/auth/signup",
      },
      {
        element: <Signuppage />,
        path: "/auth/signin",
      },
    ],
  },
  {
    element: <Main/>,
    path: "/home",
    children: [
        {
            index: true,
            element: <Home/>,
            path: "/home"
        }
    ]
  }
]);
