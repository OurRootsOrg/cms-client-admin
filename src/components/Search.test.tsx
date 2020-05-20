import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import Search from './Search';

const mock = new MockAdapter(axios);

mock.onGet('https://hn.algolia.com/api/v1/search?query=react').reply(200, {
  hits: [
    { objectID: 'JS', url: 'link1', title: 'John Smith' },
    { objectID: 'FW', url: 'link2', title: 'Fred Williams' },
  ],
});
mock.onGet('https://hn.algolia.com/api/v1/search?query=foo').reply(200, {
  hits: [
    { objectID: 'FF', url: 'link10', title: 'Foo Farmer' },
    { objectID: 'BB', url: 'link20', title: 'Bar Barney' },
  ],
});

test('initially retrieves "react" documents', async () => {
  const { getByText } = render(<Search />);

  await waitFor(() => {
    expect(getByText(/john smith/i)).toBeInTheDocument();
  });
});

test('retrieves query documents', async () => {
  const { getByText, getByLabelText } = render(<Search />);
  const query = getByLabelText(/query/i);
  userEvent.clear(query);
  await userEvent.type(query, 'foo');
  const submitButton = getByText(/search/i);
  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(getByText(/foo farmer/i)).toBeInTheDocument();
  });
});
