import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from './Sidebar';

const mockToggleSidebar = jest.fn();
const mockChangeValue = jest.fn();

const renderSidebar = (isOpen: boolean, value: string) => {
  return render(
    <Sidebar
      isOpen={isOpen}
      toggleSidebar={mockToggleSidebar}
      value={value}
      changeValue={mockChangeValue}
    />
  );
};

describe('Sidebar', () => {
  it('renders logo and tabs when open', () => {
    renderSidebar(true, '1');

    // Sprawdź, czy logo jest renderowane
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();

    // Sprawdź, czy taby są renderowane
    expect(screen.getByText('BUY')).toBeInTheDocument();
    expect(screen.getByText('SELL')).toBeInTheDocument();
    expect(screen.getByText('PRE SALE')).toBeInTheDocument();
  });

  it('displays correct tab content based on value', () => {
    renderSidebar(true, '1');
    expect(screen.getByText('Sort by Age')).toBeInTheDocument();

    renderSidebar(true, '2');
    expect(screen.getByText('LEGO Sets')).toBeInTheDocument();

    renderSidebar(true, '3');
    expect(screen.getByText('LEGO New Releases:')).toBeInTheDocument();
  });

  it('calls changeValue on tab change', () => {
    renderSidebar(true, '1');
    fireEvent.click(screen.getByText('SELL'));
    expect(mockChangeValue).toHaveBeenCalledWith('2');
  });

  it('does not render when closed', () => {
    renderSidebar(false, '1');
    expect(screen.queryByRole('img')).toBeNull();
  });
});