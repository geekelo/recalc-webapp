import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Quotes from '../componenets/quotes';

describe('testing navigationbar', () => {
  it('testing snapshots', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Quotes />
      </BrowserRouter>,
    ).toJSON; // Correctly call the render function with parentheses
    expect(tree).toMatchSnapshot();
  });
});
