import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  expect(() => render(<App />)).not.toThrow();
});
