import React from 'react';
import { render, screen } from './components/test';
import App from './App';

beforeEach(() => {
  render(<App />);
});
describe.skip('App', () => {
  it('should title to be in the page', () => {
    expect(screen.queryByTestId("title")).toBeInTheDocument();
  });
  it('should components to be in the page', () => {
    expect(screen.queryByTestId("input-component")).toBeInTheDocument();
    expect(screen.queryByTestId("list-component")).toBeInTheDocument();
  });
})
