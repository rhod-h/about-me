import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import App from './app';

test('Test app does not blow up', () => {
  render(<App />);

  expect(screen.getByText('About Rhodri Hewitson')).toBeInTheDocument();
});

test('Test all boxes are the same size', () => {
  const { container } = render(<App />);

  const cards = container.getElementsByClassName('MuiGrid-root MuiGrid-item');

  for (let i = 0; i < cards.length; i += 1) {
    console.log(cards.item(i)?.clientWidth);
    console.log(cards.item(i)?.clientHeight);
  }
});
