import React, { Component as C } from 'react';

const Deg = ({ base: b, exp: e }) => (
  <h1>
    <span>{b}</span>
    <sup>{e}</sup> = {b ** e}
  </h1>
);
export default ({ a }) => {
  return (
    <ul>
      {a.map((v, i) => (
        <li key={`li_${i}`}>
          <Deg base='2' exp={v} key={`deg_${i}`} />
        </li>
      ))}
    </ul>
  );
};
