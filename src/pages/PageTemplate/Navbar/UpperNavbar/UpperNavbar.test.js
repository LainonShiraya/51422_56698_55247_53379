import React from 'react';
import { render } from '@testing-library/react';
import UpperNavbar from './UpperNavbar';

test('should render text correctly', () => {
  render(<UpperNavbar/>);
  expect(screen.getByText('Strefa Zabawy')).toBeInTheDocument();
});