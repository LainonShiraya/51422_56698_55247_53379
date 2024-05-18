import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import OptionPicker from './OptionPicker';

test('renders all options', () => {
    render(<OptionPicker />);
    const options = screen.getAllByRole('img'); 
    expect(options).toHaveLength(4); 
});

test('renders OptionPicker component with correct options', () => {
    render(<OptionPicker />);
    const newsOption = screen.getByText('Nowości');
    const ofertsOption = screen.getByText('Oferty');
    const disneyOption = screen.getByText('Disney');
    const starWarsOption = screen.getByText('Star Wars™');
  
    expect(newsOption).toBeInTheDocument();
    expect(ofertsOption).toBeInTheDocument();
    expect(disneyOption).toBeInTheDocument();
    expect(starWarsOption).toBeInTheDocument();
  });