import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Banner from './Banner';

test('should render banner component', () => {
  render(<Banner />);
  expect(true).toBeTruthy();
});
