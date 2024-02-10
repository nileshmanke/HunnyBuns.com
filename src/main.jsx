
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import FirstProduct from "./pages/FirstProduct.jsx";
import SecondProduct from "./pages/SecondProduct.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import Vision from "./pages/Vision.jsx";
import Mission from "./pages/Mission.jsx";
import BirthdaySpecial from "./BirthdaySpecial.jsx";
import PastryCake from "./PastryCake.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//         children: [
//           {
//             path: "",
//             element: <Vision />,
//           },
//           {
//             path: "mission",
//             element: <Mission />,
//           },
//         ],
//       },
//       {
//         path: "product",
//         element: <Product />,
//       },
//       {
//         path: "product/first_product",
//         element: <FirstProduct />,
//       },
//       {
//         path: "product/second_product",
//         element: <SecondProduct />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* all below are children of App..will route in url with slash / ....child will render in Outlet */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />}>
      {/* all below are children of about..will route in url with /about..child will render in Outlet  */}
        <Route index element={<Vision />} />
        <Route path="mission" element={<Mission />} />
      </Route>
      <Route path="product" element={<Product />} />
      <Route path="product/first_product" element={<FirstProduct />} />
      <Route path="product/second_product" element={<SecondProduct />} />
      <Route path="product/birthdayspecial" element={<BirthdaySpecial />} />
      <Route path="product/pastrycake" element={<PastryCake />} />


      <Route path="contact" element={<Contact />} />
      {/* below is for error page..for any route that is not defined */}
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
