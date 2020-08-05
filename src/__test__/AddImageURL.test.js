import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import AddImageURL from '../components/AddImageURL';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddImageURL />, div)
})

describe("input value", () => {
  it("updates on change", () => {
    const onChange = jest.fn();

    const { queryByPlaceholderText } = render(<AddImageURL onChange={onChange}/>);

    const imageURLInput = queryByPlaceholderText('Enter image URL');

    fireEvent.change(imageURLInput, {target: {value: "ilovetesting"}})

    expect(imageURLInput.value).toBe("ilovetesting")
  })
})

describe("add image button", () => {
  it("triggers the handleSubmit function", () => {
    const handleSubmit = jest.fn();

    const {queryByTestId} = render(<AddImageURL handleSubmit={handleSubmit} />)

    fireEvent.click(queryByTestId("add-img-button"));

    expect(handleSubmit).toHaveBeenCalled();
  })
})