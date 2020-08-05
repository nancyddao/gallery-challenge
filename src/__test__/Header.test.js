import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import Header from '../components/Header';

it("renders without crashing", () => {
  const header = document.createElement("header");
  ReactDOM.render(<Header />, header);
})

it("renders the logo", () => {
  const { queryByAltText } = render(<Header />);
  expect(queryByAltText('Kespry Company Logo')).toBeTruthy();
})