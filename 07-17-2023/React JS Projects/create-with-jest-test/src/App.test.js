import { render, screen } from '@testing-library/react';
import App from './App';

test('Simple Testing ', () => {
  render(<App />);
  
  const linkElement = screen.getByText('Welcome to React JS Testing Application');
  expect(linkElement).toBeInTheDocument();
});
