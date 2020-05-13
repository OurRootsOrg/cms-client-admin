import React, { useState } from 'react';

type Props = {
  compiler: string;
  framework: string;
};

// Standard function definition (preferred)
export default function Hello({ compiler, framework }: Props): JSX.Element {
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setName(nameField);
    setNameField('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Hello, {name || 'World'}! Enjoy using {framework} with {compiler}.{' '}
      </h1>
      <label>
        Name:
        <input type="text" value={nameField} onChange={(e) => setNameField(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
}

// Arrow-function definition
export const Hello2: React.FC<Props> = ({ compiler, framework }) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);
// export default Hello; // Cannot 'export default const' so it must be exported separately
