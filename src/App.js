import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Form from './Form';
import Pizza from './Pizza'

const App = () => {

  const initialFormValues = {
    name: '',
    size: '',
    toppings: {
      pepperoni: false,
      pineapple: false,
      bacon: false,
      mushroom: false,
      onion: false,
    },
    instructions: '',
  }

  const initialPizzas = []

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckBoxChange = (event) => {
    const { name, checked } = event.target;

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = (event) => {
    event.preventDefault();

    const newPizza = {...formValues}

    setPizzas([newPizza, ...pizzas])

  }

  return (
    <div className='App'>
      <nav>
        <Link to='/pizza'>Fill out Form</Link>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <Form
            onInputChange={onInputChange}
            onCheckBoxChange={onCheckBoxChange}
            onSubmit={onSubmit}
            values={formValues}
          />


          {
            pizzas.map(pizza => {
              return(
                <Pizza pizza={pizza} />
              )
            })
          }
        </Route>

        <Route path='/'>

        </Route>
      </Switch>
    </div>
  );
};
export default App;
