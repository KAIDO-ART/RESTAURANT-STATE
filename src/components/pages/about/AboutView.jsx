import React from 'react'
import PizzaList from '../menu/PizzaList'

const AboutView = () => {
  return (
    <div className='container'>
        <h1 className="mt-5 text-primary">Our Menu</h1>
        <PizzaList/>
    </div>
  )
}

export default AboutView