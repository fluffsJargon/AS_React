import { fireEvent, render, screen } from "@testing-library/react";
import { Header } from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with 0 Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("button", { name: "login" });
  //   expect(loginButton).not.toBeInTheDocument();
  const cartItems = screen.getByText("Cart (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("should render header component with dynamic cart value", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //use regex to match dynamic cart value
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change Login to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: 'Logout'});

    expect(logoutButton).toBeInTheDocument();
  });
  