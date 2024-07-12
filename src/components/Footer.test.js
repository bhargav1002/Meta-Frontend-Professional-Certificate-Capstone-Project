import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders navigation links', () => {
    render(<Footer />);
    const navigationLinks = screen.getByText(/Navigation Links/i);
    expect(navigationLinks).toBeInTheDocument();

    const links = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];
    links.forEach(link => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders contact information', () => {
    render(<Footer />);
    const contactHeading = screen.getByText(/Contact/i);
    expect(contactHeading).toBeInTheDocument();

    const address = screen.getByText(/123 Town Street, Chicago/i);
    const phone = screen.getByText(/\+00 123 456 789/i);
    const email = screen.getByText(/little@lemon.com/i);

    expect(address).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    const socialMediaHeading = screen.getByText(/Social Media Links/i);
    expect(socialMediaHeading).toBeInTheDocument();

    const socialMediaLinks = ['Facebook', 'Instagram', 'Twitter'];
    socialMediaLinks.forEach(link => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders logo image', () => {
    render(<Footer />);
    const imgElement = screen.getByAltText('');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain('small_logo.png');
  });
});