import React, { Component as C } from 'react';
import { render as r } from 'react-dom';
import Degs from './components/Degs';

class App extends C {
  constructor() {
    super();
    this.state = {
      exps: 5,
    };
  }
  click() {
    this.setState(({ exps }) => ({
      exps: +exps + 1,
    }));
  }
  change(v, max = 0) {
    max = +max;
    v = +v;
    if (v < 1) v = 1;
    if (max && v > max) v = max;
    this.setState(({ exps }) => ({
      exps: +v,
    }));
  }
  render() {
    return (
      <>
        <button onClick={this.click.bind(this)}>U↑▲P</button>
        <input
          type='number'
          value={this.state.exps}
          onChange={({ target: { max, value: v } }) => this.change(v, max)}
          max='500'
        />
        <Degs a={Array.from({ length: this.state.exps }, (v, i) => 10 + i)} />
      </>
    );
  }
}
r(<App />, document.querySelector('.cont'));
