import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Career from "./component/Career/Career";
import HelpLayout from "./component/Layout/HelpLayout";
import FAQs from "./component/HelpPage/FAQs";
import Contact from "./component/HelpPage/Contact";
import PageNotFound from "./component/PageNotFound/PageNotFound";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      //! whole layout (mother)
      <Route
        path="/"
        element={<MainLayout></MainLayout>}
        errorElement={<PageNotFound />}
      >
        //!sections: children
        <Route path="" element={<Home></Home>}>
          {" "}
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/help" element={<HelpLayout />}>
          <Route path="faq" element={<FAQs />} />
          <Route path="moreHelp" element={<Contact />} />
        </Route>
      </Route>
    )
  );

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <MainLayout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/career",
  //         element: <Career />,
  //       },
  //       {
  //         path: "/help",
  //         element: <HelpLayout />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/help",
  //     element: <HelpLayout />,
  //     children: [
  //       {
  //         path: "/faq",
  //         element: <FAQs />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
