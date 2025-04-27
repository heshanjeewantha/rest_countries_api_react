import { render, screen } from '@testing-library/react';
import HomePage from '../Home';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');

test('fetches and displays countries', async () => {
  axios.get.mockResolvedValueOnce({
    data: [{ 
      name: { common: 'India' }, 
      region: 'Asia', 
      flags: { png: '' }, 
      cca3: 'IND',
      capital: ['New Delhi'],
      population: 1380004385
    }]
  });

  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
  
  const country = await screen.findByText(/India/i);
  expect(country).toBeInTheDocument();
});