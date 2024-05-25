import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import More from './pages/More';
import About from './pages/About';
import ErrorPage from "./pages/Error";
import Help from "./pages/Help";
import Root from "./pages/Root";
import './App.css';
import Login from "./pages/Login";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/More",
          element: <More />,
        },
        {
          path: "/Help",
          element: <Help />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return(
   <RouterProvider router={router}/>
  );
};

export default App;