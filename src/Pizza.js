import React from 'react'

const pizzaDiv = {
  backgroundColor: '#EEEEEE',
  padding: '20px 0',
  marginTop: '20px'
}

const Pizza = (props) => {
  const { pizza } = props

  return (
    <div style={pizzaDiv}>
      <h3>Name on Order: {pizza.name}</h3>
      <p>Pizza Size: {pizza.size}</p>
      <p>Additional Instructions: {pizza.instructions}</p>


      {
        !!pizza.toppings && !!pizza.toppings.length &&
        <div>
          Toppings:
          <ul>
            {pizza.toppings.map((like, idx) => {
              return <li key={idx}>{like}</li>
            })}
          </ul>
        </div>
      }

    </div>

  )
}

export default Pizza