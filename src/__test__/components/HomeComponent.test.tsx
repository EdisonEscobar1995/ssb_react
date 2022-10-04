import { cleanup, render, screen } from '@testing-library/react';
import { Home } from '../../components';

afterEach(cleanup);

test('renders Santillana SSB text in component home', () => {
  render(<Home />);
  const textElement = screen.getByText(/Santillana SSB/i);
  expect(textElement).toBeInTheDocument();
});
