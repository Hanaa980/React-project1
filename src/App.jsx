import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Compoanats/Layout/Layout";
import Home from "./Compoanats/Home/Home";
import About from "./Compoanats/About/About";
import Portfolio from "./Compoanats/Portfolio/Portfolio";
import Contact from "./Compoanats/Contact/Contact";
import NotFound from "./Compoanats/NotFound/NotFound";

function App() {
  let x = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <NotFound /> },
      ]}
     
  ],
  {
        basename:"/React-project1"
  }

);

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;
