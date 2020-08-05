import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from '../App';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div)
})

it('renders greeting msg', () => {
  const { getByText } = render(<App />);
  const text = getByText(/Welcome to your Image Gallery/i);
  expect(text).toBeInTheDocument();
});