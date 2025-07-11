import Layout from "./components/Layout";
import About from "./pages/about/About";
import Body from "./components/Body";
import Contact from "./pages/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Err from "./components/Err";
import ResMenu from "./pages/menu/ResMenu";

function App() {
  return (
    <>
    
      <RouterProvider router={appRouter}>

      </RouterProvider>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Err />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/restaurant/:resid",
        element: <ResMenu/>
      }
    ],
  },
]);

export default App;
