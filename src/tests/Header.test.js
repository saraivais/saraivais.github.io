import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../routes/Home';
import Projects from '../routes/Projects';
import Contact from '../routes/Contact';

describe('Verifies the correct rendering of the Header component', () => {
  it('verifies the presence of the expected links in the Header component', () => {
    const { debug } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    debug();

    const headerNavigationLinks = screen.getAllByRole('link');

    expect(headerNavigationLinks).toHaveLength(3);
    const expectedLinkTexts = ['Home', 'Projects', 'Contact Me'];

    expectedLinkTexts.forEach((text, index) => {
      expect(headerNavigationLinks[index]).toHaveTextContent(text);
    });
  });

  it('verifies if the header component is rendered correctly in the "Home" page', () => {
    const { debug } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    debug();

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  it('verifies if the header component is rendered correctly in the "Contact" page', () => {
    const { debug } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );
    debug();
    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
  });

  it('verifies if the header component is rendered correctly in the "Projects" page', () => {
    const { debug } = render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    debug();
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    expect(projectsLink).toBeInTheDocument();
  });
});
