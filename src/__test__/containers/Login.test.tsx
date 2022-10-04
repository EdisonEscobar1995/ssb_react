import { cleanup, render, screen } from '@testing-library/react';
import { AuthProvider } from 'react-oauth2-pkce';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginContainer } from '../../containers';
import { authService } from '../mocks/authService';

afterEach(cleanup);

test('renders Bienvenido(a) al SSB text', () => {
  render(
    <AuthProvider authService={authService} >
      <Router>
        <LoginContainer />
      </Router>
    </AuthProvider>
  );
  const textElement = screen.getByText('Bienvenido(a) al SSB');
  expect(textElement).toBeInTheDocument();
});
