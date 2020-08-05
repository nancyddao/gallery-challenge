import React from 'react';
import ReactDOM from 'react-dom';
import GalleryContainer from '../components/GalleryContainer';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GalleryContainer />, div)
})