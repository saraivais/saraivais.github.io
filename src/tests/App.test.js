import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import App from '../App';

describe('xablau', () => {
  it('testa home', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeScreenTitle = screen.getByText(/home screen/i);

    expect(homeScreenTitle).toBeInTheDocument();
  });

  it('testa contact', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    const contactScreenTitle = screen.getByText(/contact screen/i);

    expect(contactScreenTitle).toBeInTheDocument();
  });

  it('testa projects', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    const projectsScreenTitle = screen.getByText(/projects screen/i);

    expect(projectsScreenTitle).toBeInTheDocument();
  });
})