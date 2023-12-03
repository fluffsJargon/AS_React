import { act } from "react-dom/test-utils";
import RestarauntMenu from "../RestarauntMenu";
import MOCK_DATA from "../mocks/mockRestMenuData.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { Header } from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should load Restaraunt menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestarauntMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Egg To Order (3)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("food-item");
  expect(foodItems.length).toBe(3);

  const cartItemsBeforeAdd = screen.getByText("Cart (0 items)");
  expect(cartItemsBeforeAdd).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);

  const cartItemsAfterAdd = screen.getByText("Cart (1 items)");
  expect(cartItemsAfterAdd).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
 
  const cartItemsAdded = screen.getAllByTestId("food-item");
  expect(cartItemsAdded.length).toBe(5);

  const clearCart =  screen.getByRole('button', {name: "Clear"});
  fireEvent.click(clearCart);
  const cartItems = screen.getAllByTestId("food-item");
  expect(cartItems.length).toBe(3);

});
