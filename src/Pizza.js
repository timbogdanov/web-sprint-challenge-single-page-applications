import React from 'react'

const Pizza = (props) => {
  const { pizza } = props

  const topps = Object.entries(pizza.toppings)

  return (
    <div>
      <h2>{pizza.name}</h2>
      <p>{pizza.size}</p>
      <p>{pizza.instructions}</p>


      {
        topps.forEach(([key, value]) => <li>{key}: ${value}</li>)
      }
    </div>

  )
}

export default Pizza