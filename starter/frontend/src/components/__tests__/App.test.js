import { render, screen } from '@testing-library/react';
import React from 'react';

import App from '../../App';

const movieHeading = process.env.FAIL_TEST ? 'WRONG_HEADING' : 'Movie List';

test('shows the configured movie list heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: movieHeading })).toBeInTheDocument();
});
