import React, { useState } from 'react';
import { useHttpGet } from '../util/useHttp';

type Data = {
  hits: [{ objectID: string; url: string; title: string }];
};

export default function Search(): JSX.Element {
  const [query, setQuery] = useState('react');
  const [state, setUrl] = useHttpGet<Data>(`https://hn.algolia.com/api/v1/search?query=${query}`);

  return (
    <div>
      <label htmlFor="q">Query</label>
      <input type="text" id="q" value={query} onChange={(event) => setQuery(event.target.value)} />
      <button
        type="button"
        onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}
      >
        Search
      </button>

      {state.isError && <div>Something went wrong ... {JSON.stringify(state.error)}</div>}
      {state.isLoading && <div>Loading ...</div>}
      {!state.isError && !state.isLoading && state.data && (
        <ul>
          {state.data.hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
