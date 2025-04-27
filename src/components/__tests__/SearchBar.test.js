import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';

test('allows typing in search bar', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);
  
  const input = screen.getByPlaceholderText(/search countries by name/i);
  fireEvent.change(input, { target: { value: 'France' } });
  
  expect(input.value).toBe('France');
});
