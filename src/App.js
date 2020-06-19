import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import './App.css'
import Form from './Form';
import Pizza from './Pizza'
import formValidation  from './formValidation'
import * as Yup from 'yup'
import { v4 as uuid } from 'uuid';

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

const initialFormErrors = {
  name: ''
}

const initialPizzas = []

const App = () => {

  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const onInputChange = (event) => {
    const { name, value } = event.target;

    Yup
      .reach(formValidation, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });

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

    // const newPizza = {...formValues}

    // setPizzas([newPizza, ...pizzas])

    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      instructions: formValues.instructions,
      // 🔥 STEP 8- WHAT ABOUT HOBBIES?
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping])
    }

    setPizzas([newPizza, ...pizzas])

    setFormValues(initialFormValues)

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
            formErrors={formErrors}
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
