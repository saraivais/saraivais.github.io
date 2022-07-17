import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom'
import App from '../App';

describe('Verifies the correct rendering of routes on App', () => {
  it('verifies if the correct page, "Home" is rendered on "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );

    const homeScreenTitle = screen.getByText(/home screen/i);

    expect(homeScreenTitle).toBeInTheDocument();
  });

  it('verifies if the correct page, "Contact" is rendered on "/contact"', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );

    const contactScreenTitle = screen.getByText(/contact screen/i);

    expect(contactScreenTitle).toBeInTheDocument();
  });

  it('verifies if the correct page, "Projects" is rendered on "/projects"', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>,
    );

    const projectsScreenTitle = screen.getByText(/projects screen/i);

    expect(projectsScreenTitle).toBeInTheDocument();
  });
});
