import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { HomePage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <HomePage />
    </HelmetProvider>,
  );

describe('<HomePage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
