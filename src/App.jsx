import Layout from "./components/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Err from "./components/Err";
import ResMenu from "./pages/menu/ResMenu";
import Body from "./components/body/Body";
import { lazy, Suspense } from "react";
import Cart from "./pages/cart/Cart";

const Instamart = lazy(() => import("./pages/Instamart/Instamart"));
function App() {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h4>INSTAMART IS LOADING</h4>}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resid",
        element: <ResMenu />,
      },
      {
        path : "/cart",
        element: <Cart/>
      }
    ],
  },
]);

export default App;
