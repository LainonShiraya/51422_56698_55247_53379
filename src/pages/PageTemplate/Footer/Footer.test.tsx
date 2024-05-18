import { render, screen} from '@testing-library/react';
import Footer from './Footer';

test('renders Footer component', () => {
    render(<Footer />);
  
    // Testowanie wyświetlanych elementów
    expect(screen.getByText(/o nas/i)).toBeInTheDocument();
    expect(screen.getByText(/produkty/i)).toBeInTheDocument();
    expect(screen.getByText(/kim jesteśmy/i)).toBeInTheDocument();
});