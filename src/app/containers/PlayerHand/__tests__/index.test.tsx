import React from 'react';
import { render } from '@testing-library/react';

import PlayerHand from '..';

const renderComponent = () => render(<PlayerHand />);

describe('<PlayerHand />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
