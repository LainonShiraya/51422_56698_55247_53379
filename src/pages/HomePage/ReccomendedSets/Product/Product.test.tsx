import { render, screen } from '@testing-library/react';
import Product from './Product';
import { useMutation, useQuery, useConvexAuth } from 'convex/react';
import { useAuth0 } from '@auth0/auth0-react';
import { Id } from '../../../../../convex/_generated/dataModel';

// Mockowanie funkcji useMutation, useQuery, useConvexAuth i useAuth0
jest.mock('convex/react', () => ({
  useMutation: jest.fn(),
  useQuery: jest.fn(),
  useConvexAuth: jest.fn(),
}));

jest.mock('@auth0/auth0-react', () => ({
  useAuth0: jest.fn(),
}));

const mockUseMutation = useMutation as jest.Mock;
const mockUseQuery = useQuery as jest.Mock;
const mockUseConvexAuth = useConvexAuth as jest.Mock;
const mockUseAuth0 = useAuth0 as jest.Mock;

// Funkcja pomocnicza do tworzenia mockowego Id
const createMockId = <T extends string>(tableName: T): Id<T> => {
  return { __tableName: tableName, toString: () => 'mock-id' } as Id<T>;
};

describe('Product component', () => {
  const mockProduct = {
    name: 'Test Product',
    price: 100,
    url: 'https://via.placeholder.com/150',
    _id: createMockId('products'),
    categories: [{ _id: createMockId('category'), _creationTime: 0, name: 'TestCategory', description: '', tag: 'TestCategory' }],
  };

  beforeEach(() => {
    // Mockowanie mutacji i query
    mockUseMutation.mockReturnValue(jest.fn());
    mockUseQuery.mockReturnValue(false);
    mockUseConvexAuth.mockReturnValue({ isAuthenticated: false, isLoading: false });
    mockUseAuth0.mockReturnValue({ loginWithRedirect: jest.fn() });
  });

  it('renders Product component', () => {
    render(<Product {...mockProduct} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/TestCategory/i)).toBeInTheDocument();
  });

  it('renders product image with correct URL and alt text', () => {
    render(<Product {...mockProduct} />);
    const image = screen.getByRole('img', { name: /Test Product/i });
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
    expect(image).toHaveAttribute('alt', 'Test Product');
  });
});