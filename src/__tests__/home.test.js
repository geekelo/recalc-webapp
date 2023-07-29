import React from 'react';
import { render } from '@testing-library/react';
import Home from '../componenets/home';

test('test calculator components work correctly', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});