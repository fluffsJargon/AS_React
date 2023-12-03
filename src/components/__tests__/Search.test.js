import { fireEvent, render, screen } from "@testing-library/react";
import { Body }from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//mocking fetch function as jest doesnt have all broser poers like - fetch
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('should rsearch restaraunt list for burger text input', async ()=> {
    // state update inside fetch, wrap inside act function which comes from test-utils
    await act(async ()=> render(
        <BrowserRouter><Body /></BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId('res-card');
    expect(cardsBeforeSearch.length).toBe(20);
    
    const searchBtn = screen.getByRole('button', { name: 'Search'});
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, {target : { value: "burger"}});
    fireEvent.click(searchBtn);

    //assert-screen should load 4 cards
    const cardsAfterSearch = screen.getAllByTestId('res-card');
    expect(cardsAfterSearch.length).toBe(2);

})