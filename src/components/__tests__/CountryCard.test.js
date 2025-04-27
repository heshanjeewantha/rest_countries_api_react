import { render, screen } from '@testing-library/react';
import CountryCard from '../CountryCard';
import { MemoryRouter } from 'react-router-dom';


const country = {
  name: { common: 'France' },
  capital: ['Paris'],
  region: 'Europe',
  population: 67000000,
  flags: { svg: 'https://flagcdn.com/fr.svg' }
};

test('renders correct country info', () => {
  render(
    <MemoryRouter>
      <CountryCard country={country} />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/France/)).toBeInTheDocument();
  expect(screen.getByText(/Paris/)).toBeInTheDocument();
  expect(screen.getByText(/Europe/)).toBeInTheDocument();
});
