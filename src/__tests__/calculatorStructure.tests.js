import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculatorStructure from '../componenets/calculator';

describe('CalculatorStructure component', () => {
  test('should render with default state', () => {
    render(<CalculatorStructure />);

    // The display section should show 0 when the component renders initially
    const displaySection = screen.getByTestId('display-section');
    expect(displaySection).toHaveTextContent('0');

    // The state should be { total: 0, next: null, operation: null }
    // expect(calculate).toHaveBeenCalledWith(
    //   { total: 0, next: null, operation: null },
    //   'AC'
    // );
  });

  // test('should update display section when buttons are clicked', () => {
  //   render(<CalculatorStructure />);

  //   // Click on the buttons '7', '+', '5', and '='
  //   fireEvent.click(screen.getByText('7'));
  //   fireEvent.click(screen.getByText('+'));
  //   fireEvent.click(screen.getByText('5'));
  //   fireEvent.click(screen.getByText('='));

  //   // The display section should show the result of the operation (7 + 5)
  //   const displaySection = screen.getByTestId('display-section');
  //   expect(displaySection).toHaveTextContent('12');

  //   // The state should be updated with the result
  //   expect(calculate).toHaveBeenCalledWith(
  //     { total: '7', next: '5', operation: '+' },
  //     '='
  //   );
  // });

  // Add more test cases to cover other scenarios and edge cases
});
