import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Title from '.';

test('shows Title text on a page', () => {
  const testTitle = 'Test Title';
  const testSummary = 'Test Summary';
  render(<Title title={testTitle} summary={testSummary} />);

  expect(screen.getByText(testTitle)).toBeInTheDocument();
  expect(screen.getByText(testSummary)).toBeInTheDocument();
});
