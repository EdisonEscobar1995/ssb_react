import { cleanup, render, screen } from '@testing-library/react';
import { HomeContainer } from '../../containers';

afterEach(cleanup);

test('renders Santillana SSB text', () => {
  render(<HomeContainer />);
  const textElement = screen.getByText(/Santillana SSB/i);
  expect(textElement).toBeInTheDocument();
});
