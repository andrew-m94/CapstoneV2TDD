import React from 'react';
import LandingPage from './LandingPage';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('buttons render and show proper text', () => {
    render(<LandingPage />);

    expect(screen.getByRole('button', {name: /sign in/i})).toBeVisible()
    expect(screen.getByRole('button', {name: /sign in/i})).toHaveTextContent('sign in')

    expect(screen.getByRole('button', {name: /sign up/i})).toBeVisible()
    expect(screen.getByRole('button', {name: /sign up/i})).toHaveTextContent('sign up')
})