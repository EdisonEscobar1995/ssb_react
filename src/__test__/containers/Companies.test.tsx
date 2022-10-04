import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { CompaniesContainer } from '../../containers';
import { AuthProvider } from 'react-oauth2-pkce';
import { BrowserRouter as Router } from 'react-router-dom';
import { authService } from '../mocks/authService';

afterEach(cleanup);

test('get data companies', async () => {
  render(
    <AuthProvider authService={authService} >
      <Router>
        <CompaniesContainer />
      </Router>
    </AuthProvider>
  );
  const out = await waitFor(() => screen.findByText('MX/UNOI'));
  expect(out).toHaveTextContent("MX/UNOI");
});
