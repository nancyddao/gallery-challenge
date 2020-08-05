import React from 'react';
import ReactDOM from 'react-dom';
import Thumbnails from '../components/Thumbnails';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Thumbnails />, div)
})
