import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DropDown from './DropDown';

describe('DropDown Component', () => {
  const mockSetSort = jest.fn();

  beforeEach(() => {
    mockSetSort.mockClear();
  });

  const sortCategories = [
    'Najnowsze',
    'Cena: Od najniższej do najwyższej',
    'Cena: Od najwyższej do najniższej',
    'Liczba elementów: od najwyższej',
    'Ocena',
    'Alfabetycznie',
  ];

  test('should render sort button with initial sort value', () => {
    render(<DropDown sort="Najnowsze" setSort={mockSetSort} />);
    expect(screen.getByText('Sortuj według: Najnowsze')).toBeInTheDocument();
  });

  test('should open menu when sort button is clicked', () => {
    render(<DropDown sort="Najnowsze" setSort={mockSetSort} />);
    fireEvent.click(screen.getByText('Sortuj według: Najnowsze'));
    sortCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test('should close menu when a menu item is clicked and set new sort value', async () => {
    render(<DropDown sort="Najnowsze" setSort={mockSetSort} />);
    fireEvent.click(screen.getByText('Sortuj według: Najnowsze'));
    fireEvent.click(screen.getByText('Ocena'));

    await waitFor(() => {
      expect(screen.queryByText('Ocena')).not.toBeInTheDocument();
    });

    expect(mockSetSort).toHaveBeenCalledWith('Ocena');
  });
});