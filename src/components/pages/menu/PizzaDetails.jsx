import React from 'react'
import { useParams } from "react-router-dom"

const PizzaDetails = () => {
    const {title} = useParams();
  return (
    <div className='container'>
<h1 className='mt-5 text-primary'>Pizza Details :{title}</h1>
    </div>
  )
}

export default PizzaDetails