import React from 'react';
import { render } from '@testing-library/react';
import CalculatorStructure from '../componenets/calculator';

test('test calculator components work correctly', () => {
  const { asFragment } = render(<CalculatorStructure />);
  expect(asFragment()).toMatchSnapshot();
});