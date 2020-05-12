import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello: React.FC<HelloProps> = ({ compiler, framework }: HelloProps) => (
  <h1>
    Hello from {compiler} and {framework}!
  </h1>
);
