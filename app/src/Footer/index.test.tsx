import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Footer from '.';

test('shows footer header is displayed on page', () => {
  const testMessage = 'Test Message';
  render(<Footer header={testMessage}/>);

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
