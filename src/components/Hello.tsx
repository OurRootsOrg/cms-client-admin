import React from 'react';

type Props = {
  compiler: string;
  framework: string;
};

// Standard function definition (preferred)
export default function Hello({ compiler, framework }: Props): JSX.Element {
  return (
    <h1>
      Hello from {compiler} and {framework}!
    </h1>
  );
}

// Arrow-function definition
export const Hello2: React.FC<Props> = ({ compiler, framework }) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);
// export default Hello; // Cannot 'export default const' so it must be exported separately
