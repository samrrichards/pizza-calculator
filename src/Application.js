import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import Result from './Result';

import calculatePizzasNeeded from './lib/calculate-pizzas-needed';

const initialState = {
  numberOfPeople: 10,
  slicesPerPerson: 2,
};

const PizzaCalculator = ({
  numberOfPeople,
  slicesPerPerson,
  numberOfPizzas,
  updateNumberOfPeople,
  updateSlicesPerPerson,
  reset
}) => (
  <div className="Application">
    <Title />
    <Input
      label="Number of Guests"
      type="number"
      min={0}
      value={numberOfPeople}
      onChange={updateNumberOfPeople}
    />
    <Input
      label="Slices Per Person"
      type="number"
      min={0}
      value={slicesPerPerson}
      onChange={updateSlicesPerPerson}
    />
    <Result amount={isNaN(numberOfPizzas) ? 0 : numberOfPizzas} />
    <button className="full-width" onClick={reset}>
      Reset
    </button>
  </div>
)

export default class Application extends Component {
  state = { ...initialState };

  updateNumberOfPeople = event => {
    const numberOfPeople = parseInt(event.target.value, 10);
    this.setState({ numberOfPeople });
  };

  updateSlicesPerPerson = event => {
    const slicesPerPerson = parseInt(event.target.value, 10);
    this.setState({ slicesPerPerson });
  };

  reset = event => {
    this.setState({ ...initialState });
  };

  render() {
    const { numberOfPeople, slicesPerPerson } = this.state;
    const numberOfPizzas = calculatePizzasNeeded(
      numberOfPeople,
      slicesPerPerson,
    );

    const { updateNumberOfPeople, updateSlicesPerPerson, reset } = this;

    return (
      <PizzaCalculator
        numberOfPeople={numberOfPeople}
        slicesPerPerson={slicesPerPerson}
        numberOfPizzas={numberOfPizzas}
        updateNumberOfPeople={updateNumberOfPeople}
        updateSlicesPerPerson={updateSlicesPerPerson}
        reset={reset}
      />
    );
  }
}
