import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import WelcomeSection from '../componenets/welcomeSection';

describe('testing navigationbar', () => {
  it('testing snapshots', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <WelcomeSection />
      </BrowserRouter>,
    ).toJSON; // Correctly call the render function with parentheses
    expect(tree).toMatchSnapshot();
  });
});
