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

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,
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

      ],
    },
  ]);

  return(
   <RouterProvider router={router}/>
  );
};

export default App;