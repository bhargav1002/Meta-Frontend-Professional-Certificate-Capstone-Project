import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header Component', () => {
  test('renders Little Lemon heading', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const headingElement = screen.getByText(/Little Lemon/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Chicago subheading', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const subheadingElement = screen.getByText(/Chicago/i);
    expect(subheadingElement).toBeInTheDocument();
  });

  test('renders banner image', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const imgElement = screen.getByAltText('');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement.src).toContain('restauranfood.jpg');
  });
});