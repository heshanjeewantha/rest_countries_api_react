import { render, screen, fireEvent } from '@testing-library/react';
import Filters from '../Filter';

test('renders region dropdown and changes value', () => {
  const mockFilter = jest.fn();
  render(<Filters onRegionChange={mockFilter} onLanguageChange={() => {}} />);

  const regionSelect = screen.getByRole('combobox', { name: /filter by region/i });
  fireEvent.change(regionSelect, { target: { value: 'europe' } });

  expect(regionSelect.value).toBe('europe');
});
