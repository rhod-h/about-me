import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '.';

test('shows header text on a page', () => {
  const testMessage = 'Test Message';
  render(<Header label={testMessage} />);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
