import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Companies } from '../../components';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(cleanup);

test('render No hay datos in companies', () => {
  render(
    <Router>
      <Companies
        dataSource={[]}
        loading={false}
        handleDelete={() => {}}
        dataCountries={[]}
        handleChangeFilter={() => {}}
        filterValue={''}
      />
    </Router>
  );
  // const elementNoData = await waitFor(() => screen.findByText('No Data'));
  const elementNoData = screen.getByText('No hay datos');
  expect(elementNoData).toBeInTheDocument();
});
