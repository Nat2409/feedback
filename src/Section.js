import React from 'react';

export default function Section({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
}
