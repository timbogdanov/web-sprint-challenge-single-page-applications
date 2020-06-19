import React from 'react'

const Form = (props) => {

  const {
    onInputChange,
    onCheckBoxChange,
    onSubmit,
    values,
    formErrors,
  } = props

  return (
    <div>

      <div>
        <p>{formErrors.name}</p>
        <p>{formErrors.size}</p>
        <p>{formErrors.toppings}</p>
        <p>{formErrors.instructions}</p>
      </div>

      <form onSubmit={onSubmit} >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='name'
          value={values.name}
          onChange={onInputChange}
        />

        <select
          name='size'
          onChange={onInputChange}
          value={values.size}
        >
          <option value=''>--- Pizza Size ---</option>
          <option value='Small'>Small</option>
          <option value='Large'>Large</option>
          <option value='Family'>Family</option>
        </select>

        <input
          type="checkbox"
          id='pepperoni'
          name='pepperoni'
          checked={values.toppings.pepperoni}
          onChange={onCheckBoxChange}
        />
        <label htmlFor="pepperoni">pepperoni</label>

        <input
          type="checkbox"
          id='pineapple'
          name='pineapple'
          checked={values.toppings.pineapple}
          onChange={onCheckBoxChange}
        />
        <label htmlFor="pineapple">pineapple</label>

        <input
          type="checkbox"
          id='bacon'
          name='bacon'
          checked={values.toppings.bacon}
          onChange={onCheckBoxChange}
        />
        <label htmlFor="bacon">bacon</label>

        <input
          type="checkbox"
          id='mushroom'
          name='mushroom'
          checked={values.toppings.mushroom}
          onChange={onCheckBoxChange}
        />
        <label htmlFor="mushroom">mushroom</label>

        <input
          type="checkbox"
          id='onion'
          name='onion'
          checked={values.toppings.onion}
          onChange={onCheckBoxChange}
        />
        <label htmlFor="onion">onion</label>

        <input
          type='text'
          name='instructions'
          placeholder='instructions'
          onChange={onInputChange}
          value={values.instructions}
        />

        <button>Add to Order</button>

      </form>
    </div>
  )
}

export default Form