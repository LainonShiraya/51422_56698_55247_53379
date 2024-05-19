import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpperNavbar from './UpperNavbar';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from 'convex/react';

// Mock useAuth0
jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}));

// Mock useMutation
jest.mock('convex/react', () => ({
  useMutation: jest.fn(),
}));

describe('UpperNavbar Component', () => {
  const mockLoginWithRedirect = jest.fn();
  const mockLogout = jest.fn();
  const mockGetConvexUser = jest.fn();

  beforeEach(() => {
    // Ustawianie wartości zwracanych przez useAuth0 przed każdym testem
    (useAuth0 as unknown as jest.Mock).mockReturnValue({
      user: { name: 'John Doe' },
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
    });

    (useMutation as jest.Mock).mockReturnValue(() => ({
      mutate: mockGetConvexUser,
      withOptimisticUpdate: jest.fn(),
    }));
  });

  // Test 1: Renderowanie przycisku logowania, gdy użytkownik nie jest uwierzytelniony
  test('should render login button when not authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      user: null,
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
    });

    render(<UpperNavbar />);
    screen.debug(); // Dodane dla debugowania
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  // Test 2: Wywołanie loginWithRedirect po kliknięciu przycisku logowania
  test('should call loginWithRedirect when login button is clicked', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      user: null,
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: false,
    });

    render(<UpperNavbar />);
    fireEvent.click(screen.getByText('Login'));
    expect(mockLoginWithRedirect).toHaveBeenCalled();
  });

  // Test 3: Renderowanie danych użytkownika i przycisku wylogowania, gdy użytkownik jest uwierzytelniony
  test('should render user info and logout button when authenticated', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      user: { name: 'John Doe' },
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: true,
    });

    render(<UpperNavbar />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument();
  });

  // Test 4: Wywołanie logout po kliknięciu przycisku wylogowania
  test('should call logout when logout button is clicked', () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      user: { name: 'John Doe' },
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: true,
    });

    render(<UpperNavbar />);
    fireEvent.click(screen.getByText('John Doe'));
    expect(mockLogout).toHaveBeenCalled();
  });

  // Test 5: Wyświetlanie punktów użytkownika, gdy jest uwierzytelniony
  test('should display user points when authenticated', async () => {
    (useAuth0 as jest.Mock).mockReturnValue({
      user: { name: 'John Doe' },
      logout: mockLogout,
      loginWithRedirect: mockLoginWithRedirect,
      isAuthenticated: true,
    });

    const mockUserConvex = {
      legoPoints: 100,
      cart: [],
      favorites: [],
    };

    (useMutation as jest.Mock).mockReturnValue(async () => mockUserConvex);

    render(<UpperNavbar />);
    expect(await screen.findByText('100 pkt.')).toBeInTheDocument();
  });
});