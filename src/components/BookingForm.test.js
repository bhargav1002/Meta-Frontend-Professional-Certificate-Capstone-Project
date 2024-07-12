import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm component', () => {
  const mockSubmit = jest.fn();
  const mockDispatch = jest.fn();
  const availableTimes = { availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM'] };
  it('renders BookingForm correctly', () => {
    render(<BookingForm submitForm={mockSubmit} dispatch={mockDispatch} availableTimes={availableTimes} />);

    // Test Date input
    const dateInput = screen.getByLabelText('Choose Date:');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('min', new Date().toISOString().split('T')[0]);

    // Test Time select
    const timeSelect = screen.getByLabelText('Choose Time:');
    expect(timeSelect).toHaveAttribute('id', 'book-time');

    // Test Guests input
    const guestsInput = screen.getByLabelText('Number of Guests:');
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    // Test Occasion select
    const occasionSelect = screen.getByLabelText('Occasion:');
    expect(occasionSelect).toHaveAttribute('id', 'book-occasion');

    // Test Submit button
    const submitButton = screen.getByRole('button', { name: 'Make Your Reservation' });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  it('submits the form correctly when all fields are valid', () => {
    render(<BookingForm submitForm={mockSubmit} dispatch={mockDispatch} availableTimes={availableTimes} />);
    fireEvent.change(screen.getByLabelText('Choose Date:'), { target: { value: '2024-07-15' } });
    fireEvent.change(screen.getByLabelText('Choose Time:'), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText('Number of Guests:'), { target: { value: '5' } });
    fireEvent.change(screen.getByLabelText('Occasion:'), { target: { value: 'Birthday' } });
    fireEvent.click(screen.getByRole('button', { name: 'Make Your Reservation' }));
    expect(mockSubmit).toHaveBeenCalledTimes(1);
  });
});