import React from 'react';
import ReactDOM from 'react-dom';
import ActiveImage from '../components/ActiveImage';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ActiveImage />, div)
})