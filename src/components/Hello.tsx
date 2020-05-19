import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  compiler: string;
  framework: string;
};

// Standard function definition (preferred)
export default function Hello({ compiler, framework }: Props): JSX.Element {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [nameField, setNameField] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setName(nameField);
    setNameField('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t('Hello', { name: name || 'World', framework, compiler })}</h1>
      <label htmlFor="name">{t('Name')}</label>
      <input
        id="name"
        type="text"
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

// Arrow-function definition. Unused, to show syntax only.
export const Hello2: React.FC<Props> = ({ compiler, framework }) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);
// export default Hello; // Cannot 'export default const' so it must be exported separately
