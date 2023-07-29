import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import WelcomeSection from '../componenets/welcomeSection';

describe('snap shot for this component', () => {
  it('tests snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <WelcomeSection />
      </BrowserRouter>
    ).JSON
    expect(tree).toMatchSnapshot();
  })

})