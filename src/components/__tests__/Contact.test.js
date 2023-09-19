import ContactUs from "../ContactUs"
import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";


test("Should load contact us component" , () => {
    render(<ContactUs />)     // rendered to js-dom

    const heading = screen.getByRole("heading");  //
    //Assertion
    expect(heading).toBeInTheDocument()
})


test("Should load button inside contact us component" , () => {
    render(<ContactUs />)     // rendered to js-dom

    const button = screen.getByText("Submit");  //
    //Assertion
    expect(button).toBeInTheDocument()
})

test("Should load 2 input boxes on Contact us component" , () => {
    render(<ContactUs />)     // rendered to js-dom

    //Querrying
    const inputBoxes = screen.getAllByRole("textbox");  //if multiple items with same role use ALL
    console.log(inputBoxes[0]);   //react element is returned(jsx) --object--react fiber node-- virtual dom object
    //Assertion
    expect(inputBoxes.length).toBe(2);
    //expect(inputBoxes.length).not.toBe(3);
})