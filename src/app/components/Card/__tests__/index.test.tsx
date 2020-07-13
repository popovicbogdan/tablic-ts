import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Card from '..';

describe('<Card  />', () => {
  const url = 'url';
  const onClick = jest.fn();
  const isSelected = false;

  beforeEach(() =>
    render(<Card url={url} onClick={onClick} isSelected={isSelected} />)
  );
  it('should exist', () => {
    expect(screen.getByTestId('card')).toBeTruthy();
  });

  it('should trigger onClick when clicked', async () => {
    screen.debug();
    await fireEvent.click(screen.getByTestId('card'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should contain img element', () => {
    expect(screen.getByTestId('image-card')).toHaveAttribute('src', url);
    expect(screen.getByTestId('image-card')).toHaveAttribute('alt', '');
  });
});
