import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { MemoryRouter } from 'react-router-dom'
import Header from '../components/Header';

describe('Verifies the correct rendering of the Header component', () => {
  it('verifies the presence of the expected links in the Header component', () => {
    const { debug } = render(<Header />);
    debug();

    const headerNavigationLinks = screen.getAllByRole('link');

    expect(headerNavigationLinks).toHaveLength(3);
    const expectedLinkTexts = ['Home', 'Projects', 'Contact Me'];

    expectedLinkTexts.forEach((text, index) => {
      expect(headerNavigationLinks[index]).toHaveTextContent(text);
    });
  });
});
