import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../routes/Home';
import Projects from '../routes/Projects';
import Contact from '../routes/Contact';
import App from '../App';

describe('Verifies the correct rendering of the Header component', () => {
  it('verifies the presence of the expected links in the Header component', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const headerNavigationLinks = screen.getAllByRole('link');

    expect(headerNavigationLinks).toHaveLength(3);
    const expectedLinkTexts = ['Home', 'Projects', 'Contact Me'];

    expectedLinkTexts.forEach((text, index) => {
      expect(headerNavigationLinks[index]).toHaveTextContent(text);
    });
  });

  it('verifies if the header component is rendered correctly in the "Home" page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('verifies if the header component is rendered correctly in the "Contact" page', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
  });

  it('verifies if the header component is rendered correctly in the "Projects" page', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
  });

  it('verifies if the "Projects" link redirects to "Projects" page', () => {
    const { debug } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    );
    debug();

    const projectsLink = screen.getByRole('link', { name: /projects/i });
    userEvent.click(projectsLink);

    const projectsPageTitle = screen.getByText(/projects screen/i);
    expect(projectsPageTitle).toBeInTheDocument();
  });

  it('verifies if the "Contact" link redirects to "Contact" page', () => {
    const { debug } = render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>,
    );
    debug();

    const contactMeLink = screen.getByRole('link', { name: /contact me/i });
    userEvent.click(contactMeLink);

    const contactPageTitle = screen.getByText(/contact screen/i);
    expect(contactPageTitle).toBeInTheDocument();
  });

  it('verifies if the "Contact" link redirects to "Contact" page', () => {
    const { debug } = render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>,
    );
    debug();

    const homeLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeLink);

    const homePageTitle = screen.getByText(/home screen/i);
    expect(homePageTitle).toBeInTheDocument();
  });
});
