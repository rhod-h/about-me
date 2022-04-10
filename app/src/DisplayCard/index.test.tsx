import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TestHat from '../Resources/Hat.jpeg';

import DisplayCard from '.';

test('shows DisplayCard text on a page', () => {
  const testHeading = 'Test Heading';
  const testDescribe = 'Test Describe';
  const testLinkUrl = 'www.test.com';
  const testLinkLabel = 'Test Link';

  render(<DisplayCard
    heading={testHeading}
    describe={testDescribe}
    image={TestHat}
    url={testLinkUrl}
    linkLabel={testLinkLabel}
  />);

  expect(screen.getByText(testHeading)).toBeInTheDocument();
  expect(screen.getByText(testDescribe)).toBeInTheDocument();
  expect(screen.getByText(testLinkLabel)).toBeInTheDocument();
});

// TODO test image and link?
// create test for alt test
