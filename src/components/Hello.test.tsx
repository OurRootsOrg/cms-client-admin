import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Hello from './Hello';

test('renders Hello greeting and form', () => {
  const { getByText } = render(<Hello compiler="C" framework="F" />);
  const greeting = getByText(/Hello, World! Enjoy using F with C./i);

  expect(greeting).toBeInTheDocument();
});

test('renders user name', async () => {
  const { getByText, getByLabelText } = render(<Hello compiler="C" framework="F" />);
  const name = getByLabelText(/name/i);
  await userEvent.type(name, 'Foo');
  const submitButton = getByText(/submit/i);
  fireEvent.click(submitButton);

  expect(getByText(/hello, foo!/i)).toBeInTheDocument();
});
