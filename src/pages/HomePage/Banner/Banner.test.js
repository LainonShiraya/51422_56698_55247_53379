import React from 'react';
import { render } from '@testing-library/react';
import Banner from './Banner';

test('should render banner component', () => {
  render(<Banner />);
  const bannerContainer = screen.getByTestId('banner-container');
  expect(bannerContainer).toBeInTheDocument();
});