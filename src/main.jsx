import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import Photos from "./components/photos/photos";
import PhotoDetails from "./components/photos/PhotoDetails";
import ErrorPage from "./components/error-page";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
// import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "photos",
//         element: <Photos />,
//       },
//     ],
//   },{
//     path: "/about",
//     element: <h1>About</h1>,
//   },{
//     path: "/contact",
//     element: <h1>Contact</h1>,
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="articles" element={<h1>Articles</h1>} />
      <Route path="photos" element={<Photos/>}>
        <Route path=":id" element={<PhotoDetails/>} />
      </Route>
    </Route>
    <Route path="/about" element={<h1>About</h1>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

function Root() {
  return <Outlet />;
}

function Index() {
  return <h1>Index</h1>;
}
function Contact() {
  return <h1>Contact</h1>;
}
