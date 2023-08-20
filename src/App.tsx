import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from './components/Error'
import ContactUs from "./components/ContactUs";
import RestarauntMenu from "./components/RestarauntMenu";

const Grocery = lazy (()=> import('./components/Grocery'))
export const AppLayout = () => {
  return (
    <div className="app">
      <Header /> 
      <Outlet />
    </div>
  );
};

//resId is dynamic
const appRouter = createBrowserRouter([ 
  { path: "/", element: <AppLayout />, errorElement: <Error />, children:[
    { path: "/", element: <Body />},
    { path: "/about", element: <About /> },
    { path: "/contact", element: <ContactUs /> },
    { path: "/restarauntMenu/:resId", element: <RestarauntMenu />},
    { path: "/grocery", element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>}

  ] },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
