import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestarauntMenu from "./components/RestarauntMenu";
import UserContext, { Theme } from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
export const AppLayout = () => {
  const [userName, setUserName] = useState<string>('');
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const data = { name: "SP@root" };
    setUserName(data.name);
  }, []);

  const themeClassName =  theme === "light" ? 'app bg-white' :'app bg-black';

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName: setUserName, theme: theme, setThemeValue: setTheme}}>
      <div className={ themeClassName}>
        <Header /> 
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

//resId is dynamic
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restarauntMenu/:resId", element: <RestarauntMenu /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<RouterProvider router={appRouter} />);
