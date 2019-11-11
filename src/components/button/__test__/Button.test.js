import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Button';




test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Button title = 'click'/>, div)
})