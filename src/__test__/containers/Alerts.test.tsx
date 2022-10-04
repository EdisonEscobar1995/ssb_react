import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { AlertsContainer } from '../../containers';
import { AuthProvider } from 'react-oauth2-pkce';
import { BrowserRouter as Router } from 'react-router-dom';
import { authService } from '../mocks/authService';

afterEach(cleanup);

const renderComponent = () => {
  return render(
    <AuthProvider authService={authService} >
      <Router>
        <AlertsContainer />
      </Router>
    </AuthProvider>
  );
};

test('get data alerts', async () => {
  renderComponent();
  const out = await waitFor(() => screen.findAllByTestId('span-backend'));
  expect(out[0]).toHaveTextContent('SSB');
});

test('get data alerts equal 2', async () => {
  renderComponent();
  const out = await waitFor(() => screen.findAllByTestId('span-backend'));
  expect(out).toHaveLength(2);
});
