import React from 'react';
import { render, screen } from '@testing-library/react';
import ConfirmedBooking from './ConfirmedBooking';

describe('ConfirmedBooking Component', () => {
  test('renders confirmation message', () => {
    render(<ConfirmedBooking />);
    const confirmationMessage = screen.getByText(/Booking has been/i);
    expect(confirmationMessage).toBeInTheDocument();
  });

  test('renders confirmed span', () => {
    render(<ConfirmedBooking />);
    const confirmedSpan = screen.getByText(/confirmed!/i);
    expect(confirmedSpan).toBeInTheDocument();
  });
});
