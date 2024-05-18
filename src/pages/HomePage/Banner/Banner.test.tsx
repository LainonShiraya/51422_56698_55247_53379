import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';
import banner from '../../../assets/banner.jpeg';

test('should render banner component', () => {
  render(<Banner />);
  expect(true).toBeTruthy();
});

test('background image should be loaded correctly', () => {
  render(<Banner />);
  const container = screen.getByTestId('banner-container');
  expect(container).toHaveStyle(`backgroundImage: url(${banner})`);
});

test(' headings and descriptions render correctly', () => {
  render(<Banner />);
  expect(screen.getByText('Icons')).toBeInTheDocument();
  expect(screen.getByText('Zwiedzaj średniowieczne miasto')).toBeInTheDocument();
  expect(screen.getByText('Tchnij życie w wiekowe mury, budując zestaw LEGO® Icons Średniowieczny plac miejski.')).toBeInTheDocument();
});


test('should display buttons with correct labels', () => {
  render(<Banner />);
  expect(screen.getByText('Do sklepu')).toBeInTheDocument();
  expect(screen.getByText('Więcej')).toBeInTheDocument();
});